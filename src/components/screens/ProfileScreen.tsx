import { Fonts } from "@/src/constants/fonts";
import { Layout } from "@/src/constants/layout";
import React from "react";
import { Animated, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Card } from "../../components/common/Card";
import { Header } from "../../components/common/Header";
import { Colors } from "../../constants/colors";
import { useAnimation } from "../../hooks/useAnimation";
import { FavoritesCard } from "../profile/FavoritesCard";

export const ProfileScreen: React.FC = () => {
  const fadeAnim = useAnimation();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.background }}>
      <Animated.View style={{ flex: 1, opacity: fadeAnim }}>
        <ScrollView
          contentContainerStyle={{ paddingBottom: Layout.padding }}
          showsVerticalScrollIndicator={false}
        >
          <Header title="Профиль 👤" subtitle="Ваши настройки и информация" />

          {/* Профиль пользователя */}
          <View
            style={{
              paddingHorizontal: Layout.padding,
              marginBottom: Layout.padding,
            }}
          >
            <Card>
              <View style={{ alignItems: "center", marginBottom: 20 }}>
                <View
                  style={{
                    backgroundColor: "#dbeafe",
                    borderRadius: 40,
                    width: 80,
                    height: 80,
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: 16,
                  }}
                >
                  <Text style={{ fontSize: 36 }}>👨‍💻</Text>
                </View>
                <Text
                  style={{
                    fontSize: Fonts.titleMedium,
                    fontWeight: Fonts.weightBold,
                    color: Colors.text,
                    marginBottom: 4,
                  }}
                >
                  Пользователь
                </Text>
                <Text
                  style={{
                    fontSize: Fonts.bodyLarge,
                    color: Colors.textSecondary,
                  }}
                >
                  Использую справочник с 2024
                </Text>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                }}
              >
                <View style={{ alignItems: "center" }}>
                  <Text
                    style={{
                      fontSize: 24,
                      fontWeight: Fonts.weightBold,
                      color: Colors.primary,
                    }}
                  >
                    127
                  </Text>
                  <Text
                    style={{
                      fontSize: Fonts.bodySmall,
                      color: Colors.textSecondary,
                    }}
                  >
                    Слов просмотрено
                  </Text>
                </View>
                <View style={{ alignItems: "center" }}>
                  <Text
                    style={{
                      fontSize: 24,
                      fontWeight: Fonts.weightBold,
                      color: Colors.error,
                    }}
                  >
                    5
                  </Text>
                  <Text
                    style={{
                      fontSize: Fonts.bodySmall,
                      color: Colors.textSecondary,
                    }}
                  >
                    Категорий
                  </Text>
                </View>
              </View>
            </Card>
          </View>

          {/* Избранные слова */}
          <View
            style={{
              paddingHorizontal: Layout.padding,
              marginBottom: Layout.padding,
            }}
          >
            <FavoritesCard />
          </View>

          {/* Остальной код остается тот же */}
          {/* ... */}
        </ScrollView>
      </Animated.View>
    </SafeAreaView>
  );
};
