import { Colors } from "@/src/constants/colors";
import { Fonts } from "@/src/constants/fonts";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { useAuth } from "../src/context/AuthContext";

export default function Index() {
  const router = useRouter();
  const { user, loading } = useAuth();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Даем время для монтирования компонента
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isReady && !loading) {
      if (user) {
        // Пользователь авторизован - переходим в приложение
        router.replace("/(tabs)");
      } else {
        // Пользователь не авторизован - показываем онбординг
        router.replace("/onboarding");
      }
    }
  }, [isReady, loading, user, router]);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.background,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontSize: Fonts.titleLarge,
          fontWeight: Fonts.weightBold,
          color: Colors.text,
          marginBottom: 20,
        }}
      >
        Bachor
      </Text>

      {/* Показываем загрузку только если проверяем авторизацию */}
      {loading && (
        <>
          <ActivityIndicator
            size="large"
            color={Colors.primary}
            style={{ marginVertical: 20 }}
          />
          <Text
            style={{
              fontSize: Fonts.bodyMedium,
              color: Colors.textSecondary,
              marginTop: 10,
            }}
          >
            Загрузка...
          </Text>
        </>
      )}
    </View>
  );
}
