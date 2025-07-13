// src/components/profile/FavoritesCard.tsx
import { Card } from "@/src/components/common/Card";
import { WordCard } from "@/src/components/words/WordCard";
import { useFavorites } from "@/src/context/FavoritesContext";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { Colors } from "../../constants/colors";
import { Fonts } from "../../constants/fonts";

export const FavoritesCard: React.FC = () => {
  const { favorites } = useFavorites();
  const router = useRouter();

  const handleViewAll = () => {
    router.push("/favorites" as any);
  };

  // Добавляем отладку для избранных
  console.log("FavoritesCard favorites:", favorites);

  if (favorites.length === 0) {
    return (
      <Card>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 16,
          }}
        >
          <View
            style={{
              backgroundColor: "#fce7f3",
              borderRadius: 12,
              width: 40,
              height: 40,
              justifyContent: "center",
              alignItems: "center",
              marginRight: 12,
            }}
          >
            <Text style={{ fontSize: 20 }}>💖</Text>
          </View>
          <Text
            style={{
              fontSize: Fonts.titleSmall,
              fontWeight: Fonts.weightSemiBold,
              color: Colors.text,
            }}
          >
            Избранные слова
          </Text>
        </View>

        <View style={{ alignItems: "center", paddingVertical: 20 }}>
          <Text style={{ fontSize: 32, marginBottom: 12 }}>📝</Text>
          <Text
            style={{
              fontSize: Fonts.bodyMedium,
              color: Colors.textSecondary,
              textAlign: "center",
              marginBottom: 16,
            }}
          >
            Пока нет избранных слов
          </Text>
          <Text
            style={{
              fontSize: Fonts.bodySmall,
              color: Colors.textSecondary,
              textAlign: "center",
              lineHeight: 20,
            }}
          >
            Нажмите на ❤️ рядом со словом{"\n"}чтобы добавить его в избранное
          </Text>
        </View>
      </Card>
    );
  }

  return (
    <Card>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 16,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View
            style={{
              backgroundColor: "#fce7f3",
              borderRadius: 12,
              width: 40,
              height: 40,
              justifyContent: "center",
              alignItems: "center",
              marginRight: 12,
            }}
          >
            <Text style={{ fontSize: 20 }}>💖</Text>
          </View>
          <Text
            style={{
              fontSize: Fonts.titleSmall,
              fontWeight: Fonts.weightSemiBold,
              color: Colors.text,
            }}
          >
            Избранные слова
          </Text>
        </View>

        <TouchableOpacity
          onPress={handleViewAll}
          style={{
            backgroundColor: Colors.primary + "20",
            borderRadius: 12,
            paddingHorizontal: 12,
            paddingVertical: 6,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: Fonts.bodySmall,
              color: Colors.primary,
              fontWeight: Fonts.weightSemiBold,
              marginRight: 4,
            }}
          >
            Все ({favorites.length})
          </Text>
          <Ionicons name="chevron-forward" size={16} color={Colors.primary} />
        </TouchableOpacity>
      </View>

      {/* Исправляем передачу данных */}
      <FlatList
        data={favorites.slice(0, 3)}
        keyExtractor={(item) => item.word}
        renderItem={({ item }) => {
          // Добавляем отладку для каждого элемента
          console.log("FavoritesCard item:", item);

          return (
            <View style={{ marginBottom: 12 }}>
              <WordCard
                word={item}
                category={item.category || "Без категории"} // Добавляем fallback
                showCategory={true} // Явно ставим true
              />
            </View>
          );
        }}
        scrollEnabled={false}
        showsVerticalScrollIndicator={false}
      />
    </Card>
  );
};
