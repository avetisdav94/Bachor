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

export default function ProfileScreen() {
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
              Профиль 👤
            </Text>
            <Text style={{ fontSize: 16, color: "#64748b", lineHeight: 22 }}>
              Ваши настройки и информация
            </Text>
          </View>

          {/* Профиль пользователя */}
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
              <View style={{ alignItems: "center", marginBottom: 20 }}>
                <View
                  style={{
                    backgroundColor: "#dbeafe",
                    borderRadius: 40,
                    width: 80,
                    height: 80,
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: 16,
                  }}
                >
                  <Text style={{ fontSize: 36 }}>👨‍💻</Text>
                </View>
                <Text
                  style={{
                    fontSize: 22,
                    fontWeight: "bold",
                    color: "#1e293b",
                    marginBottom: 4,
                  }}
                >
                  Пользователь
                </Text>
                <Text style={{ fontSize: 16, color: "#64748b" }}>
                  Использую справочник с 2024
                </Text>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                }}
              >
                <View style={{ alignItems: "center" }}>
                  <Text
                    style={{
                      fontSize: 24,
                      fontWeight: "bold",
                      color: "#3b82f6",
                    }}
                  >
                    127
                  </Text>
                  <Text style={{ fontSize: 14, color: "#64748b" }}>
                    Слов просмотрено
                  </Text>
                </View>
                <View style={{ alignItems: "center" }}>
                  <Text
                    style={{
                      fontSize: 24,
                      fontWeight: "bold",
                      color: "#ef4444",
                    }}
                  >
                    5
                  </Text>
                  <Text style={{ fontSize: 14, color: "#64748b" }}>
                    Категорий
                  </Text>
                </View>
              </View>
            </View>
          </View>

          {/* Настройки */}
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
                  <Text style={{ fontSize: 20 }}>⚙️</Text>
                </View>
                <Text
                  style={{ fontSize: 18, fontWeight: "600", color: "#1e293b" }}
                >
                  Настройки
                </Text>
              </View>

              {[
                {
                  icon: "🔔",
                  title: "Уведомления",
                  subtitle: "Включить напоминания",
                },
                {
                  icon: "🌙",
                  title: "Темная тема",
                  subtitle: "Переключить на темную тему",
                },
              ].map((item, idx) => (
                <TouchableOpacity
                  key={idx}
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    paddingVertical: 16,
                    borderBottomWidth: idx < 1 ? 1 : 0,
                    borderBottomColor: "#f1f5f9",
                  }}
                >
                  <View
                    style={{
                      backgroundColor: "#f8fafc",
                      borderRadius: 12,
                      width: 36,
                      height: 36,
                      justifyContent: "center",
                      alignItems: "center",
                      marginRight: 16,
                    }}
                  >
                    <Text style={{ fontSize: 16 }}>{item.icon}</Text>
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: "600",
                        color: "#1e293b",
                        marginBottom: 2,
                      }}
                    >
                      {item.title}
                    </Text>
                    <Text style={{ fontSize: 14, color: "#64748b" }}>
                      {item.subtitle}
                    </Text>
                  </View>
                  <Ionicons name="chevron-forward" size={20} color="#64748b" />
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* О приложении */}
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
                    backgroundColor: "#ede9fe",
                    borderRadius: 12,
                    width: 40,
                    height: 40,
                    justifyContent: "center",
                    alignItems: "center",
                    marginRight: 12,
                  }}
                >
                  <Text style={{ fontSize: 20 }}>ℹ️</Text>
                </View>
                <Text
                  style={{ fontSize: 18, fontWeight: "600", color: "#1e293b" }}
                >
                  О приложении
                </Text>
              </View>

              {[
                {
                  icon: "📝",
                  title: "Поддержка",
                  subtitle: "Связаться с нами",
                },
                {
                  icon: "⭐",
                  title: "Оценить",
                  subtitle: "Поставить оценку в App Store",
                },
                {
                  icon: "📋",
                  title: "Политика конфиденциальности",
                  subtitle: "Прочитать условия",
                },
                { icon: "📱", title: "Версия", subtitle: "1.0.0" },
              ].map((item, idx) => (
                <TouchableOpacity
                  key={idx}
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    paddingVertical: 16,
                    borderBottomWidth: idx < 3 ? 1 : 0,
                    borderBottomColor: "#f1f5f9",
                  }}
                >
                  <View
                    style={{
                      backgroundColor: "#f8fafc",
                      borderRadius: 12,
                      width: 36,
                      height: 36,
                      justifyContent: "center",
                      alignItems: "center",
                      marginRight: 16,
                    }}
                  >
                    <Text style={{ fontSize: 16 }}>{item.icon}</Text>
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: "600",
                        color: "#1e293b",
                        marginBottom: 2,
                      }}
                    >
                      {item.title}
                    </Text>
                    <Text style={{ fontSize: 14, color: "#64748b" }}>
                      {item.subtitle}
                    </Text>
                  </View>
                  <Ionicons name="chevron-forward" size={20} color="#64748b" />
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </ScrollView>
      </Animated.View>
    </SafeAreaView>
  );
}
