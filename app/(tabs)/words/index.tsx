import { wordCategories } from "@/data/wordCategories";
import { useRouter } from "expo-router";
import { useEffect, useRef } from "react";
import { Animated, FlatList, Pressable, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

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
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f2f2f2" }}>
      <Animated.View style={{ flex: 1, padding: 24, opacity: fadeAnim }}>
        <Text style={{ fontSize: 22, fontWeight: "bold", marginBottom: 16 }}>
          Категории сленга
        </Text>
        <FlatList
          data={wordCategories}
          keyExtractor={(item) => item.key}
          renderItem={({ item }) => (
            <Pressable
              onPress={() =>
                router.push({
                  pathname: "/(tabs)/words/[category]",
                  params: { category: item.key },
                })
              }
              style={{
                backgroundColor: item.color,
                borderRadius: 14,
                padding: 20,
                marginBottom: 16,
                shadowColor: "#000",
                shadowOpacity: 0.08,
                shadowRadius: 6,
                elevation: 2,
              }}
            >
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                {item.title}
              </Text>
              <Text style={{ color: "#555" }}>{item.words.length} слов</Text>
            </Pressable>
          )}
        />
      </Animated.View>
    </SafeAreaView>
  );
}
