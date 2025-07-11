import { Fonts } from "@/src/constants/fonts";
import { Layout } from "@/src/constants/layout";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  Animated,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Card } from "../../components/common/Card";
import { Header } from "../../components/common/Header";
import { Colors } from "../../constants/colors";
import { useAnimation } from "../../hooks/useAnimation";

export const ProfileScreen: React.FC = () => {
  const fadeAnim = useAnimation();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.background }}>
      <Animated.View style={{ flex: 1, opacity: fadeAnim }}>
        <ScrollView
          contentContainerStyle={{ paddingBottom: Layout.padding }}
          showsVerticalScrollIndicator={false}
        >
          <Header title="Профиль 👤" subtitle="Ваши настройки и информация" />

          {/* Профиль пользователя */}
          <View
            style={{
              paddingHorizontal: Layout.padding,
              marginBottom: Layout.padding,
            }}
          >
            <Card>
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
                    fontSize: Fonts.titleMedium,
                    fontWeight: Fonts.weightBold,
                    color: Colors.text,
                    marginBottom: 4,
                  }}
                >
                  Пользователь
                </Text>
                <Text
                  style={{
                    fontSize: Fonts.bodyLarge,
                    color: Colors.textSecondary,
                  }}
                >
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
                      fontWeight: Fonts.weightBold,
                      color: Colors.primary,
                    }}
                  >
                    127
                  </Text>
                  <Text
                    style={{
                      fontSize: Fonts.bodySmall,
                      color: Colors.textSecondary,
                    }}
                  >
                    Слов просмотрено
                  </Text>
                </View>
                <View style={{ alignItems: "center" }}>
                  <Text
                    style={{
                      fontSize: 24,
                      fontWeight: Fonts.weightBold,
                      color: Colors.error,
                    }}
                  >
                    5
                  </Text>
                  <Text
                    style={{
                      fontSize: Fonts.bodySmall,
                      color: Colors.textSecondary,
                    }}
                  >
                    Категорий
                  </Text>
                </View>
              </View>
            </Card>
          </View>

          {/* Настройки */}
          <View
            style={{
              paddingHorizontal: Layout.padding,
              marginBottom: Layout.padding,
            }}
          >
            <Card>
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
                  style={{
                    fontSize: Fonts.titleSmall,
                    fontWeight: Fonts.weightSemiBold,
                    color: Colors.text,
                  }}
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
                    borderBottomColor: Colors.border,
                  }}
                >
                  <View
                    style={{
                      backgroundColor: Colors.card,
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
                        fontSize: Fonts.bodyLarge,
                        fontWeight: Fonts.weightSemiBold,
                        color: Colors.text,
                        marginBottom: 2,
                      }}
                    >
                      {item.title}
                    </Text>
                    <Text
                      style={{
                        fontSize: Fonts.bodySmall,
                        color: Colors.textSecondary,
                      }}
                    >
                      {item.subtitle}
                    </Text>
                  </View>
                  <Ionicons
                    name="chevron-forward"
                    size={20}
                    color={Colors.textSecondary}
                  />
                </TouchableOpacity>
              ))}
            </Card>
          </View>

          {/* О приложении */}
          <View
            style={{
              paddingHorizontal: Layout.padding,
              marginBottom: Layout.padding,
            }}
          >
            <Card>
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
                  style={{
                    fontSize: Fonts.titleSmall,
                    fontWeight: Fonts.weightSemiBold,
                    color: Colors.text,
                  }}
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
                    borderBottomColor: Colors.border,
                  }}
                >
                  <View
                    style={{
                      backgroundColor: Colors.card,
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
                        fontSize: Fonts.bodyLarge,
                        fontWeight: Fonts.weightSemiBold,
                        color: Colors.text,
                        marginBottom: 2,
                      }}
                    >
                      {item.title}
                    </Text>
                    <Text
                      style={{
                        fontSize: Fonts.bodySmall,
                        color: Colors.textSecondary,
                      }}
                    >
                      {item.subtitle}
                    </Text>
                  </View>
                  <Ionicons
                    name="chevron-forward"
                    size={20}
                    color={Colors.textSecondary}
                  />
                </TouchableOpacity>
              ))}
            </Card>
          </View>
        </ScrollView>
      </Animated.View>
    </SafeAreaView>
  );
};
