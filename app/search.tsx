// app/search.tsx
import { SearchScreen } from "@/src/components/screens/SearchScreen";
import { Stack } from "expo-router";
import React from "react";

export default function Search() {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <SearchScreen />
    </>
  );
}
