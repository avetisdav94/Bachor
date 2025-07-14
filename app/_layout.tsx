// app/_layout.tsx
import "core-js/stable/structured-clone"; // Добавляем в самый верх
import { Stack } from "expo-router";
import React from "react";
import { AuthProvider } from "../src/context/AuthContext";
import { FavoritesProvider } from "../src/context/FavoritesContext";
import { ProfileProvider } from "../src/context/ProfileContext";

export default function RootLayout() {
  return (
    <AuthProvider>
      <FavoritesProvider>
        <ProfileProvider>
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" />
            <Stack.Screen name="onboarding" />
            <Stack.Screen name="sign-in" />
            <Stack.Screen name="sign-up" />
            <Stack.Screen name="(tabs)" />
          </Stack>
        </ProfileProvider>
      </FavoritesProvider>
    </AuthProvider>
  );
}
