export * from "./guide";
export * from "./words";

export interface NewsItem {
  title: string;
  date: string;
  content?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  wordsViewed: number;
  categories: number;
}
