import React from "react";
import { Text, TextStyle, TouchableOpacity, ViewStyle } from "react-native";
import { Colors } from "../../constants/colors";

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: "primary" | "secondary" | "outline";
  size?: "small" | "medium" | "large";
  style?: ViewStyle;
  textStyle?: TextStyle;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = "primary",
  size = "medium",
  style,
  textStyle,
  disabled = false,
}) => {
  const getButtonStyle = () => {
    const baseStyle = {
      borderRadius: 16,
      alignItems: "center" as const,
      justifyContent: "center" as const,
    };

    const variants = {
      primary: { backgroundColor: Colors.primary },
      secondary: { backgroundColor: Colors.card },
      outline: {
        backgroundColor: "transparent",
        borderWidth: 1,
        borderColor: Colors.border,
      },
    };

    const sizes = {
      small: { paddingVertical: 8, paddingHorizontal: 16 },
      medium: { paddingVertical: 12, paddingHorizontal: 20 },
      large: { paddingVertical: 16, paddingHorizontal: 24 },
    };

    return [baseStyle, variants[variant], sizes[size]];
  };

  const getTextStyle = () => {
    const baseStyle = {
      fontWeight: "600" as const,
      fontSize: 16,
    };

    const variants = {
      primary: { color: Colors.background },
      secondary: { color: Colors.text },
      outline: { color: Colors.text },
    };

    return [baseStyle, variants[variant]];
  };

  return (
    <TouchableOpacity
      style={[getButtonStyle(), style, disabled && { opacity: 0.5 }]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={[getTextStyle(), textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};
