import { Fonts } from "@/src/constants/fonts";
import React from "react";
import { Text, View } from "react-native";
import { Card } from "../../components/common/Card";
import { EmergencyButton } from "../../components/common/EmergencyButton";
import { Colors } from "../../constants/colors";
const emergencyContacts = [
  {
    title: "Скорая помощь",
    subtitle: "Медицинская помощь",
    number: "999",
    color: Colors.error,
    icon: "🚑",
  },
  {
    title: "Полиция",
    subtitle: "Службы безопасности",
    number: "997",
    color: Colors.primary,
    icon: "👮",
  },
  {
    title: "Пожарные",
    subtitle: "Пожарная служба",
    number: "998",
    color: Colors.warning,
    icon: "🔥",
  },
];

export const EmergencyContacts: React.FC = () => {
  return (
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
          <Text style={{ fontSize: 20 }}>🚨</Text>
        </View>
        <Text
          style={{
            fontSize: Fonts.titleSmall,
            fontWeight: Fonts.weightSemiBold,
            color: Colors.text,
          }}
        >
          Экстренные контакты
        </Text>
      </View>

      <View style={{ gap: 12 }}>
        {/* Первая строка - Скорая */}
        <EmergencyButton {...emergencyContacts[0]} />

        {/* Вторая строка - Полиция и Пожарные */}
        <View style={{ flexDirection: "row", gap: 12 }}>
          <EmergencyButton {...emergencyContacts[1]} />
          <EmergencyButton {...emergencyContacts[2]} />
        </View>
      </View>
    </Card>
  );
};
