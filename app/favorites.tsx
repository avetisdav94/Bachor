import { FavoritesScreen } from "@/src/components/screens/FavoritesScreen";
import { Stack } from "expo-router";
import React from "react";

export default function Favorites() {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <FavoritesScreen />
    </>
  );
}
