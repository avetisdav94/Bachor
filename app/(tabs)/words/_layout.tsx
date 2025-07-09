import { wordCategories } from "@/data/wordCategories";
import { Stack } from "expo-router";

export default function WordsStackLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Слова" }} />
      <Stack.Screen
        name="[category]"
        options={({ route }) => {
          const categoryKey = (route.params as { category?: string })?.category;
          const cat = wordCategories.find((c) => c.key === categoryKey);
          return { title: cat ? cat.title : "Категория" };
        }}
      />
    </Stack>
  );
}
