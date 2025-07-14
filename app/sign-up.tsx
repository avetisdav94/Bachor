// app/sign-up.tsx
import { SignUpScreen } from "@/src/components/screens/SignUpScreen";
import { Stack } from "expo-router";
import React from "react";

export default function SignUp() {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <SignUpScreen />
    </>
  );
}
