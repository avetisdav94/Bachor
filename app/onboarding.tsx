import { OnboardingScreen } from "@/src/components/screens/OnboardingScreen";
import { Stack } from "expo-router";
import React from "react";

export default function Onboarding() {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <OnboardingScreen />
    </>
  );
}
