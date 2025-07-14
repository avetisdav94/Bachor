import { SignInScreen } from "@/src/components/screens/SignInScreen";
import { Stack } from "expo-router";
import React from "react";

export default function SignIn() {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <SignInScreen />
    </>
  );
}
