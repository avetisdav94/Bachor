import { NewsDetailScreen } from "@/src/components/screens/NewsDetailScreen";
import { Stack } from "expo-router";
import React from "react";

export default function NewsDetail() {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <NewsDetailScreen />
    </>
  );
}
