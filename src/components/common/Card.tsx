import React from "react";
import { View, ViewStyle } from "react-native";
import { Colors } from "../../constants/colors";
import { Layout } from "../../constants/layout";

interface CardProps {
  children: React.ReactNode;
  style?: ViewStyle;
  padding?: number;
}

export const Card: React.FC<CardProps> = ({
  children,
  style,
  padding = Layout.cardPadding,
}) => {
  return (
    <View
      style={[
        {
          backgroundColor: Colors.background,
          borderRadius: Layout.borderRadius,
          padding,
          borderWidth: 1,
          borderColor: Colors.border,
          shadowColor: "#000",
          shadowOpacity: 0.05,
          shadowRadius: 10,
          elevation: 3,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
};
