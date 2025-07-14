import { Word } from "@/src/types";

// Определяем тип для категорий
export type WordCategory =
  | "podstawowe"
  | "praca"
  | "dom"
  | "rozrywka"
  | "jedzenie";

// Типизируем структуру данных
export const wordsData: Record<WordCategory, Word[]> = {
  podstawowe: [
    {
      word: "Kolos",
      meaning: "Что-то очень большое, огромное",
      translation: "Колосс, гигант",
      examples: "Ten budynek to kolos!",
      detailedExamples: [
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
        {
          sentence: "To kolos roboty do zrobienia.",
          translation: "Это колоссальная работа для выполнения.",
          context: "О большом объеме работы",
        },
      ],
    },
    {
      word: "Spoko",
      meaning: "Хорошо, отлично, спокойно",
      translation: "Спокойно, круто",
      examples: "Spoko, nie ma problemu!",
      detailedExamples: [
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
        {
          sentence: "Spoko ziomek!",
          translation: "Классный парень!",
          context: "О друге",
        },
      ],
    },
    {
      word: "Ziomek",
      meaning: "Друг, приятель",
      translation: "Дружище, приятель",
      examples: "Cześć ziomek!",
      detailedExamples: [
        {
          sentence: "Cześć ziomek!",
          translation: "Привет, дружище!",
          context: "Приветствие",
        },
        {
          sentence: "Mój ziomek z pracy.",
          translation: "Мой приятель с работы.",
          context: "О коллеге",
        },
        {
          sentence: "Ziomek pomoże ci.",
          translation: "Приятель поможет тебе.",
          context: "О помощи",
        },
      ],
    },
  ],
  praca: [
    {
      word: "Robota",
      meaning: "Работа (сленг)",
      translation: "Работа, дело",
      examples: "Muszę iść do roboty.",
      detailedExamples: [
        {
          sentence: "Muszę iść do roboty.",
          translation: "Мне нужно идти на работу.",
          context: "О рабочем дне",
        },
        {
          sentence: "Dobra robota!",
          translation: "Хорошая работа!",
          context: "Похвала",
        },
      ],
    },
    {
      word: "Szef",
      meaning: "Начальник, босс",
      translation: "Шеф, босс",
      examples: "Szef jest dzisiaj w złym humorze.",
      detailedExamples: [
        {
          sentence: "Szef jest dzisiaj w złym humorze.",
          translation: "Шеф сегодня в плохом настроении.",
          context: "О настроении начальника",
        },
      ],
    },
  ],
  dom: [
    {
      word: "Chata",
      meaning: "Дом, квартира (сленг)",
      translation: "Хата, дом",
      examples: "Idziemy do mojej chaty.",
      detailedExamples: [
        {
          sentence: "Idziemy do mojej chaty.",
          translation: "Идем ко мне домой.",
          context: "Приглашение домой",
        },
      ],
    },
  ],
  rozrywka: [
    {
      word: "Impreza",
      meaning: "Вечеринка, тусовка",
      translation: "Вечеринка, тусовка",
      examples: "Była wczoraj świetna impreza!",
      detailedExamples: [
        {
          sentence: "Była wczoraj świetna impreza!",
          translation: "Вчера была отличная вечеринка!",
          context: "О прошедшей вечеринке",
        },
      ],
    },
  ],
  jedzenie: [
    {
      word: "Żarcie",
      meaning: "Еда (сленг)",
      translation: "Жрачка, еда",
      examples: "Gdzie jest dobre żarcie?",
      detailedExamples: [
        {
          sentence: "Gdzie jest dobre żarcie?",
          translation: "Где хорошая еда?",
          context: "Поиск еды",
        },
      ],
    },
  ],
};

// Исправляем функцию getAllWords
export const getAllWords = (): Word[] => {
  const allWords: Word[] = [];

  // Используем Object.keys с типизацией
  (Object.keys(wordsData) as WordCategory[]).forEach((category) => {
    allWords.push(...wordsData[category]);
  });

  return allWords;
};

export const wordOfTheDay = {
  word: "Ziomek",
  meaning: "Друг, приятель (польский сленг)",
  translation: "Кореш, приятель",
};

export const topWords = [
  { word: "Siano", meaning: "Деньги" },
  { word: "Mordo", meaning: "Дружище" },
  { word: "Spoko", meaning: "Ок, нормально" },
  { word: "Czaisz", meaning: "Понимаешь?" },
  { word: "Ziom", meaning: "Друг, кореш" },
];
