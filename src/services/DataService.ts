// src/services/DataService.ts
import { categories } from "../../data/categories";
import { getAllWords } from "../../data/words";
import { Word, WordCategory } from "../types";
import { SupabaseService } from "./SupabaseService";

export class DataService {
  // Проверка подключения к интернету
  static async isOnline(): Promise<boolean> {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 5000);

      const response = await fetch("https://www.google.com", {
        method: "HEAD",
        signal: controller.signal,
      });

      clearTimeout(timeoutId);
      return response.ok;
    } catch (error) {
      return false;
    }
  }

  // Получить все слова (Supabase + fallback)
  static async getAllWords(): Promise<Word[]> {
    try {
      const isOnline = await this.isOnline();

      if (isOnline) {
        try {
          const words = await SupabaseService.getAllWords();
          if (Array.isArray(words)) {
            console.log("Loaded words from Supabase:", words.length);
            return words;
          }
        } catch (supabaseError) {
          console.error("Supabase failed, using local data:", supabaseError);
        }
      }

      // Fallback на локальные данные
      const words = getAllWords();
      if (Array.isArray(words)) {
        console.log("Loaded words from local data:", words.length);
        return words;
      }

      return [];
    } catch (error) {
      console.error("Error in getAllWords:", error);
      return [];
    }
  }

  // Получить все категории (Supabase + fallback)
  static async getAllCategories(): Promise<WordCategory[]> {
    try {
      const isOnline = await this.isOnline();

      if (isOnline) {
        try {
          const cats = await SupabaseService.getAllCategories();
          if (Array.isArray(cats) && cats.length > 0) {
            console.log("Loaded categories from Supabase:", cats.length);
            return cats;
          }
        } catch (supabaseError) {
          console.error(
            "Supabase failed, using local categories:",
            supabaseError
          );
        }
      }

      // Fallback на локальные данные
      if (Array.isArray(categories) && categories.length > 0) {
        console.log("Loaded categories from local data:", categories.length);
        return categories;
      }

      return [];
    } catch (error) {
      console.error("Error in getAllCategories:", error);
      return Array.isArray(categories) ? categories : [];
    }
  }

  // Получить слово дня (Supabase + fallback) - ДОБАВЛЯЕМ ЭТОТ МЕТОД
  static async getWordOfTheDay(): Promise<Word | null> {
    try {
      const isOnline = await this.isOnline();

      if (isOnline) {
        try {
          const word = await SupabaseService.getWordOfTheDay();
          if (word) {
            console.log("Loaded word of the day from Supabase:", word.word);
            return word;
          }
        } catch (supabaseError) {
          console.error("Supabase failed for word of the day:", supabaseError);
        }
      }

      // Fallback - случайное слово из локальных данных
      const allWords = getAllWords();
      if (!Array.isArray(allWords) || allWords.length === 0) {
        console.warn("No words available for word of the day");
        return null;
      }

      // Создаем детерминированное "случайное" слово на основе даты
      const today = new Date().toISOString().split("T")[0];
      const seed = today
        .split("-")
        .reduce((acc, val) => acc + parseInt(val), 0);
      const index = seed % allWords.length;

      console.log("Using local word of the day:", allWords[index].word);
      return allWords[index];
    } catch (error) {
      console.error("Error in getWordOfTheDay:", error);
      return null;
    }
  }

  // Получить слова по категории
  static async getWordsByCategory(categoryId: string): Promise<Word[]> {
    try {
      if (!categoryId) {
        console.warn("getWordsByCategory: categoryId is undefined");
        return [];
      }

      const isOnline = await this.isOnline();

      if (isOnline) {
        try {
          const words = await SupabaseService.getWordsByCategory(categoryId);
          if (Array.isArray(words)) {
            console.log(
              `Loaded ${words.length} words from Supabase for category ${categoryId}`
            );
            return words;
          }
        } catch (supabaseError) {
          console.error("Supabase failed for category:", supabaseError);
        }
      }

      // Fallback на локальные данные
      const allWords = getAllWords();
      if (Array.isArray(allWords)) {
        const filteredWords = allWords.filter(
          (word) => word.category === categoryId
        );
        console.log(
          `Loaded ${filteredWords.length} words from local data for category ${categoryId}`
        );
        return filteredWords;
      }

      return [];
    } catch (error) {
      console.error("Error in getWordsByCategory:", error);
      return [];
    }
  }

  // Поиск слов
  static async searchWords(searchTerm: string): Promise<Word[]> {
    try {
      if (!searchTerm || searchTerm.trim() === "") {
        return [];
      }

      const isOnline = await this.isOnline();

      if (isOnline) {
        try {
          const results = await SupabaseService.searchWords(searchTerm);
          if (Array.isArray(results)) {
            console.log(
              `Found ${results.length} results in Supabase for "${searchTerm}"`
            );
            return results;
          }
        } catch (supabaseError) {
          console.error("Supabase search failed:", supabaseError);
        }
      }

      // Fallback на локальные данные
      const allWords = getAllWords();
      if (Array.isArray(allWords)) {
        const results = allWords.filter(
          (word) =>
            word.word.toLowerCase().includes(searchTerm.toLowerCase()) ||
            word.meaning.toLowerCase().includes(searchTerm.toLowerCase()) ||
            (word.translation &&
              word.translation.toLowerCase().includes(searchTerm.toLowerCase()))
        );
        console.log(
          `Found ${results.length} results in local data for "${searchTerm}"`
        );
        return results;
      }

      return [];
    } catch (error) {
      console.error("Error in searchWords:", error);
      return [];
    }
  }

  // Инициализация пользователя
  static async initializeUser(): Promise<void> {
    try {
      console.log("User initialized with Supabase");
      // Можно добавить дополнительную логику инициализации
    } catch (error) {
      console.error("Error initializing user:", error);
    }
  }
}
