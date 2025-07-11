// src/components/words/CategoryCard.tsx (обновленная версия)
import { Fonts } from "@/src/constants/fonts";
import { Layout } from "@/src/constants/layout";
import { useRouter } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";
import { Colors } from "../../constants/colors";
import { WordCategory } from "../../types";
import { getCategoryIcon } from "../../utils/categoryIcons";

interface CategoryCardProps {
  category: WordCategory;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  const router = useRouter();

  return (
    <Pressable
      onPress={() => router.push(`/(tabs)/words/${category.key}`)}
      style={({ pressed }) => ({
        backgroundColor: Colors.background,
        borderRadius: Layout.borderRadius,
        padding: Layout.cardPadding,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: Colors.border,
        shadowColor: "#000",
        shadowOpacity: pressed ? 0.05 : 0.03,
        shadowRadius: pressed ? 4 : 8,
        shadowOffset: { width: 0, height: 2 },
        elevation: pressed ? 1 : 2,
        transform: [{ scale: pressed ? 0.98 : 1 }],
      })}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            flex: 1,
          }}
        >
          <View
            style={{
              backgroundColor: category.color + "20",
              borderRadius: 16,
              width: Layout.iconSize,
              height: Layout.iconSize,
              justifyContent: "center",
              alignItems: "center",
              marginRight: 16,
            }}
          >
            <Text style={{ fontSize: 24 }}>
              {getCategoryIcon(category.key)}
            </Text>
          </View>

          <View style={{ flex: 1 }}>
            <Text
              style={{
                fontSize: Fonts.titleSmall,
                fontWeight: Fonts.weightSemiBold,
                color: Colors.text,
                marginBottom: 4,
              }}
            >
              {category.title}
            </Text>
            <Text
              style={{
                fontSize: Fonts.bodySmall,
                color: Colors.textSecondary,
              }}
            >
              {category.words.length} слов
            </Text>
          </View>
        </View>

        <View
          style={{
            backgroundColor: Colors.card,
            borderRadius: 12,
            width: Layout.smallIconSize,
            height: Layout.smallIconSize,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 16, color: Colors.textSecondary }}>→</Text>
        </View>
      </View>
    </Pressable>
  );
};
