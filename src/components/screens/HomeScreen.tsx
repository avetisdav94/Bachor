import React from "react";
import {
  Animated,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Card } from "../../components/common/Card";
import { Header } from "../../components/common/Header";
import { WordOfTheDayCard } from "../../components/words/WordOfTheDay";
import { Colors } from "../../constants/colors";
import { Fonts } from "../../constants/fonts";
import { Layout } from "../../constants/layout";
import { useAnimation } from "../../hooks/useAnimation";

// Импортируйте данные
import { news } from "@/data/news";
import { topWords, wordOfTheDay } from "@/data/words";

export const HomeScreen: React.FC = () => {
  const fadeAnim = useAnimation();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.background }}>
      <Animated.View style={{ flex: 1, opacity: fadeAnim }}>
        <ScrollView
          contentContainerStyle={{ paddingBottom: Layout.padding }}
          showsVerticalScrollIndicator={false}
        >
          <Header
            title="Главная 🏠"
            subtitle="Добро пожаловать в мир современного сленга"
          />

          {/* Слово дня */}
          <View
            style={{
              paddingHorizontal: Layout.padding,
              marginBottom: Layout.padding,
            }}
          >
            <WordOfTheDayCard word={wordOfTheDay} />
          </View>

          {/* Топ слова */}
          <View
            style={{
              paddingHorizontal: Layout.padding,
              marginBottom: Layout.padding,
            }}
          >
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
                    backgroundColor: "#fee2e2",
                    borderRadius: 12,
                    width: 40,
                    height: 40,
                    justifyContent: "center",
                    alignItems: "center",
                    marginRight: 12,
                  }}
                >
                  <Text style={{ fontSize: 20 }}>🔥</Text>
                </View>
                <Text
                  style={{
                    fontSize: Fonts.titleSmall,
                    fontWeight: Fonts.weightSemiBold,
                    color: Colors.text,
                  }}
                >
                  Топ 5 слов
                </Text>
              </View>
              {topWords.map((item, idx) => (
                <View
                  key={idx}
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingVertical: 12,
                    borderBottomWidth: idx < topWords.length - 1 ? 1 : 0,
                    borderBottomColor: Colors.border,
                  }}
                >
                  <Text
                    style={{
                      fontSize: Fonts.bodyLarge,
                      fontWeight: Fonts.weightSemiBold,
                      color: Colors.error,
                    }}
                  >
                    {item.word}
                  </Text>
                  <Text
                    style={{
                      fontSize: Fonts.bodyMedium,
                      color: Colors.textSecondary,
                      flex: 1,
                      textAlign: "right",
                      marginLeft: 12,
                    }}
                  >
                    {item.meaning}
                  </Text>
                </View>
              ))}
            </Card>
          </View>

          {/* Диалекты */}
          <View
            style={{
              paddingHorizontal: Layout.padding,
              marginBottom: Layout.padding,
            }}
          >
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
                    backgroundColor: "#dbeafe",
                    borderRadius: 12,
                    width: 40,
                    height: 40,
                    justifyContent: "center",
                    alignItems: "center",
                    marginRight: 12,
                  }}
                >
                  <Text style={{ fontSize: 20 }}>🗺️</Text>
                </View>
                <Text
                  style={{
                    fontSize: Fonts.titleSmall,
                    fontWeight: Fonts.weightSemiBold,
                    color: Colors.text,
                  }}
                >
                  Выбери диалект
                </Text>
              </View>
              <View style={{ flexDirection: "row", gap: 12, flexWrap: "wrap" }}>
                <TouchableOpacity
                  style={{
                    backgroundColor: Colors.primary,
                    borderRadius: 16,
                    paddingVertical: 12,
                    paddingHorizontal: 20,
                    flex: 1,
                    minWidth: 120,
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      color: Colors.background,
                      fontWeight: Fonts.weightSemiBold,
                      fontSize: Fonts.bodyMedium,
                    }}
                  >
                    Gwara Warszawska
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    backgroundColor: Colors.card,
                    borderRadius: 16,
                    paddingVertical: 12,
                    paddingHorizontal: 20,
                    flex: 1,
                    minWidth: 120,
                    alignItems: "center",
                    borderWidth: 1,
                    borderColor: Colors.border,
                  }}
                >
                  <Text
                    style={{
                      color: Colors.textSecondary,
                      fontWeight: Fonts.weightSemiBold,
                      fontSize: Fonts.bodyMedium,
                    }}
                  >
                    Gwara Poznaska
                  </Text>
                </TouchableOpacity>
              </View>
            </Card>
          </View>

          {/* Новости */}
          <View
            style={{
              paddingHorizontal: Layout.padding,
              marginBottom: Layout.padding,
            }}
          >
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
                    backgroundColor: "#d1fae5",
                    borderRadius: 12,
                    width: 40,
                    height: 40,
                    justifyContent: "center",
                    alignItems: "center",
                    marginRight: 12,
                  }}
                >
                  <Text style={{ fontSize: 20 }}>📰</Text>
                </View>
                <Text
                  style={{
                    fontSize: Fonts.titleSmall,
                    fontWeight: Fonts.weightSemiBold,
                    color: Colors.text,
                  }}
                >
                  Новости
                </Text>
              </View>
              {news.map((item, idx) => (
                <View
                  key={idx}
                  style={{
                    paddingVertical: 12,
                    borderBottomWidth: idx < news.length - 1 ? 1 : 0,
                    borderBottomColor: Colors.border,
                  }}
                >
                  <Text
                    style={{
                      fontSize: Fonts.bodyLarge,
                      color: Colors.text,
                      marginBottom: 4,
                    }}
                  >
                    {item.title}
                  </Text>
                  <Text
                    style={{
                      fontSize: Fonts.bodySmall,
                      color: Colors.textSecondary,
                    }}
                  >
                    {item.date}
                  </Text>
                </View>
              ))}
            </Card>
          </View>
        </ScrollView>
      </Animated.View>
    </SafeAreaView>
  );
};
