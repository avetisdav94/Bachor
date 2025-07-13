import { Word } from "@/src/types";

export interface FavoriteWord extends Word {
  addedAt: string;
  category: string;
}

export interface FavoritesState {
  favorites: FavoriteWord[];
  addToFavorites: (word: Word, category: string) => void;
  removeFromFavorites: (wordId: string) => void;
  isFavorite: (wordId: string) => boolean;
}
