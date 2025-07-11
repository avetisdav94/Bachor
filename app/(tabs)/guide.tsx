import { Ionicons } from "@expo/vector-icons";
import { useEffect, useRef } from "react";
import {
  Animated,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

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

export default function GuideScreen() {
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
            style={{
              paddingHorizontal: 24,
              paddingTop: 20,
              paddingBottom: 16,
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
              Справочник эмигранта 🇵🇱
            </Text>
            <Text style={{ fontSize: 16, color: "#64748b", lineHeight: 22 }}>
              Полезная информация для жизни в Польше
            </Text>
          </View>

          {/* Быстрые контакты */}
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
                  <Text style={{ fontSize: 20 }}>🚨</Text>
                </View>
                <Text
                  style={{ fontSize: 18, fontWeight: "600", color: "#1e293b" }}
                >
                  Экстренные контакты
                </Text>
              </View>

              <View style={{ gap: 12 }}>
                {/* Первая строка - Скорая */}
                <TouchableOpacity
                  style={{
                    backgroundColor: "#ef4444",
                    borderRadius: 16,
                    padding: 16,
                    alignItems: "center",
                    flexDirection: "row",
                    justifyContent: "center",
                  }}
                >
                  <Text style={{ fontSize: 20, marginRight: 8 }}>🚑</Text>
                  <View style={{ alignItems: "center" }}>
                    <Text
                      style={{
                        color: "#ffffff",
                        fontWeight: "600",
                        fontSize: 16,
                        marginBottom: 2,
                      }}
                    >
                      Скорая помощь
                    </Text>
                    <Text style={{ color: "#fee2e2", fontSize: 14 }}>999</Text>
                  </View>
                </TouchableOpacity>

                {/* Вторая строка - Полиция и Пожарные */}
                <View style={{ flexDirection: "row", gap: 12 }}>
                  <TouchableOpacity
                    style={{
                      backgroundColor: "#3b82f6",
                      borderRadius: 16,
                      padding: 16,
                      flex: 1,
                      alignItems: "center",
                    }}
                  >
                    <Text style={{ fontSize: 20, marginBottom: 4 }}>👮</Text>
                    <Text
                      style={{
                        color: "#ffffff",
                        fontWeight: "600",
                        fontSize: 16,
                        marginBottom: 2,
                      }}
                    >
                      Полиция
                    </Text>
                    <Text style={{ color: "#dbeafe", fontSize: 14 }}>997</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={{
                      backgroundColor: "#f59e0b",
                      borderRadius: 16,
                      padding: 16,
                      flex: 1,
                      alignItems: "center",
                    }}
                  >
                    <Text style={{ fontSize: 20, marginBottom: 4 }}>🔥</Text>
                    <Text
                      style={{
                        color: "#ffffff",
                        fontWeight: "600",
                        fontSize: 16,
                        marginBottom: 2,
                      }}
                    >
                      Пожарные
                    </Text>
                    <Text style={{ color: "#fef3c7", fontSize: 14 }}>998</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>

          {/* Категории справочника */}
          <View style={{ paddingHorizontal: 24 }}>
            {guideCategories.map((category) => (
              <TouchableOpacity
                key={category.id}
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: 20,
                  padding: 20,
                  marginBottom: 16,
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
                        backgroundColor: category.bgColor,
                        borderRadius: 16,
                        width: 50,
                        height: 50,
                        justifyContent: "center",
                        alignItems: "center",
                        marginRight: 16,
                      }}
                    >
                      <Text style={{ fontSize: 24 }}>{category.icon}</Text>
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
                        {category.title}
                      </Text>
                      <Text style={{ fontSize: 14, color: "#64748b" }}>
                        {category.subtitle}
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
                    <Ionicons
                      name="chevron-forward"
                      size={16}
                      color="#64748b"
                    />
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </Animated.View>
    </SafeAreaView>
  );
}
