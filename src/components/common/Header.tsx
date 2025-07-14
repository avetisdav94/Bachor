import { Fonts } from "@/src/constants/fonts";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Colors } from "../../constants/colors";
import { Layout } from "../../constants/layout";

interface HeaderProps {
  title: string;
  subtitle?: string;
  showBackButton?: boolean;
  onBackPress?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  title,
  subtitle,
  showBackButton = false,
  onBackPress,
}) => {
  return (
    <View
      style={{
        paddingHorizontal: Layout.padding,
        paddingTop: Layout.padding,
        paddingBottom: Layout.padding,
      }}
    >
      {showBackButton && (
        <TouchableOpacity
          onPress={onBackPress}
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 16,
            paddingVertical: 8,
          }}
        >
          <Ionicons name="arrow-back" size={24} color={Colors.primary} />
          <Text
            style={{
              fontSize: Fonts.bodyMedium,
              color: Colors.primary,
              marginLeft: 8,
              fontWeight: Fonts.weightSemiBold,
            }}
          >
            Назад
          </Text>
        </TouchableOpacity>
      )}

      <Text
        style={{
          fontSize: Fonts.titleLarge,
          fontWeight: Fonts.weightBold,
          color: Colors.text,
          marginBottom: subtitle ? 8 : 0,
        }}
      >
        {title}
      </Text>

      {subtitle && (
        <Text
          style={{
            fontSize: Fonts.bodyMedium,
            color: Colors.textSecondary,
            lineHeight: 22,
          }}
        >
          {subtitle}
        </Text>
      )}
    </View>
  );
};
