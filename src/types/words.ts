export interface Word {
  word: string;
  meaning: string;
  translation?: string;
  pronunciation?: string;
  examples?: string[];
}

export interface WordCategory {
  key: string;
  title: string;
  color: string;
  words: Word[];
}

export interface WordOfTheDay {
  word: string;
  meaning: string;
  translation: string;
}
