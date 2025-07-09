import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
export default function TabLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "#e63946",
        tabBarInactiveTintColor: "#457b9d",
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap = "home";
          if (route.name === "index") iconName = "home";
          if (route.name === "words") iconName = "book";
          if (route.name === "guide") iconName = "information-circle";
          if (route.name === "profile") iconName = "person";
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tabs.Screen name="index" options={{ title: "Главная" }} />
      <Tabs.Screen name="words" options={{ title: "Слова" }} />
      <Tabs.Screen name="guide" options={{ title: "Справочник" }} />
      <Tabs.Screen name="profile" options={{ title: "Профиль" }} />
    </Tabs>
  );
}
