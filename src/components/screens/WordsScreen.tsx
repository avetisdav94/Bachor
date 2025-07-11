import { wordCategories } from "@/data/wordCategories";
import { Layout } from "@/src/constants/layout";
import React from "react";
import { Animated, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "../../components/common/Header";
import { CategoryCard } from "../../components/words/CategoryCard";
import { Colors } from "../../constants/colors";
import { useAnimation } from "../../hooks/useAnimation";

export const WordsScreen: React.FC = () => {
  const fadeAnim = useAnimation();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.background }}>
      <Animated.View style={{ flex: 1, opacity: fadeAnim }}>
        <Header
          title="Сленг словарь 🔥"
          subtitle="Изучайте современный сленг по категориям"
        />
        <FlatList
          data={wordCategories}
          keyExtractor={(item) => item.key}
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
