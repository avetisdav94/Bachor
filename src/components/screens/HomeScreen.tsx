// src/components/screens/HomeScreen.tsx
import { categories } from "@/data/categories";
import { Card } from "@/src/components/common/Card";
import { Header } from "@/src/components/common/Header";
import { WordCard } from "@/src/components/words/WordCard";
import { Colors } from "@/src/constants/colors";
import { Fonts } from "@/src/constants/fonts";
import { Layout } from "@/src/constants/layout";
import { DataService } from "@/src/services/DataService";
import { Word } from "@/src/types";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import {
  Alert,
  Animated,
  RefreshControl,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const HomeScreen: React.FC = () => {
  // Используем стандартный Animated.Value вместо кастомного хука
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const router = useRouter();

  // Состояние для данных
  const [wordOfTheDay, setWordOfTheDay] = useState<Word | null>(null);
  const [topWords, setTopWords] = useState<Word[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    loadData();
    checkConnectionStatus();

    // Запускаем анимацию появления
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, []);

  // Проверка состояния подключения
  const checkConnectionStatus = async () => {
    try {
      const online = await DataService.isOnline();
      setIsOnline(online);
    } catch (error) {
      console.error("Error checking connection:", error);
      setIsOnline(false);
    }
  };

  // Загрузка данных
  const loadData = async () => {
    try {
      setLoading(true);

      // Загружаем данные параллельно
      const [wordOfDay, allWords] = await Promise.all([
        DataService.getWordOfTheDay(),
        DataService.getAllWords(),
      ]);

      setWordOfTheDay(wordOfDay);

      // Берем случайные 5 слов как "топ слова"
      if (allWords.length > 0) {
        const shuffled = allWords.sort(() => 0.5 - Math.random());
        setTopWords(shuffled.slice(0, 5));
      }

      await checkConnectionStatus();
    } catch (error) {
      console.error("Error loading data:", error);
      Alert.alert(
        "Ошибка загрузки",
        "Не удалось загрузить данные. Проверьте подключение к интернету.",
        [{ text: "OK" }]
      );
    } finally {
      setLoading(false);
    }
  };

  // Обновление данных
  const onRefresh = async () => {
    setRefreshing(true);
    await loadData();
    setRefreshing(false);
  };

  // Навигация к поиску
  const handleSearchPress = () => {
    router.push("/search" as any);
  };

  // Навигация к категории
  const handleCategoryPress = (categoryId: string) => {
    router.push(`/words/${categoryId}` as any);
  };

  // Навигация к слову дня
  const handleWordOfDayPress = () => {
    if (wordOfTheDay) {
      router.push({
        pathname: "/word-detail" as any,
        params: {
          word: wordOfTheDay.word,
          category: "Слово дня",
        },
      });
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.background }}>
      <Animated.View style={{ flex: 1, opacity: fadeAnim }}>
        <ScrollView
          contentContainerStyle={{ paddingBottom: Layout.padding }}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              colors={[Colors.primary]}
              tintColor={Colors.primary}
            />
          }
        >
          <Header title="Bachor 🇵🇱" subtitle="Справочник польского сленга" />

          {/* Индикатор подключения */}
          {!isOnline && (
            <View
              style={{
                paddingHorizontal: Layout.padding,
                marginBottom: Layout.padding,
              }}
            >
              <View
                style={{
                  backgroundColor: Colors.warning + "20",
                  borderRadius: 12,
                  padding: 12,
                  flexDirection: "row",
                  alignItems: "center",
                  borderWidth: 1,
                  borderColor: Colors.warning + "30",
                }}
              >
                <Ionicons
                  name="wifi-outline"
                  size={20}
                  color={Colors.warning}
                />
                <Text
                  style={{
                    fontSize: Fonts.bodySmall,
                    color: Colors.warning,
                    marginLeft: 8,
                    fontWeight: Fonts.weightSemiBold,
                  }}
                >
                  Офлайн режим - показаны сохраненные данные
                </Text>
              </View>
            </View>
          )}

          {/* Поиск */}
          <View
            style={{
              paddingHorizontal: Layout.padding,
              marginBottom: Layout.padding,
            }}
          >
            <TouchableOpacity
              onPress={handleSearchPress}
              style={{
                backgroundColor: Colors.card,
                borderRadius: 16,
                paddingHorizontal: 16,
                paddingVertical: 12,
                flexDirection: "row",
                alignItems: "center",
                borderWidth: 1,
                borderColor: Colors.border,
              }}
            >
              <Ionicons name="search" size={20} color={Colors.textSecondary} />
              <Text
                style={{
                  fontSize: Fonts.bodyMedium,
                  color: Colors.textSecondary,
                  marginLeft: 12,
                  flex: 1,
                }}
              >
                Поиск слов...
              </Text>
            </TouchableOpacity>
          </View>

          {/* Слово дня */}
          <View
            style={{
              paddingHorizontal: Layout.padding,
              marginBottom: Layout.padding,
            }}
          >
            {loading ? (
              <Card>
                <View style={{ alignItems: "center", paddingVertical: 40 }}>
                  <Text
                    style={{
                      fontSize: Fonts.bodyMedium,
                      color: Colors.textSecondary,
                    }}
                  >
                    Загрузка слова дня...
                  </Text>
                </View>
              </Card>
            ) : wordOfTheDay ? (
              <TouchableOpacity onPress={handleWordOfDayPress}>
                <Card>
                  <View style={{ alignItems: "center", marginBottom: 16 }}>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginBottom: 12,
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
                        <Text style={{ fontSize: 16 }}>🌅</Text>
                      </View>
                      <Text
                        style={{
                          fontSize: Fonts.titleSmall,
                          fontWeight: Fonts.weightSemiBold,
                          color: Colors.text,
                        }}
                      >
                        Слово дня
                      </Text>
                    </View>

                    <Text
                      style={{
                        fontSize: Fonts.titleLarge,
                        fontWeight: Fonts.weightBold,
                        color: Colors.primary,
                        marginBottom: 8,
                      }}
                    >
                      {wordOfTheDay.word}
                    </Text>

                    <Text
                      style={{
                        fontSize: Fonts.bodyMedium,
                        color: Colors.text,
                        textAlign: "center",
                        marginBottom: 8,
                      }}
                    >
                      {wordOfTheDay.meaning}
                    </Text>

                    {wordOfTheDay.translation && (
                      <Text
                        style={{
                          fontSize: Fonts.bodyMedium,
                          color: Colors.textSecondary,
                          fontStyle: "italic",
                          textAlign: "center",
                        }}
                      >
                        {wordOfTheDay.translation}
                      </Text>
                    )}

                    {wordOfTheDay.examples && (
                      <View
                        style={{
                          backgroundColor: Colors.background,
                          borderRadius: 8,
                          padding: 12,
                          marginTop: 12,
                          borderLeftWidth: 3,
                          borderLeftColor: Colors.primary,
                        }}
                      >
                        <Text
                          style={{
                            fontSize: Fonts.bodySmall,
                            color: Colors.textSecondary,
                            fontStyle: "italic",
                            textAlign: "center",
                          }}
                        >
                          "{wordOfTheDay.examples}"
                        </Text>
                      </View>
                    )}

                    <TouchableOpacity
                      style={{
                        backgroundColor: Colors.primary,
                        borderRadius: 12,
                        paddingHorizontal: 24,
                        paddingVertical: 8,
                        marginTop: 16,
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: Fonts.bodyMedium,
                          fontWeight: Fonts.weightSemiBold,
                          color: Colors.background,
                          marginRight: 8,
                        }}
                      >
                        Подробнее
                      </Text>
                      <Ionicons
                        name="arrow-forward"
                        size={16}
                        color={Colors.background}
                      />
                    </TouchableOpacity>
                  </View>
                </Card>
              </TouchableOpacity>
            ) : (
              <Card>
                <View style={{ alignItems: "center", paddingVertical: 40 }}>
                  <Text style={{ fontSize: 32, marginBottom: 12 }}>😔</Text>
                  <Text
                    style={{
                      fontSize: Fonts.bodyMedium,
                      color: Colors.textSecondary,
                      textAlign: "center",
                    }}
                  >
                    Слово дня недоступно
                  </Text>
                  <Text
                    style={{
                      fontSize: Fonts.bodySmall,
                      color: Colors.textSecondary,
                      textAlign: "center",
                      marginTop: 4,
                    }}
                  >
                    Проверьте подключение к интернету
                  </Text>
                </View>
              </Card>
            )}
          </View>

          {/* Категории */}
          <View
            style={{
              paddingHorizontal: Layout.padding,
              marginBottom: Layout.padding,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 16,
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
                <Text style={{ fontSize: 16 }}>📚</Text>
              </View>
              <Text
                style={{
                  fontSize: Fonts.titleSmall,
                  fontWeight: Fonts.weightSemiBold,
                  color: Colors.text,
                }}
              >
                Категории слов
              </Text>
            </View>

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingRight: Layout.padding }}
            >
              {categories.map((category, index) => (
                <TouchableOpacity
                  key={category.id}
                  onPress={() => handleCategoryPress(category.id)}
                  style={{
                    backgroundColor: category.color + "20",
                    borderRadius: 16,
                    padding: 16,
                    marginRight: 12,
                    minWidth: 140,
                    alignItems: "center",
                    borderWidth: 1,
                    borderColor: category.color + "30",
                  }}
                >
                  <Text style={{ fontSize: 32, marginBottom: 8 }}>
                    {category.icon}
                  </Text>
                  <Text
                    style={{
                      fontSize: Fonts.bodyMedium,
                      fontWeight: Fonts.weightSemiBold,
                      color: Colors.text,
                      textAlign: "center",
                      marginBottom: 4,
                    }}
                  >
                    {category.title}
                  </Text>
                  <Text
                    style={{
                      fontSize: Fonts.bodySmall,
                      color: Colors.textSecondary,
                      textAlign: "center",
                    }}
                  >
                    {category.wordsCount} слов
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

          {/* Популярные слова */}
          <View style={{ paddingHorizontal: Layout.padding }}>
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
                  width: 32,
                  height: 32,
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: 12,
                }}
              >
                <Text style={{ fontSize: 16 }}>🔥</Text>
              </View>
              <Text
                style={{
                  fontSize: Fonts.titleSmall,
                  fontWeight: Fonts.weightSemiBold,
                  color: Colors.text,
                  flex: 1,
                }}
              >
                Популярные слова
              </Text>
              {topWords.length > 0 && (
                <TouchableOpacity onPress={handleSearchPress}>
                  <Text
                    style={{
                      fontSize: Fonts.bodySmall,
                      color: Colors.primary,
                      fontWeight: Fonts.weightSemiBold,
                    }}
                  >
                    Все слова
                  </Text>
                </TouchableOpacity>
              )}
            </View>

            {loading ? (
              <Card>
                <View style={{ alignItems: "center", paddingVertical: 40 }}>
                  <Text
                    style={{
                      fontSize: Fonts.bodyMedium,
                      color: Colors.textSecondary,
                    }}
                  >
                    Загрузка слов...
                  </Text>
                </View>
              </Card>
            ) : topWords.length > 0 ? (
              topWords.map((word, index) => (
                <View key={word.word} style={{ marginBottom: 12 }}>
                  <WordCard
                    word={word}
                    category="Популярные"
                    showCategory={false}
                  />
                </View>
              ))
            ) : (
              <Card>
                <View style={{ alignItems: "center", paddingVertical: 40 }}>
                  <Text style={{ fontSize: 32, marginBottom: 12 }}>📝</Text>
                  <Text
                    style={{
                      fontSize: Fonts.bodyMedium,
                      color: Colors.textSecondary,
                      textAlign: "center",
                    }}
                  >
                    Слова недоступны
                  </Text>
                  <Text
                    style={{
                      fontSize: Fonts.bodySmall,
                      color: Colors.textSecondary,
                      textAlign: "center",
                      marginTop: 4,
                    }}
                  >
                    Проверьте подключение к интернету
                  </Text>
                </View>
              </Card>
            )}
          </View>
        </ScrollView>
      </Animated.View>
    </SafeAreaView>
  );
};
