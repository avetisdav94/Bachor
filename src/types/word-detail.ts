export interface WordDetailParams {
  word: string;
  category?: string;
}

export interface WordExamples {
  sentence: string;
  translation: string;
  context?: string;
}
