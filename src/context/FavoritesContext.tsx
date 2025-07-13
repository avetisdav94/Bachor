import { Word } from "@/src/types";
import { FavoriteWord, FavoritesState } from "@/src/types/favorites";
import React, { ReactNode, createContext, useContext, useState } from "react";

const FavoritesContext = createContext<FavoritesState | undefined>(undefined);

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }
  return context;
};

interface FavoritesProviderProps {
  children: ReactNode;
}

export const FavoritesProvider: React.FC<FavoritesProviderProps> = ({
  children,
}) => {
  const [favorites, setFavorites] = useState<FavoriteWord[]>([]);

  const addToFavorites = (word: Word, category: string) => {
    const favoriteWord: FavoriteWord = {
      ...word,
      category,
      addedAt: new Date().toISOString(),
    };

    setFavorites((prev) => {
      if (prev.find((f) => f.word === word.word)) {
        return prev;
      }
      return [...prev, favoriteWord];
    });
  };

  const removeFromFavorites = (wordId: string) => {
    setFavorites((prev) => prev.filter((f) => f.word !== wordId));
  };

  const isFavorite = (wordId: string) => {
    return favorites.some((f) => f.word === wordId);
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
