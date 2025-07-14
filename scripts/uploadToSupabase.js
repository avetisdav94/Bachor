// scripts/uploadToSupabase.js
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://cshtiyegdpdqnymbbgdc.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNzaHRpeWVnZHBkcW55bWJiZ2RjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI1MDMxMTMsImV4cCI6MjA2ODA3OTExM30.hmEuPA0yBgwa01P3c5Ws0tahatbnz-X0tgLcTtSMN44";
const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Данные категорий
const categories = [
  {
    id: "podstawowe",
    title: "Основные слова",
    description: "Самые употребляемые слова польского сленга",
    icon: "🔤",
    color: "#3B82F6",
    words_count: 15,
  },
  {
    id: "praca",
    title: "Работа",
    description: "Сленг связанный с работой и карьерой",
    icon: "💼",
    color: "#10B981",
    words_count: 8,
  },
  {
    id: "dom",
    title: "Дом и быт",
    description: "Слова о доме, семье и повседневной жизни",
    icon: "🏠",
    color: "#F59E0B",
    words_count: 6,
  },
  {
    id: "rozrywka",
    title: "Развлечения",
    description: "Сленг о развлечениях и досуге",
    icon: "🎉",
    color: "#EF4444",
    words_count: 5,
  },
  {
    id: "jedzenie",
    title: "Еда и напитки",
    description: "Сленг связанный с едой и напитками",
    icon: "🍕",
    color: "#8B5CF6",
    words_count: 4,
  },
];

// Данные слов
const words = [
  {
    word: "Kolos",
    meaning: "Что-то очень большое, огромное",
    translation: "Колосс, гигант",
    category: "podstawowe",
    examples: "Ten budynek to kolos!",
    detailed_examples: [
      {
        sentence: "Ten budynek to kolos!",
        translation: "Это здание - колосс!",
        context: "О большом здании",
      },
      {
        sentence: "Masz kolos szczęścia!",
        translation: "У тебя колоссальная удача!",
        context: "О везении",
      },
    ],
  },
  {
    word: "Spoko",
    meaning: "Хорошо, отлично, спокойно",
    translation: "Спокойно, круто",
    category: "podstawowe",
    examples: "Spoko, nie ma problemu!",
    detailed_examples: [
      {
        sentence: "Spoko, nie ma problemu!",
        translation: "Спокойно, нет проблем!",
        context: "Согласие",
      },
      {
        sentence: "Ten film był spoko.",
        translation: "Этот фильм был классным.",
        context: "Оценка фильма",
      },
    ],
  },
  {
    word: "Ziomek",
    meaning: "Друг, приятель",
    translation: "Дружище, приятель",
    category: "podstawowe",
    examples: "Cześć ziomek!",
    detailed_examples: [
      {
        sentence: "Cześć ziomek!",
        translation: "Привет, дружище!",
        context: "Приветствие",
      },
    ],
  },
  {
    word: "Robota",
    meaning: "Работа (сленг)",
    translation: "Работа, дело",
    category: "praca",
    examples: "Muszę iść do roboty.",
    detailed_examples: [
      {
        sentence: "Muszę iść do roboty.",
        translation: "Мне нужно идти на работу.",
        context: "О рабочем дне",
      },
    ],
  },
  {
    word: "Szef",
    meaning: "Начальник, босс",
    translation: "Шеф, босс",
    category: "praca",
    examples: "Szef jest dzisiaj w złym humorze.",
    detailed_examples: [
      {
        sentence: "Szef jest dzisiaj w złym humorze.",
        translation: "Шеф сегодня в плохом настроении.",
        context: "О настроении начальника",
      },
    ],
  },
  {
    word: "Chata",
    meaning: "Дом, квартира (сленг)",
    translation: "Хата, дом",
    category: "dom",
    examples: "Idziemy do mojej chaty.",
    detailed_examples: [
      {
        sentence: "Idziemy do mojej chaty.",
        translation: "Идем ко мне домой.",
        context: "Приглашение домой",
      },
    ],
  },
  {
    word: "Impreza",
    meaning: "Вечеринка, тусовка",
    translation: "Вечеринка, тусовка",
    category: "rozrywka",
    examples: "Była wczoraj świetna impreza!",
    detailed_examples: [
      {
        sentence: "Była wczoraj świetna impreza!",
        translation: "Вчера была отличная вечеринка!",
        context: "О прошедшей вечеринке",
      },
    ],
  },
  {
    word: "Żarcie",
    meaning: "Еда (сленг)",
    translation: "Жрачка, еда",
    category: "jedzenie",
    examples: "Gdzie jest dobre żarcie?",
    detailed_examples: [
      {
        sentence: "Gdzie jest dobre żarcie?",
        translation: "Где хорошая еда?",
        context: "Поиск еды",
      },
    ],
  },
];

async function uploadData() {
  console.log("📝 Uploading words...");

  for (const word of words) {
    // Проверяем, существует ли уже такое слово
    const { data: existingWord, error: checkError } = await supabase
      .from("words")
      .select("id")
      .eq("word", word.word)
      .single();

    if (checkError && checkError.code !== "PGRST116") {
      console.error(`❌ Error checking word ${word.word}:`, checkError);
      continue;
    }

    if (existingWord) {
      console.log(`⚠️  Word already exists, skipping: ${word.word}`);
      continue;
    }

    // Загружаем новое слово
    const { error } = await supabase.from("words").insert(word);

    if (error) {
      console.error(`❌ Error uploading word ${word.word}:`, error);
    } else {
      console.log(`✅ Word uploaded: ${word.word}`);
    }
  }
  try {
    console.log("🚀 Uploading data to Supabase...");

    // Загружаем категории
    console.log("📚 Uploading categories...");
    const { data: categoriesData, error: categoriesError } = await supabase
      .from("categories")
      .insert(categories);

    if (categoriesError) {
      console.error("Error uploading categories:", categoriesError);
    } else {
      console.log("✅ Categories uploaded successfully!");
    }

    // Загружаем слова
    console.log("📝 Uploading words...");
    const { data: wordsData, error: wordsError } = await supabase
      .from("words")
      .insert(words);

    if (wordsError) {
      console.error("Error uploading words:", wordsError);
    } else {
      console.log("✅ Words uploaded successfully!");
    }

    // Создаем слово дня
    console.log("🌅 Creating word of the day...");
    const { data: wordOfDayData, error: wordOfDayError } = await supabase
      .from("word_of_the_day")
      .insert({
        word_id: 1, // ID первого слова
        date: new Date().toISOString().split("T")[0],
      });

    if (wordOfDayError) {
      console.error("Error creating word of the day:", wordOfDayError);
    } else {
      console.log("✅ Word of the day created!");
    }

    console.log("🎉 All data uploaded successfully!");
  } catch (error) {
    console.error("❌ Error uploading data:", error);
  }
}

uploadData();
