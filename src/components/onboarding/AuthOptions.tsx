// src/components/onboarding/AuthOptions.tsx
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Colors } from "../../constants/colors";

interface AuthOptionsProps {
  onComplete: () => void;
}

export const AuthOptions: React.FC<AuthOptionsProps> = ({ onComplete }) => {
  const router = useRouter();

  const handleSignUp = () => {
    console.log("Navigating to sign-up"); // Для отладки
    router.push("/sign-up");
  };

  const handleSignIn = () => {
    console.log("Navigating to sign-in"); // Для отладки
    router.push("/sign-in");
  };

  const handleSkip = () => {
    console.log("Skipping auth"); // Для отладки
    onComplete();
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Готовы начать?</Text>
        <Text style={styles.subtitle}>
          Создайте аккаунт или войдите, чтобы сохранять прогресс
        </Text>

        {/* Кнопка регистрации */}
        <TouchableOpacity
          style={styles.primaryButton}
          onPress={handleSignUp}
          activeOpacity={0.8}
        >
          <Text style={styles.primaryButtonText}>Зарегистрироваться</Text>
        </TouchableOpacity>

        {/* Кнопка входа */}
        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={handleSignIn}
          activeOpacity={0.8}
        >
          <Text style={styles.secondaryButtonText}>
            Уже есть аккаунт? Войти
          </Text>
        </TouchableOpacity>

        {/* Кнопка пропуска */}
        <TouchableOpacity
          style={styles.skipButton}
          onPress={handleSkip}
          activeOpacity={0.8}
        >
          <Text style={styles.skipButtonText}>Пропустить</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 24,
    paddingTop: 40,
    paddingBottom: 40,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: -5 },
    elevation: 10,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: Colors.text,
    textAlign: "center",
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: Colors.textSecondary,
    textAlign: "center",
    lineHeight: 24,
    marginBottom: 40,
  },
  primaryButton: {
    backgroundColor: Colors.primary,
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 24,
    width: "100%",
    alignItems: "center",
    marginBottom: 16,
  },
  primaryButtonText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: "600",
  },
  secondaryButton: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 24,
    width: "100%",
    alignItems: "center",
    marginBottom: 16,
  },
  secondaryButtonText: {
    color: Colors.text,
    fontSize: 16,
    fontWeight: "500",
  },
  skipButton: {
    backgroundColor: "transparent",
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: "center",
  },
  skipButtonText: {
    color: Colors.textSecondary,
    fontSize: 14,
    fontWeight: "500",
  },
});
