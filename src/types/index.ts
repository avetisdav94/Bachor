export interface WordExampleDetail {
  sentence: string;
  translation: string;
  context?: string;
}

export interface Word {
  id?: string;
  word: string;
  meaning: string;
  translation?: string;
  examples?: string;
  detailedExamples?: WordExampleDetail[];
  category?: string;
  createdAt?: string;
}

export interface WordCategory {
  id: string;
  key: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  wordsCount: number;
}

export interface UserProfile {
  nickname: string;
  voivodeship: string;
  documentType: DocumentType;
  registrationDate: string;
  wordsViewed: number;
  favoriteWords: number;
}

export type DocumentType =
  | "none"
  | "tourist_visa"
  | "work_visa"
  | "student_visa"
  | "work_permit"
  | "residence_card"
  | "permanent_residence"
  | "eu_citizen";

export interface FavoriteWord {
  word: Word;
  category: string;
  addedAt: string;
}
