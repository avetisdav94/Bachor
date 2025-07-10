import { wordCategories } from "@/data/wordCategories";
import { useRouter } from "expo-router";
import { useEffect, useRef } from "react";
import { Animated, FlatList, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const categoryIcons: Record<string, string> = {
  money: "💰",
  friends: "👥",
  study_work: "📚",
  food_drink: "🍕",
  emotions: "😊",
  // добавьте другие категории по мере необходимости
};

export default function WordsScreen() {
  const router = useRouter();
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
        {/* Заголовок */}
        <View
          style={{
            paddingHorizontal: 24,
            paddingTop: 20,
            paddingBottom: 16,
            backgroundColor: "#ffffff",
          }}
        >
          <Text
            style={{
              fontSize: 28,
              fontWeight: "bold",
              color: "#1e293b",
              marginBottom: 8,
            }}
          >
            Сленг словарь 🔥
          </Text>
          <Text
            style={{
              fontSize: 16,
              color: "#64748b",
              lineHeight: 22,
            }}
          >
            Изучайте современный сленг по категориям
          </Text>
        </View>

        {/* Список категорий */}
        <FlatList
          data={wordCategories}
          keyExtractor={(item) => item.key}
          contentContainerStyle={{
            paddingHorizontal: 24,
            paddingBottom: 24,
          }}
          renderItem={({ item }) => (
            <Pressable
              onPress={() =>
                router.push({
                  pathname: "/(tabs)/words/[category]",
                  params: { category: item.key },
                })
              }
              style={({ pressed }) => ({
                backgroundColor: "#ffffff",
                borderRadius: 20,
                padding: 20,
                marginBottom: 16,
                borderWidth: 1,
                borderColor: "#f1f5f9",
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
                      backgroundColor: item.color + "20",
                      borderRadius: 16,
                      width: 50,
                      height: 50,
                      justifyContent: "center",
                      alignItems: "center",
                      marginRight: 16,
                    }}
                  >
                    <Text style={{ fontSize: 24 }}>
                      {categoryIcons[item.key] || "📝"}
                    </Text>
                  </View>

                  <View style={{ flex: 1 }}>
                    <Text
                      style={{
                        fontSize: 18,
                        fontWeight: "600",
                        color: "#1e293b",
                        marginBottom: 4,
                      }}
                    >
                      {item.title}
                    </Text>
                    <Text
                      style={{
                        fontSize: 14,
                        color: "#64748b",
                      }}
                    >
                      {item.words.length} слов
                    </Text>
                  </View>
                </View>

                <View
                  style={{
                    backgroundColor: "#f8fafc",
                    borderRadius: 12,
                    width: 32,
                    height: 32,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ fontSize: 16, color: "#64748b" }}>→</Text>
                </View>
              </View>
            </Pressable>
          )}
          showsVerticalScrollIndicator={false}
        />
      </Animated.View>
    </SafeAreaView>
  );
}
