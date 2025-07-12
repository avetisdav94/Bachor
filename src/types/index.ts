export * from "./guide";
export * from "./words";

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  content: string;
  excerpt?: string;
  author?: string;
  category?: string;
}
export interface User {
  id: string;
  name: string;
  email: string;
  wordsViewed: number;
  categories: number;
}
