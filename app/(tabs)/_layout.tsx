import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "#3b82f6",
        tabBarInactiveTintColor: "#64748b",
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#ffffff",
          borderTopWidth: 1,
          borderTopColor: "#f1f5f9",
          paddingBottom: 8,
          paddingTop: 8,
          height: 90,
          shadowColor: "#000",
          shadowOpacity: 0.05,
          shadowRadius: 10,
          shadowOffset: { width: 0, height: -2 },
          elevation: 8,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
          marginTop: 4,
        },
        tabBarItemStyle: {
          paddingVertical: 4,
        },
        tabBarIcon: ({ color, size, focused }) => {
          let iconName: keyof typeof Ionicons.glyphMap = "home";

          if (route.name === "index")
            iconName = focused ? "home" : "home-outline";
          if (route.name === "words")
            iconName = focused ? "book" : "book-outline";
          if (route.name === "guide")
            iconName = focused
              ? "information-circle"
              : "information-circle-outline";
          if (route.name === "profile")
            iconName = focused ? "person" : "person-outline";

          return (
            <Ionicons name={iconName} size={focused ? 26 : 24} color={color} />
          );
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
