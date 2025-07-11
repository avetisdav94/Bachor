// app/(tabs)/words/_layout.tsx
import { Stack } from "expo-router";
import React from "react";

export default function WordsLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false, // Убираем заголовки для всех экранов в words
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="[category]" />
    </Stack>
  );
}
