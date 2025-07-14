export interface SupabaseWord {
  id: number;
  word: string;
  meaning: string;
  translation: string;
  category: string;
  examples: string;
  detailed_examples: any;
  created_at: string;
}

export interface SupabaseCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  words_count: number;
  created_at: string;
}

export interface SupabaseWordOfTheDay {
  id: number;
  word_id: number;
  date: string;
  created_at: string;
  words: SupabaseWord; // Один объект, не массив
}

// Тип для JOIN запроса
export interface SupabaseWordOfTheDayJoin {
  word_id: number;
  words: SupabaseWord; // Должен быть объект, не массив
}
