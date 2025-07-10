import { wordCategories } from "@/data/wordCategories";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const categoryIcons: Record<
  string,
  { emoji: string; color: string; bgColor: string }
> = {
  money: { emoji: "💰", color: "#f59e0b", bgColor: "#fef3c7" },
  friends: { emoji: "👥", color: "#10b981", bgColor: "#d1fae5" },
  study_work: { emoji: "📚", color: "#3b82f6", bgColor: "#dbeafe" },
  food_drink: { emoji: "🍕", color: "#ef4444", bgColor: "#fee2e2" },
  emotions: { emoji: "😊", color: "#8b5cf6", bgColor: "#ede9fe" },
};

export default function WordsCategoryScreen() {
  const { category } = useLocalSearchParams();
  const router = useRouter();
  const cat = wordCategories.find((c) => c.key === category);
  const icon = categoryIcons[category as string] || {
    emoji: "📖",
    color: "#6b7280",
    bgColor: "#f3f4f6",
  };

  if (!cat)
    return (
      <SafeAreaView
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <Text>Категория не найдена</Text>
      </SafeAreaView>
    );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
      {/* Минималистичный хедер */}
      <View
        style={{
          backgroundColor: "#ffffff",
          paddingHorizontal: 20,
          paddingVertical: 16,
          borderBottomWidth: 1,
          borderBottomColor: "#f1f5f9",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity
            onPress={() => router.back()}
            style={{
              padding: 8,
              borderRadius: 12,
              backgroundColor: "#f8fafc",
            }}
          >
            <Ionicons name="arrow-back" size={20} color="#64748b" />
          </TouchableOpacity>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ fontSize: 32, marginRight: 8 }}>{icon.emoji}</Text>
            <Text style={{ fontSize: 20, fontWeight: "600", color: "#1e293b" }}>
              {cat.title}
            </Text>
          </View>

          <View style={{ width: 36 }} />
        </View>
      </View>

      {/* Список слов */}
      <FlatList
        data={cat.words}
        keyExtractor={(item, idx) => item.word + idx}
        contentContainerStyle={{ padding: 20 }}
        renderItem={({ item }) => (
          <View
            style={{
              backgroundColor: "#ffffff",
              borderRadius: 16,
              padding: 20,
              marginBottom: 12,
              borderWidth: 1,
              borderColor: "#f1f5f9",
              shadowColor: "#000",
              shadowOpacity: 0.03,
              shadowRadius: 8,
              shadowOffset: { width: 0, height: 2 },
              elevation: 1,
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "flex-start" }}>
              <View
                style={{
                  backgroundColor: icon.bgColor,
                  borderRadius: 12,
                  width: 40,
                  height: 40,
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: 16,
                }}
              >
                <Text style={{ fontSize: 20 }}>{icon.emoji}</Text>
              </View>

              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "600",
                    color: icon.color,
                    marginBottom: 4,
                  }}
                >
                  {item.word}
                </Text>
                <Text
                  style={{
                    fontSize: 15,
                    color: "#64748b",
                    lineHeight: 20,
                  }}
                >
                  {item.meaning}
                </Text>
              </View>
            </View>
          </View>
        )}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}
