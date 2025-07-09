import { wordCategories } from "@/data/wordCategories";
import { useLocalSearchParams } from "expo-router";
import { FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function WordsCategoryScreen() {
  const { category } = useLocalSearchParams();
  const cat = wordCategories.find((c) => c.key === category);

  if (!cat)
    return (
      <SafeAreaView
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <Text>Категория не найдена</Text>
      </SafeAreaView>
    );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f2f2f2" }}>
      <View style={{ flex: 1, padding: 24 }}>
        <Text style={{ fontSize: 22, fontWeight: "bold", marginBottom: 16 }}>
          {cat.title}
        </Text>
        <FlatList
          data={cat.words}
          keyExtractor={(item, idx) => item.word + idx}
          renderItem={({ item }) => (
            <View
              style={{
                backgroundColor: "#fff",
                borderRadius: 10,
                padding: 16,
                marginBottom: 12,
                shadowColor: "#000",
                shadowOpacity: 0.06,
                shadowRadius: 4,
                elevation: 1,
              }}
            >
              <Text
                style={{ fontWeight: "bold", fontSize: 17, color: "#457b9d" }}
              >
                {item.word}
              </Text>
              <Text style={{ color: "#333" }}>{item.meaning}</Text>
            </View>
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
}
