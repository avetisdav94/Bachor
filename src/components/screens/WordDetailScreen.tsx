import { getAllWords } from "@/data/words";
import { Card } from "@/src/components/common/Card";
import { Colors } from "@/src/constants/colors";
import { Fonts } from "@/src/constants/fonts";
import { Layout } from "@/src/constants/layout";
import { useFavorites } from "@/src/context/FavoritesContext";
import { useProfile } from "@/src/context/ProfileContext";
import { useAnimation } from "@/src/hooks/useAnimation";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import {
  Animated,
  ScrollView,
  Share,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const WordDetailScreen: React.FC = () => {
  const { incrementWordsViewed } = useProfile();
  const fadeAnim = useAnimation();
  const router = useRouter();
  const { word: wordParam, category } = useLocalSearchParams<{
    word: string;
    category?: string;
  }>();

  React.useEffect(() => {
    incrementWordsViewed();
  }, []);

  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();

  // Находим слово в данных
  const allWords = getAllWords();
  const word = allWords.find((w) => w.word === wordParam);

  if (!word) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: Colors.background }}>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={{ fontSize: Fonts.titleMedium, color: Colors.text }}>
            Слово не найдено
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  const isWordFavorite = isFavorite(word.word);

  const handleFavoriteToggle = () => {
    if (isWordFavorite) {
      removeFromFavorites(word.word);
    } else {
      addToFavorites(word, category || "Без категории");
    }
  };

  const handleShare = async () => {
    try {
      await Share.share({
        message: `${word.word} - ${word.meaning}\n\nПример: ${
          word.examples || "Нет примера"
        }\n\nИз приложения Bachor`,
        title: `Польское слово: ${word.word}`,
      });
    } catch (error) {
      console.error("Ошибка при шаринге:", error);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.background }}>
      <Animated.View style={{ flex: 1, opacity: fadeAnim }}>
        {/* Header */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
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
            }}
          >
            <Ionicons name="arrow-back" size={20} color={Colors.text} />
          </TouchableOpacity>

          <View style={{ flex: 1, marginHorizontal: 16 }}>
            <Text
              style={{
                fontSize: Fonts.titleMedium,
                fontWeight: Fonts.weightBold,
                color: Colors.text,
                textAlign: "center",
              }}
            >
              {word.word}
            </Text>
            {category && (
              <Text
                style={{
                  fontSize: Fonts.bodySmall,
                  color: Colors.textSecondary,
                  textAlign: "center",
                  marginTop: 2,
                }}
              >
                {category}
              </Text>
            )}
          </View>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity
              onPress={handleShare}
              style={{
                backgroundColor: Colors.card,
                borderRadius: 12,
                width: 40,
                height: 40,
                justifyContent: "center",
                alignItems: "center",
                marginRight: 8,
              }}
            >
              <Ionicons name="share" size={20} color={Colors.text} />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={handleFavoriteToggle}
              style={{
                backgroundColor: isWordFavorite
                  ? Colors.error + "20"
                  : Colors.card,
                borderRadius: 12,
                width: 40,
                height: 40,
                justifyContent: "center",
                alignItems: "center",
                borderWidth: 1,
                borderColor: isWordFavorite
                  ? Colors.error + "30"
                  : Colors.border,
              }}
            >
              <Ionicons
                name={isWordFavorite ? "heart" : "heart-outline"}
                size={20}
                color={isWordFavorite ? Colors.error : Colors.textSecondary}
              />
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView
          contentContainerStyle={{
            paddingHorizontal: Layout.padding,
            paddingVertical: Layout.padding,
          }}
          showsVerticalScrollIndicator={false}
        >
          {/* Основная карточка слова */}
          <Card style={{ marginBottom: 16 }}>
            <View style={{ alignItems: "center", marginBottom: 20 }}>
              <Text
                style={{
                  fontSize: Fonts.titleLarge,
                  fontWeight: Fonts.weightBold,
                  color: Colors.primary,
                  marginBottom: 8,
                  textAlign: "center",
                }}
              >
                {word.word}
              </Text>

              {word.translation && (
                <Text
                  style={{
                    fontSize: Fonts.titleSmall,
                    color: Colors.textSecondary,
                    fontStyle: "italic",
                    textAlign: "center",
                    marginBottom: 16,
                  }}
                >
                  {word.translation}
                </Text>
              )}
            </View>

            <View
              style={{
                backgroundColor: Colors.card,
                borderRadius: 12,
                padding: 16,
                borderLeftWidth: 4,
                borderLeftColor: Colors.primary,
              }}
            >
              <Text
                style={{
                  fontSize: Fonts.bodyLarge,
                  color: Colors.text,
                  lineHeight: 24,
                  textAlign: "center",
                }}
              >
                {word.meaning}
              </Text>
            </View>
          </Card>

          {/* Быстрый пример */}
          {word.examples && (
            <Card style={{ marginBottom: 16 }}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginBottom: 12,
                }}
              >
                <View
                  style={{
                    backgroundColor: "#e0f2fe",
                    borderRadius: 12,
                    width: 32,
                    height: 32,
                    justifyContent: "center",
                    alignItems: "center",
                    marginRight: 12,
                  }}
                >
                  <Text style={{ fontSize: 16 }}>💬</Text>
                </View>
                <Text
                  style={{
                    fontSize: Fonts.titleSmall,
                    fontWeight: Fonts.weightSemiBold,
                    color: Colors.text,
                  }}
                >
                  Быстрый пример
                </Text>
              </View>

              <View
                style={{
                  backgroundColor: Colors.background,
                  borderRadius: 8,
                  padding: 12,
                  borderLeftWidth: 3,
                  borderLeftColor: Colors.primary,
                }}
              >
                <Text
                  style={{
                    fontSize: Fonts.bodyMedium,
                    color: Colors.text,
                    fontStyle: "italic",
                  }}
                >
                  "{word.examples}"
                </Text>
              </View>
            </Card>
          )}

          {/* Подробные примеры */}
          {word.detailedExamples && word.detailedExamples.length > 0 && (
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
                    backgroundColor: "#fef3c7",
                    borderRadius: 12,
                    width: 32,
                    height: 32,
                    justifyContent: "center",
                    alignItems: "center",
                    marginRight: 12,
                  }}
                >
                  <Text style={{ fontSize: 16 }}>📝</Text>
                </View>
                <Text
                  style={{
                    fontSize: Fonts.titleSmall,
                    fontWeight: Fonts.weightSemiBold,
                    color: Colors.text,
                  }}
                >
                  Примеры использования
                </Text>
              </View>

              {word.detailedExamples.map((example, index) => (
                <View
                  key={index}
                  style={{
                    backgroundColor: Colors.background,
                    borderRadius: 12,
                    padding: 16,
                    marginBottom:
                      index < word.detailedExamples!.length - 1 ? 12 : 0,
                    borderWidth: 1,
                    borderColor: Colors.border,
                  }}
                >
                  <Text
                    style={{
                      fontSize: Fonts.bodyMedium,
                      color: Colors.text,
                      fontWeight: Fonts.weightSemiBold,
                      marginBottom: 8,
                    }}
                  >
                    "{example.sentence}"
                  </Text>

                  <Text
                    style={{
                      fontSize: Fonts.bodyMedium,
                      color: Colors.textSecondary,
                      marginBottom: example.context ? 8 : 0,
                    }}
                  >
                    {example.translation}
                  </Text>

                  {example.context && (
                    <View
                      style={{
                        backgroundColor: Colors.primary + "10",
                        borderRadius: 6,
                        paddingHorizontal: 8,
                        paddingVertical: 4,
                        alignSelf: "flex-start",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: Fonts.caption,
                          color: Colors.primary,
                          fontWeight: Fonts.weightSemiBold,
                        }}
                      >
                        {example.context}
                      </Text>
                    </View>
                  )}
                </View>
              ))}
            </Card>
          )}
        </ScrollView>
      </Animated.View>
    </SafeAreaView>
  );
};
