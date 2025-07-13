// src/components/screens/SearchScreen.tsx (обновленная версия)
import { wordCategories } from "@/data/wordCategories";
import { WordCard } from "@/src/components/words/WordCard";
import { Colors } from "@/src/constants/colors";
import { Fonts } from "@/src/constants/fonts";
import { Layout } from "@/src/constants/layout";
import { useAnimation } from "@/src/hooks/useAnimation";
import { Word } from "@/src/types";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  Animated,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const SearchScreen: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const router = useRouter();
  const fadeAnim = useAnimation();
  const searchInputRef = useRef<TextInput>(null);

  // Автофокус при загрузке экрана
  useEffect(() => {
    const timer = setTimeout(() => {
      searchInputRef.current?.focus();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Собираем все слова из всех категорий
  const allWords = useMemo(() => {
    const words: (Word & { category: string })[] = [];
    wordCategories.forEach((category) => {
      category.words.forEach((word) => {
        words.push({ ...word, category: category.title });
      });
    });
    return words;
  }, []);

  // Фильтруем слова по поисковому запросу
  const filteredWords = useMemo(() => {
    if (!searchQuery.trim()) {
      return [];
    }

    const query = searchQuery.toLowerCase().trim();
    return allWords.filter(
      (word) =>
        word.word.toLowerCase().includes(query) ||
        word.meaning.toLowerCase().includes(query) ||
        word.translation?.toLowerCase().includes(query)
    );
  }, [searchQuery, allWords]);

  const handleSearch = (text: string) => {
    setSearchQuery(text);
  };

  const handleClear = () => {
    setSearchQuery("");
    searchInputRef.current?.focus();
  };

  const renderEmptyState = () => {
    if (!searchQuery.trim()) {
      return (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            paddingHorizontal: Layout.padding,
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
            <Text style={{ fontSize: 32 }}>🔍</Text>
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
            Поиск по словарю
          </Text>
          <Text
            style={{
              fontSize: Fonts.bodyMedium,
              color: Colors.textSecondary,
              textAlign: "center",
              lineHeight: 22,
            }}
          >
            Введите слово или фразу для поиска{"\n"}по всему словарю сленга
          </Text>
        </View>
      );
    }

    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: Layout.padding,
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
          <Text style={{ fontSize: 32 }}>😔</Text>
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
          Ничего не найдено
        </Text>
        <Text
          style={{
            fontSize: Fonts.bodyMedium,
            color: Colors.textSecondary,
            textAlign: "center",
            lineHeight: 22,
          }}
        >
          Попробуйте изменить запрос или{"\n"}воспользуйтесь категориями
        </Text>
      </View>
    );
  };

  const renderSearchResult = ({
    item,
  }: {
    item: Word & { category: string };
  }) => (
    <View style={{ marginBottom: 16 }}>
      <WordCard word={item} />
      <View
        style={{
          backgroundColor: Colors.primary + "20",
          borderRadius: 8,
          paddingHorizontal: 12,
          paddingVertical: 4,
          alignSelf: "flex-start",
          marginTop: 8,
        }}
      >
        <Text
          style={{
            fontSize: Fonts.caption,
            color: Colors.primary,
            fontWeight: Fonts.weightSemiBold,
          }}
        >
          {item.category}
        </Text>
      </View>
    </View>
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
              Поиск слов
            </Text>
            <Text
              style={{
                fontSize: Fonts.bodyMedium,
                color: Colors.textSecondary,
              }}
            >
              {filteredWords.length} результатов
            </Text>
          </View>
        </View>

        {/* Search Bar */}
        <View style={{ paddingHorizontal: Layout.padding, paddingTop: 16 }}>
          <View
            style={{
              backgroundColor: Colors.card,
              borderRadius: 16,
              paddingHorizontal: 16,
              paddingVertical: 12,
              flexDirection: "row",
              alignItems: "center",
              borderWidth: 1,
              borderColor: isFocused ? Colors.primary : Colors.border,
              marginBottom: 16,
            }}
          >
            <Ionicons
              name="search"
              size={20}
              color={isFocused ? Colors.primary : Colors.textSecondary}
              style={{ marginRight: 12 }}
            />

            <TextInput
              ref={searchInputRef}
              style={{
                flex: 1,
                fontSize: Fonts.bodyMedium,
                color: Colors.text,
                padding: 0,
              }}
              placeholder="Поиск по словарю..."
              placeholderTextColor={Colors.textSecondary}
              value={searchQuery}
              onChangeText={handleSearch}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              autoCorrect={false}
              autoCapitalize="none"
              returnKeyType="search"
              blurOnSubmit={false}
            />

            {searchQuery.length > 0 && (
              <TouchableOpacity
                onPress={handleClear}
                style={{
                  backgroundColor: Colors.textSecondary + "20",
                  borderRadius: 12,
                  width: 24,
                  height: 24,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Ionicons name="close" size={14} color={Colors.textSecondary} />
              </TouchableOpacity>
            )}
          </View>
        </View>

        {/* Results */}
        <FlatList
          data={filteredWords}
          keyExtractor={(item, index) => `${item.word}-${index}`}
          renderItem={renderSearchResult}
          contentContainerStyle={{
            paddingHorizontal: Layout.padding,
            paddingBottom: Layout.padding,
            flexGrow: 1,
          }}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={renderEmptyState}
          keyboardShouldPersistTaps="handled"
        />
      </Animated.View>
    </SafeAreaView>
  );
};
