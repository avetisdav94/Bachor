import { Colors } from "@/src/constants/colors";
import { Fonts } from "@/src/constants/fonts";
import { Layout } from "@/src/constants/layout";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const AuthOptions: React.FC = () => {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const handleGoogleSignIn = () => {
    Alert.alert("Google Sign In", "Функция будет добавлена позже");
  };

  const handleEmailSignUp = () => {
    Alert.alert("Email Sign Up", "Функция будет добавлена позже");
  };

  const handleContinueAsGuest = () => {
    router.replace("/(tabs)");
  };

  return (
    <View
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: Colors.background,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: Layout.padding * 2,
        paddingTop: 40,
        paddingBottom: Math.max(insets.bottom, 40), // Учитываем safe area
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: -5 },
        elevation: 10,
      }}
    >
      {/* Google Sign In */}
      <TouchableOpacity
        onPress={handleGoogleSignIn}
        style={{
          backgroundColor: "#4285f4",
          borderRadius: 16,
          paddingVertical: 18, // Увеличиваем размер
          paddingHorizontal: 24,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 16,
          shadowColor: "#4285f4",
          shadowOpacity: 0.3,
          shadowRadius: 10,
          shadowOffset: { width: 0, height: 4 },
          elevation: 5,
        }}
      >
        <Ionicons
          name="logo-google"
          size={24}
          color={Colors.background}
          style={{ marginRight: 12 }}
        />
        <Text
          style={{
            fontSize: Fonts.bodyLarge,
            fontWeight: Fonts.weightSemiBold,
            color: Colors.background,
          }}
        >
          Войти через Google
        </Text>
      </TouchableOpacity>

      {/* Email Sign Up */}
      <TouchableOpacity
        onPress={handleEmailSignUp}
        style={{
          backgroundColor: Colors.primary,
          borderRadius: 16,
          paddingVertical: 18, // Увеличиваем размер
          paddingHorizontal: 24,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 16,
          shadowColor: Colors.primary,
          shadowOpacity: 0.3,
          shadowRadius: 10,
          shadowOffset: { width: 0, height: 4 },
          elevation: 5,
        }}
      >
        <Ionicons
          name="mail"
          size={24}
          color={Colors.background}
          style={{ marginRight: 12 }}
        />
        <Text
          style={{
            fontSize: Fonts.bodyLarge,
            fontWeight: Fonts.weightSemiBold,
            color: Colors.background,
          }}
        >
          Зарегистрироваться
        </Text>
      </TouchableOpacity>

      {/* Continue as Guest */}
      <TouchableOpacity
        onPress={handleContinueAsGuest}
        style={{
          backgroundColor: "transparent",
          borderRadius: 16,
          paddingVertical: 18, // Увеличиваем размер
          paddingHorizontal: 24,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          borderWidth: 2,
          borderColor: Colors.border,
        }}
      >
        <Ionicons
          name="person"
          size={24}
          color={Colors.textSecondary}
          style={{ marginRight: 12 }}
        />
        <Text
          style={{
            fontSize: Fonts.bodyLarge,
            fontWeight: Fonts.weightSemiBold,
            color: Colors.textSecondary,
          }}
        >
          Продолжить как гость
        </Text>
      </TouchableOpacity>

      {/* Terms */}
      <Text
        style={{
          fontSize: Fonts.bodySmall,
          color: Colors.textSecondary,
          textAlign: "center",
          marginTop: 24,
          lineHeight: 20,
        }}
      >
        Продолжая, вы соглашаетесь с{" "}
        <Text
          style={{ color: Colors.primary, fontWeight: Fonts.weightSemiBold }}
        >
          Условиями использования
        </Text>{" "}
        и{" "}
        <Text
          style={{ color: Colors.primary, fontWeight: Fonts.weightSemiBold }}
        >
          Политикой конфиденциальности
        </Text>
      </Text>
    </View>
  );
};
