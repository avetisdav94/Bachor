import { Layout } from "@/src/constants/layout";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Colors } from "../../constants/colors";
import { Fonts } from "../../constants/fonts";
import { GuideCategory } from "../../types";

interface GuideCardProps {
  category: GuideCategory;
  onPress?: () => void;
}

export const GuideCard: React.FC<GuideCardProps> = ({ category, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: Colors.background,
        borderRadius: Layout.borderRadius,
        padding: Layout.cardPadding,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: Colors.border,
        shadowColor: "#000",
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 3,
      }}
      onPress={onPress}
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
              width: Layout.iconSize,
              height: Layout.iconSize,
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
                fontSize: Fonts.titleSmall,
                fontWeight: Fonts.weightSemiBold,
                color: Colors.text,
                marginBottom: 4,
              }}
            >
              {category.title}
            </Text>
            <Text
              style={{
                fontSize: Fonts.bodySmall,
                color: Colors.textSecondary,
              }}
            >
              {category.subtitle}
            </Text>
          </View>
        </View>

        <View
          style={{
            backgroundColor: Colors.card,
            borderRadius: 12,
            width: Layout.smallIconSize,
            height: Layout.smallIconSize,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Ionicons
            name="chevron-forward"
            size={16}
            color={Colors.textSecondary}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};
