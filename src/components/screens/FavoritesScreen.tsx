// src/components/screens/FavoritesScreen.tsx
import { WordCard } from "@/src/components/words/WordCard";
import { Colors } from "@/src/constants/colors";
import { Fonts } from "@/src/constants/fonts";
import { Layout } from "@/src/constants/layout";
import { useFavorites } from "@/src/context/FavoritesContext";
import { useAnimation } from "@/src/hooks/useAnimation";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Animated, FlatList, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const FavoritesScreen: React.FC = () => {
  const fadeAnim = useAnimation();
  const router = useRouter();
  const { favorites } = useFavorites();
  const [sortBy, setSortBy] = useState<"newest" | "oldest" | "alphabetical">(
    "newest"
  );

  const sortedFavorites = [...favorites].sort((a, b) => {
    switch (sortBy) {
      case "newest":
        return new Date(b.addedAt).getTime() - new Date(a.addedAt).getTime();
      case "oldest":
        return new Date(a.addedAt).getTime() - new Date(b.addedAt).getTime();
      case "alphabetical":
        return a.word.localeCompare(b.word);
      default:
        return 0;
    }
  });

  const renderEmptyState = () => (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: Layout.padding,
        paddingTop: 100,
      }}
    >
      <View
        style={{
          backgroundColor: Colors.card,
          borderRadius: 20,
          width: 80,
          height: 80,
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 24,
        }}
      >
        <Text style={{ fontSize: 32 }}>💖</Text>
      </View>
      <Text
        style={{
          fontSize: Fonts.titleMedium,
          fontWeight: Fonts.weightBold,
          color: Colors.text,
          marginBottom: 8,
          textAlign: "center",
        }}
      >
        Нет избранных слов
      </Text>
      <Text
        style={{
          fontSize: Fonts.bodyMedium,
          color: Colors.textSecondary,
          textAlign: "center",
          lineHeight: 22,
          marginBottom: 24,
        }}
      >
        Добавьте слова в избранное, чтобы{"\n"}быстро к ним возвращаться
      </Text>
      <TouchableOpacity
        onPress={() => router.push("/(tabs)/words")}
        style={{
          backgroundColor: Colors.primary,
          borderRadius: 12,
          paddingHorizontal: 24,
          paddingVertical: 12,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Ionicons
          name="book"
          size={20}
          color={Colors.background}
          style={{ marginRight: 8 }}
        />
        <Text
          style={{
            fontSize: Fonts.bodyMedium,
            fontWeight: Fonts.weightSemiBold,
            color: Colors.background,
          }}
        >
          Перейти к словарю
        </Text>
      </TouchableOpacity>
    </View>
  );

  const renderSortButton = () => (
    <TouchableOpacity
      onPress={() => {
        const nextSort =
          sortBy === "newest"
            ? "oldest"
            : sortBy === "oldest"
            ? "alphabetical"
            : "newest";
        setSortBy(nextSort);
      }}
      style={{
        backgroundColor: Colors.card,
        borderRadius: 12,
        paddingHorizontal: 16,
        paddingVertical: 8,
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: Colors.border,
      }}
    >
      <Ionicons
        name="filter"
        size={16}
        color={Colors.primary}
        style={{ marginRight: 8 }}
      />
      <Text
        style={{
          fontSize: Fonts.bodySmall,
          color: Colors.primary,
          fontWeight: Fonts.weightSemiBold,
        }}
      >
        {sortBy === "newest" ? "Новые" : sortBy === "oldest" ? "Старые" : "А-Я"}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.background }}>
      <Animated.View style={{ flex: 1, opacity: fadeAnim }}>
        {/* Header */}
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
              Избранные слова
            </Text>
            <Text
              style={{
                fontSize: Fonts.bodyMedium,
                color: Colors.textSecondary,
              }}
            >
              {favorites.length} слов
            </Text>
          </View>

          {favorites.length > 0 && renderSortButton()}
        </View>

        {/* Content */}
        <FlatList
          data={sortedFavorites}
          keyExtractor={(item) => item.word}
          renderItem={({ item }) => (
            <View style={{ marginBottom: 16 }}>
              <WordCard word={item} category={item.category} showCategory />
            </View>
          )}
          contentContainerStyle={{
            paddingHorizontal: Layout.padding,
            paddingVertical: Layout.padding,
            flexGrow: 1,
          }}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={renderEmptyState}
        />
      </Animated.View>
    </SafeAreaView>
  );
};
