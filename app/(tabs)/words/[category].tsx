import { CategoryDetailScreen } from "@/src/components/screens/CategoryDetailScreen";
import { Stack } from "expo-router";
import React from "react";

export default function CategoryDetail() {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false, // Убираем верхний заголовок
        }}
      />
      <CategoryDetailScreen />
    </>
  );
}
