import { Colors } from "@/src/constants/colors"; // Исправляем импорт Colors
import { Fonts } from "@/src/constants/fonts";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";

export default function Index() {
  const router = useRouter();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Даем время для монтирования компонента
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isReady) {
      // Проверяем, первый ли раз пользователь открывает приложение
      // В будущем здесь будет проверка AsyncStorage
      const isFirstLaunch = true; // Пока всегда true

      if (isFirstLaunch) {
        router.replace("/onboarding");
      } else {
        router.replace("/(tabs)");
      }
    }
  }, [isReady, router]);

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
        }}
      >
        Bachor
      </Text>
    </View>
  );
}
