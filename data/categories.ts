// data/categories.ts
import { WordCategory } from "../src/types";

export const categories: WordCategory[] = [
  {
    id: "podstawowe",
    key: "podstawowe",
    title: "Основные слова",
    description: "Самые употребляемые слова польского сленга",
    icon: "🔤",
    color: "#3B82F6",
    wordsCount: 15,
  },
  {
    id: "praca",
    key: "praca",
    title: "Работа",
    description: "Сленг связанный с работой и карьерой",
    icon: "💼",
    color: "#10B981",
    wordsCount: 8,
  },
  {
    id: "dom",
    key: "dom",
    title: "Дом и быт",
    description: "Слова о доме, семье и повседневной жизни",
    icon: "🏠",
    color: "#F59E0B",
    wordsCount: 6,
  },
  {
    id: "rozrywka",
    key: "rozrywka",
    title: "Развлечения",
    description: "Сленг о развлечениях и досуге",
    icon: "🎉",
    color: "#EF4444",
    wordsCount: 5,
  },
  {
    id: "jedzenie",
    key: "jedzenie",
    title: "Еда и напитки",
    description: "Сленг связанный с едой и напитками",
    icon: "🍕",
    color: "#8B5CF6",
    wordsCount: 4,
  },
];
