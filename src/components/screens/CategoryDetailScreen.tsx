import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { categories } from "../../../data/categories";
import { Colors } from "../../constants/colors";
import { useAnimation } from "../../hooks/useAnimation";
import { DataService } from "../../services/DataService";
import { Word } from "../../types";

export const CategoryDetailScreen: React.FC = () => {
  const params = useLocalSearchParams();
  const categoryId = params.category as string;
  const router = useRouter();
  const fadeAnim = useAnimation();

  const [words, setWords] = useState<Word[]>([]);
  const [loading, setLoading] = useState(true);

  // Находим информацию о категории
  const categoryInfo = categories.find((cat) => cat.id === categoryId);

  useEffect(() => {
    if (categoryId) {
      loadCategoryWords();
    }
  }, [categoryId]);

  const loadCategoryWords = async () => {
    try {
      setLoading(true);
      const categoryWords = await DataService.getWordsByCategory(categoryId);

      // Убираем дубликаты по word field
      const uniqueWords = categoryWords.filter(
        (word, index, self) =>
          index === self.findIndex((w) => w.word === word.word)
      );

      setWords(uniqueWords);
    } catch (error) {
      console.error("Error loading category words:", error);
      Alert.alert("Ошибка", "Не удалось загрузить слова категории", [
        { text: "OK" },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleWordPress = (word: Word) => {
    router.push({
      pathname: "/word-detail",
      params: {
        wordId: word.id,
        word: word.word,
        meaning: word.meaning,
        translation: word.translation,
        examples: word.examples,
        category: word.category,
      },
    });
  };

  // Исправляем навигацию назад
  const handleBackPress = () => {
    // Вместо router.back() используем navigate к главному экрану
    router.replace("/(tabs)/words");
  };

  const renderWordItem = ({ item, index }: { item: Word; index: number }) => (
    <TouchableOpacity
      key={`${item.id}-${index}`}
      style={styles.wordItem}
      onPress={() => handleWordPress(item)}
      activeOpacity={0.7}
    >
      <View style={styles.wordHeader}>
        <Text style={styles.wordText}>{item.word}</Text>
        <Ionicons name="chevron-forward" size={20} color={Colors.gray} />
      </View>
      <Text style={styles.meaningText} numberOfLines={2}>
        {item.meaning}
      </Text>
      {item.translation && (
        <Text style={styles.translationText} numberOfLines={1}>
          {item.translation}
        </Text>
      )}
    </TouchableOpacity>
  );

  if (!categoryId) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>Категория не найдена</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={handleBackPress} // Используем новый обработчик
        >
          <Ionicons name="arrow-back" size={24} color={Colors.text} />
        </TouchableOpacity>
        <View style={styles.headerContent}>
          <Text style={styles.categoryIcon}>{categoryInfo?.icon || "📝"}</Text>
          <Text style={styles.categoryTitle}>
            {categoryInfo?.title || "Слова"}
          </Text>
        </View>
      </View>

      {/* Content */}
      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={Colors.primary} />
          <Text style={styles.loadingText}>Загрузка слов...</Text>
        </View>
      ) : (
        <FlatList
          data={words}
          renderItem={renderWordItem}
          keyExtractor={(item, index) => `${item.id}-${item.word}-${index}`}
          contentContainerStyle={styles.listContainer}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>
                В этой категории пока нет слов
              </Text>
            </View>
          }
        />
      )}
    </SafeAreaView>
  );
};

// Стили остаются без изменений
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  backButton: {
    padding: 8,
    marginRight: 12,
  },
  headerContent: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  categoryIcon: {
    fontSize: 24,
    marginRight: 12,
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: Colors.text,
  },
  listContainer: {
    paddingHorizontal: 20,
    paddingTop: 16,
  },
  wordItem: {
    backgroundColor: Colors.card, // Исправляем на существующий цвет
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    elevation: 2,
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  wordHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  wordText: {
    fontSize: 18,
    fontWeight: "600",
    color: Colors.text,
  },
  meaningText: {
    fontSize: 14,
    color: Colors.textSecondary,
    lineHeight: 20,
    marginBottom: 4,
  },
  translationText: {
    fontSize: 13,
    color: Colors.primary,
    fontStyle: "italic",
  },
  separator: {
    height: 8,
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
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    fontSize: 18,
    color: Colors.error,
    textAlign: "center",
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
