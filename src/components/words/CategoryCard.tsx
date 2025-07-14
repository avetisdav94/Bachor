// src/components/words/CategoryCard.tsx
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Colors } from "../../constants/colors";
import { WordCategory } from "../../types";

interface CategoryCardProps {
  category: WordCategory;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  const router = useRouter();

  // Проверяем, что category определен
  if (!category) {
    console.warn("CategoryCard: category is undefined");
    return null;
  }

  const handlePress = () => {
    router.push(`/(tabs)/words/${category.id}`);
  };

  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: category.color }]}
      onPress={handlePress}
      activeOpacity={0.8}
    >
      <View style={styles.content}>
        <Text style={styles.icon}>{category.icon}</Text>
        <Text style={styles.title} numberOfLines={2}>
          {category.title}
        </Text>
        <Text style={styles.description} numberOfLines={3}>
          {category.description}
        </Text>
        <View style={styles.footer}>
          <Text style={styles.wordCount}>{category.wordsCount || 0} слов</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    elevation: 3,
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  content: {
    flex: 1,
  },
  icon: {
    fontSize: 32,
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: Colors.white,
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: Colors.white,
    opacity: 0.9,
    lineHeight: 20,
    marginBottom: 12,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  wordCount: {
    fontSize: 12,
    color: Colors.white,
    opacity: 0.8,
    fontWeight: "500",
  },
});
