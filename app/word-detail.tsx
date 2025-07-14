import { WordDetailScreen } from "@/src/components/screens/WordDetailScreen";
import { Stack } from "expo-router";
import React from "react";

export default function WordDetail() {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <WordDetailScreen />
    </>
  );
}
