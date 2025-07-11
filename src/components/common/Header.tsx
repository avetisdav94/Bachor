import { Fonts } from "@/src/constants/fonts";
import React from "react";
import { Text, View } from "react-native";
import { Colors } from "../../constants/colors";
import { Layout } from "../../constants/layout";

interface HeaderProps {
  title: string;
  subtitle?: string;
}

export const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
  return (
    <View
      style={{
        paddingHorizontal: Layout.padding,
        paddingTop: 20,
        paddingBottom: 16,
        backgroundColor: Colors.background,
      }}
    >
      <Text
        style={{
          fontSize: Fonts.titleLarge,
          fontWeight: Fonts.weightBold,
          color: Colors.text,
          marginBottom: 8,
        }}
      >
        {title}
      </Text>
      {subtitle && (
        <Text
          style={{
            fontSize: Fonts.bodyLarge,
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
