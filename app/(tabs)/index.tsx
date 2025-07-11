import { news } from "@/data/news";
import { topWords, wordOfTheDay } from "@/data/words";
import { useEffect, useRef } from "react";
import {
  Animated,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 600,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <Animated.View style={{ flex: 1, opacity: fadeAnim }}>
        <ScrollView
          contentContainerStyle={{ paddingBottom: 24 }}
          showsVerticalScrollIndicator={false}
        >
          {/* Заголовок */}
          <View
            style={{ paddingHorizontal: 24, paddingTop: 20, paddingBottom: 16 }}
          >
            <Text
              style={{
                fontSize: 28,
                fontWeight: "bold",
                color: "#1e293b",
                marginBottom: 8,
              }}
            >
              Главная 🏠
            </Text>
            <Text style={{ fontSize: 16, color: "#64748b", lineHeight: 22 }}>
              Добро пожаловать в мир современного сленга
            </Text>
          </View>

          {/* Слово дня */}
          <View style={{ paddingHorizontal: 24, marginBottom: 24 }}>
            <View
              style={{
                backgroundColor: "#ffffff",
                borderRadius: 20,
                padding: 24,
                borderWidth: 1,
                borderColor: "#f1f5f9",
                shadowColor: "#000",
                shadowOpacity: 0.05,
                shadowRadius: 10,
                elevation: 3,
              }}
            >
              <View style={{ alignItems: "center", marginBottom: 16 }}>
                <View
                  style={{
                    backgroundColor: "#fef3c7",
                    borderRadius: 20,
                    width: 60,
                    height: 60,
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: 12,
                  }}
                >
                  <Text style={{ fontSize: 28 }}>🌟</Text>
                </View>
                <Text
                  style={{ fontSize: 16, color: "#f59e0b", fontWeight: "600" }}
                >
                  Слово дня
                </Text>
              </View>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: "bold",
                  color: "#1e293b",
                  textAlign: "center",
                  marginBottom: 8,
                }}
              >
                {wordOfTheDay.word}
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  color: "#64748b",
                  textAlign: "center",
                  marginBottom: 4,
                }}
              >
                {wordOfTheDay.meaning}
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  color: "#3b82f6",
                  textAlign: "center",
                  fontStyle: "italic",
                }}
              >
                {wordOfTheDay.translation}
              </Text>
            </View>
          </View>

          {/* Топ слова */}
          <View style={{ paddingHorizontal: 24, marginBottom: 24 }}>
            <View
              style={{
                backgroundColor: "#ffffff",
                borderRadius: 20,
                padding: 20,
                borderWidth: 1,
                borderColor: "#f1f5f9",
                shadowColor: "#000",
                shadowOpacity: 0.05,
                shadowRadius: 10,
                elevation: 3,
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
                  style={{ fontSize: 18, fontWeight: "600", color: "#1e293b" }}
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
                    borderBottomColor: "#f1f5f9",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "600",
                      color: "#ef4444",
                    }}
                  >
                    {item.word}
                  </Text>
                  <Text
                    style={{
                      fontSize: 15,
                      color: "#64748b",
                      flex: 1,
                      textAlign: "right",
                      marginLeft: 12,
                    }}
                  >
                    {item.meaning}
                  </Text>
                </View>
              ))}
            </View>
          </View>

          {/* Диалекты */}
          <View style={{ paddingHorizontal: 24, marginBottom: 24 }}>
            <View
              style={{
                backgroundColor: "#ffffff",
                borderRadius: 20,
                padding: 20,
                borderWidth: 1,
                borderColor: "#f1f5f9",
                shadowColor: "#000",
                shadowOpacity: 0.05,
                shadowRadius: 10,
                elevation: 3,
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
                  style={{ fontSize: 18, fontWeight: "600", color: "#1e293b" }}
                >
                  Выбери диалект
                </Text>
              </View>
              <View style={{ flexDirection: "row", gap: 12, flexWrap: "wrap" }}>
                <TouchableOpacity
                  style={{
                    backgroundColor: "#3b82f6",
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
                      color: "#ffffff",
                      fontWeight: "600",
                      fontSize: 15,
                    }}
                  >
                    Gwara Warszawska
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    backgroundColor: "#f8fafc",
                    borderRadius: 16,
                    paddingVertical: 12,
                    paddingHorizontal: 20,
                    flex: 1,
                    minWidth: 120,
                    alignItems: "center",
                    borderWidth: 1,
                    borderColor: "#e2e8f0",
                  }}
                >
                  <Text
                    style={{
                      color: "#64748b",
                      fontWeight: "600",
                      fontSize: 15,
                    }}
                  >
                    Gwara Poznaska
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* Новости */}
          <View style={{ paddingHorizontal: 24, marginBottom: 24 }}>
            <View
              style={{
                backgroundColor: "#ffffff",
                borderRadius: 20,
                padding: 20,
                borderWidth: 1,
                borderColor: "#f1f5f9",
                shadowColor: "#000",
                shadowOpacity: 0.05,
                shadowRadius: 10,
                elevation: 3,
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
                  style={{ fontSize: 18, fontWeight: "600", color: "#1e293b" }}
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
                    borderBottomColor: "#f1f5f9",
                  }}
                >
                  <Text
                    style={{ fontSize: 16, color: "#1e293b", marginBottom: 4 }}
                  >
                    {item.title}
                  </Text>
                  <Text style={{ fontSize: 14, color: "#64748b" }}>
                    {item.date}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        </ScrollView>
      </Animated.View>
    </SafeAreaView>
  );
}
