import { FavoritesProvider } from "@/src/context/FavoritesContext";
import { Stack } from "expo-router";
import React from "react";

export default function RootLayout() {
  return (
    <FavoritesProvider>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="onboarding" />
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="news-detail" />
        <Stack.Screen name="search" />
        <Stack.Screen name="favorites" />
      </Stack>
    </FavoritesProvider>
  );
}
