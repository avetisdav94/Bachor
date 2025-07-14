// src/services/SupabaseService.ts
import { supabase } from "@/config/supabase";
import { Word, WordCategory } from "../types";

export class SupabaseService {
  // Получить все слова
  static async getAllWords(): Promise<Word[]> {
    const { data, error } = await supabase
      .from("words")
      .select("*")
      .order("word", { ascending: true });

    if (error) throw error;
    if (!data) return [];

    // Убираем дубликаты по полю word
    const uniqueWords = data.filter(
      (word, index, self) =>
        index === self.findIndex((w) => w.word === word.word)
    );

    return uniqueWords.map((word) => ({
      id: word.id.toString(),
      word: word.word,
      meaning: word.meaning,
      translation: word.translation,
      category: word.category,
      examples: word.examples,
      detailedExamples: word.detailed_examples,
      createdAt: word.created_at,
    }));
  }

  // Получить слова по категории
  static async getWordsByCategory(categoryId: string): Promise<Word[]> {
    const { data, error } = await supabase
      .from("words")
      .select("*")
      .eq("category", categoryId)
      .order("word", { ascending: true });

    if (error) throw error;
    if (!data) return [];

    // Убираем дубликаты по полю word
    const uniqueWords = data.filter(
      (word, index, self) =>
        index === self.findIndex((w) => w.word === word.word)
    );

    return uniqueWords.map((word) => ({
      id: word.id.toString(),
      word: word.word,
      meaning: word.meaning,
      translation: word.translation,
      category: word.category,
      examples: word.examples,
      detailedExamples: word.detailed_examples,
      createdAt: word.created_at,
    }));
  }

  // Поиск слов
  static async searchWords(searchTerm: string): Promise<Word[]> {
    const { data, error } = await supabase
      .from("words")
      .select("*")
      .or(
        `word.ilike.%${searchTerm}%,meaning.ilike.%${searchTerm}%,translation.ilike.%${searchTerm}%`
      );

    if (error) throw error;
    if (!data) return [];

    // Убираем дубликаты по полю word
    const uniqueWords = data.filter(
      (word, index, self) =>
        index === self.findIndex((w) => w.word === word.word)
    );

    return uniqueWords.map((word) => ({
      id: word.id.toString(),
      word: word.word,
      meaning: word.meaning,
      translation: word.translation,
      category: word.category,
      examples: word.examples,
      detailedExamples: word.detailed_examples,
      createdAt: word.created_at,
    }));
  }

  // Получить все категории
  static async getAllCategories(): Promise<WordCategory[]> {
    const { data, error } = await supabase
      .from("categories")
      .select("*")
      .order("title", { ascending: true });

    if (error) throw error;
    if (!data) return [];

    return data.map((category) => ({
      id: category.id,
      key: category.id,
      title: category.title,
      description: category.description,
      icon: category.icon,
      color: category.color,
      wordsCount: category.words_count,
    }));
  }

  // Получить слово дня - УБЕДИТЕСЬ ЧТО ЭТОТ МЕТОД ЕСТЬ
  static async getWordOfTheDay(): Promise<Word | null> {
    const today = new Date().toISOString().split("T")[0];

    try {
      // Сначала получаем запись слова дня
      const { data: wordOfDayData, error: wordOfDayError } = await supabase
        .from("word_of_the_day")
        .select("word_id")
        .eq("date", today)
        .single();

      let wordId: number;

      if (wordOfDayError) {
        if (wordOfDayError.code === "PGRST116") {
          // Слово дня не найдено, создаем новое
          return await this.createWordOfTheDay();
        }
        throw wordOfDayError;
      }

      if (!wordOfDayData) {
        return await this.createWordOfTheDay();
      }

      wordId = wordOfDayData.word_id;

      // Теперь получаем само слово
      const { data: wordData, error: wordError } = await supabase
        .from("words")
        .select("*")
        .eq("id", wordId)
        .single();

      if (wordError) throw wordError;
      if (!wordData) return null;

      return {
        id: wordData.id.toString(),
        word: wordData.word,
        meaning: wordData.meaning,
        translation: wordData.translation,
        category: wordData.category,
        examples: wordData.examples,
        detailedExamples: wordData.detailed_examples,
        createdAt: wordData.created_at,
      };
    } catch (error) {
      console.error("Error getting word of the day:", error);
      return null;
    }
  }

  // Создать слово дня
  private static async createWordOfTheDay(): Promise<Word | null> {
    try {
      // Получаем все слова
      const { data: wordsData, error: wordsError } = await supabase
        .from("words")
        .select("id");

      if (wordsError) {
        console.error("Error getting words:", wordsError);
        return null;
      }

      if (!wordsData || wordsData.length === 0) {
        console.error("No words found in database");
        return null;
      }

      // Выбираем детерминированное слово на основе даты
      const today = new Date().toISOString().split("T")[0];
      const seed = today
        .split("-")
        .reduce((acc, val) => acc + parseInt(val), 0);
      const wordIndex = seed % wordsData.length;
      const selectedWordId = wordsData[wordIndex].id;

      // Создаем запись слова дня с upsert
      const { error: insertError } = await supabase
        .from("word_of_the_day")
        .upsert(
          {
            word_id: selectedWordId,
            date: today,
          },
          { onConflict: "date" }
        );

      if (insertError) {
        console.error("Error inserting word of the day:", insertError);

        // Если это ошибка RLS, возвращаем случайное слово
        if (insertError.code === "42501") {
          const { data: wordData, error: wordError } = await supabase
            .from("words")
            .select("*")
            .eq("id", selectedWordId)
            .single();

          if (wordError) {
            console.error("Error getting word:", wordError);
            return null;
          }

          if (!wordData) return null;

          return {
            id: wordData.id.toString(),
            word: wordData.word,
            meaning: wordData.meaning,
            translation: wordData.translation,
            category: wordData.category,
            examples: wordData.examples,
            detailedExamples: wordData.detailed_examples,
            createdAt: wordData.created_at,
          };
        }

        return null;
      }

      // Получаем созданное слово дня
      return await this.getWordOfTheDay();
    } catch (error) {
      console.error("Error creating word of the day:", error);
      return null;
    }
  }
}
