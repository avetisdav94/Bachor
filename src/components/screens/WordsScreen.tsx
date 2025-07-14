// src/components/screens/WordsScreen.tsx
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../../constants/colors";
import { DataService } from "../../services/DataService";
import { WordCategory } from "../../types";
import { CategoryCard } from "../words/CategoryCard";

export const WordsScreen: React.FC = () => {
  const [categories, setCategories] = useState<WordCategory[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = async () => {
    try {
      setLoading(true);
      const categoriesData = await DataService.getAllCategories();

      // Проверяем, что данные корректны
      if (Array.isArray(categoriesData)) {
        // Фильтруем только валидные категории
        const validCategories = categoriesData.filter(
          (category) => category && category.id && category.title
        );
        setCategories(validCategories);
      } else {
        console.error("Categories data is not an array:", categoriesData);
        setCategories([]);
      }
    } catch (error) {
      console.error("Error loading categories:", error);
      Alert.alert("Ошибка", "Не удалось загрузить категории", [{ text: "OK" }]);
      setCategories([]);
    } finally {
      setLoading(false);
    }
  };

  const renderCategoryItem = ({
    item,
    index,
  }: {
    item: WordCategory;
    index: number;
  }) => {
    // Дополнительная проверка элемента
    if (!item) {
      console.warn(`Category at index ${index} is undefined`);
      return null;
    }

    return <CategoryCard key={item.id || index} category={item} />;
  };

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={Colors.primary} />
          <Text style={styles.loadingText}>Загрузка категорий...</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Категории слов</Text>
        <Text style={styles.subtitle}>Выберите категорию для изучения</Text>
      </View>

      <FlatList
        data={categories}
        renderItem={renderCategoryItem}
        keyExtractor={(item, index) => item?.id || index.toString()}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>Категории не найдены</Text>
          </View>
        }
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: Colors.text,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: Colors.textSecondary,
  },
  listContainer: {
    paddingHorizontal: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    marginTop: 16,
    fontSize: 16,
    color: Colors.textSecondary,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 60,
  },
  emptyText: {
    fontSize: 16,
    color: Colors.textSecondary,
    textAlign: "center",
  },
});
