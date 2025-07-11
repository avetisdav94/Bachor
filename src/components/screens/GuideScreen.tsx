import { Layout } from "@/src/constants/layout";
import React from "react";
import { Animated, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "../../components/common/Header";
import { EmergencyContacts } from "../../components/guide/EmergencyContacts";
import { GuideCard } from "../../components/guide/GuideCard";
import { Colors } from "../../constants/colors";
import { useAnimation } from "../../hooks/useAnimation";

const guideCategories = [
  {
    id: 1,
    title: "Документы",
    subtitle: "Виза, карта побыту, разрешения",
    icon: "📄",
    color: "#3b82f6",
    bgColor: "#dbeafe",
  },
  {
    id: 2,
    title: "Работа",
    subtitle: "Поиск работы, права работника",
    icon: "💼",
    color: "#10b981",
    bgColor: "#d1fae5",
  },
  {
    id: 3,
    title: "Жилье",
    subtitle: "Аренда, покупка, коммунальные услуги",
    icon: "🏠",
    color: "#f59e0b",
    bgColor: "#fef3c7",
  },
  {
    id: 4,
    title: "Здоровье",
    subtitle: "Страховка, NFZ, врачи",
    icon: "🏥",
    color: "#ef4444",
    bgColor: "#fee2e2",
  },
  {
    id: 5,
    title: "Банки",
    subtitle: "Открытие счета, карты, кредиты",
    icon: "🏦",
    color: "#8b5cf6",
    bgColor: "#ede9fe",
  },
  {
    id: 6,
    title: "Образование",
    subtitle: "Школы, университеты, признание дипломов",
    icon: "🎓",
    color: "#06b6d4",
    bgColor: "#cffafe",
  },
  {
    id: 7,
    title: "Транспорт",
    subtitle: "Водительские права, общественный транспорт",
    icon: "🚗",
    color: "#84cc16",
    bgColor: "#ecfccb",
  },
  {
    id: 8,
    title: "Налоги",
    subtitle: "Подача деклараций, льготы",
    icon: "📊",
    color: "#f97316",
    bgColor: "#fed7aa",
  },
];

export const GuideScreen: React.FC = () => {
  const fadeAnim = useAnimation();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.background }}>
      <Animated.View style={{ flex: 1, opacity: fadeAnim }}>
        <ScrollView
          contentContainerStyle={{ paddingBottom: Layout.padding }}
          showsVerticalScrollIndicator={false}
        >
          <Header
            title="Справочник эмигранта 🇵🇱"
            subtitle="Полезная информация для жизни в Польше"
          />

          {/* Экстренные контакты */}
          <View
            style={{
              paddingHorizontal: Layout.padding,
              marginBottom: Layout.padding,
            }}
          >
            <EmergencyContacts />
          </View>

          {/* Категории справочника */}
          <View style={{ paddingHorizontal: Layout.padding }}>
            {guideCategories.map((category) => (
              <GuideCard
                key={category.id}
                category={category}
                onPress={() => {
                  // Добавьте навигацию
                }}
              />
            ))}
          </View>
        </ScrollView>
      </Animated.View>
    </SafeAreaView>
  );
};
