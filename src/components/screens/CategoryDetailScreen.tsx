// src/components/screens/CategoryDetailScreen.tsx
import { wordCategories } from "@/data/wordCategories";
import { Fonts } from "@/src/constants/fonts";
import { Layout } from "@/src/constants/layout";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { Animated, FlatList, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { WordCard } from "../../components/words/WordCard";
import { Colors } from "../../constants/colors";
import { useAnimation } from "../../hooks/useAnimation";

export const CategoryDetailScreen: React.FC = () => {
  const { category } = useLocalSearchParams<{ category: string }>();
  const router = useRouter();
  const fadeAnim = useAnimation();

  const categoryData = wordCategories.find((cat) => cat.key === category);

  if (!categoryData) {
    return null;
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.background }}>
      <Animated.View style={{ flex: 1, opacity: fadeAnim }}>
        {/* Custom Header */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: Layout.padding,
            paddingTop: 16,
            paddingBottom: 16,
            backgroundColor: Colors.background,
            borderBottomWidth: 1,
            borderBottomColor: Colors.border,
          }}
        >
          <TouchableOpacity
            onPress={() => router.back()}
            style={{
              backgroundColor: Colors.card,
              borderRadius: 12,
              width: 40,
              height: 40,
              justifyContent: "center",
              alignItems: "center",
              marginRight: 16,
            }}
          >
            <Ionicons name="arrow-back" size={20} color={Colors.text} />
          </TouchableOpacity>

          <View style={{ flex: 1 }}>
            <Text
              style={{
                fontSize: Fonts.titleMedium,
                fontWeight: Fonts.weightBold,
                color: Colors.text,
              }}
            >
              {categoryData.title}
            </Text>
            <Text
              style={{
                fontSize: Fonts.bodyMedium,
                color: Colors.textSecondary,
              }}
            >
              {categoryData.words.length} слов
            </Text>
          </View>
        </View>

        {/* Words List */}
        <FlatList
          data={categoryData.words}
          keyExtractor={(item, index) => `${item.word}-${index}`}
          contentContainerStyle={{
            paddingHorizontal: Layout.padding,
            paddingTop: Layout.padding,
            paddingBottom: Layout.padding,
          }}
          renderItem={({ item }) => <WordCard word={item} />}
          showsVerticalScrollIndicator={false}
        />
      </Animated.View>
    </SafeAreaView>
  );
};
