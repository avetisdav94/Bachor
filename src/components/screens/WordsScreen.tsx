// src/components/screens/WordsScreen.tsx (обновленная версия)
import { wordCategories } from "@/data/wordCategories";
import { Header } from "@/src/components/common/Header";
import { Colors } from "@/src/constants/colors";
import { Fonts } from "@/src/constants/fonts";
import { Layout } from "@/src/constants/layout";
import { useAnimation } from "@/src/hooks/useAnimation";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Animated, FlatList, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CategoryCard } from "../words/CategoryCard";

export const WordsScreen: React.FC = () => {
  const fadeAnim = useAnimation();
  const router = useRouter();

  const HeaderComponent = () => (
    <View>
      <Header
        title="Сленг словарь 🔥"
        subtitle="Изучайте современный сленг по категориям"
      />

      {/* Search Button */}
      <View style={{ paddingHorizontal: Layout.padding, marginBottom: 16 }}>
        <TouchableOpacity
          onPress={() => router.push("/search")}
          style={{
            backgroundColor: Colors.primary,
            borderRadius: 16,
            paddingVertical: 16,
            paddingHorizontal: 20,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            shadowColor: Colors.primary,
            shadowOpacity: 0.3,
            shadowRadius: 10,
            shadowOffset: { width: 0, height: 4 },
            elevation: 5,
          }}
        >
          <Ionicons
            name="search"
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
            Поиск по словарю
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.background }}>
      <Animated.View style={{ flex: 1, opacity: fadeAnim }}>
        <FlatList
          data={wordCategories}
          keyExtractor={(item) => item.key}
          ListHeaderComponent={HeaderComponent}
          contentContainerStyle={{
            paddingHorizontal: Layout.padding,
            paddingBottom: Layout.padding,
          }}
          renderItem={({ item }) => <CategoryCard category={item} />}
          showsVerticalScrollIndicator={false}
        />
      </Animated.View>
    </SafeAreaView>
  );
};
