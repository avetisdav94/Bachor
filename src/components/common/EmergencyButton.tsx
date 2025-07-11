import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { Colors } from "../../constants/colors";

interface EmergencyButtonProps {
  title: string;
  subtitle: string;
  number: string;
  color: string;
  icon: string;
  onPress?: () => void;
}

export const EmergencyButton: React.FC<EmergencyButtonProps> = ({
  title,
  subtitle,
  number,
  color,
  icon,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: color,
        borderRadius: 16,
        padding: 16,
        alignItems: "center",
        flex: 1,
      }}
      onPress={onPress}
    >
      <Text style={{ fontSize: 20, marginBottom: 4 }}>{icon}</Text>
      <Text
        style={{
          color: Colors.background,
          fontWeight: "600",
          fontSize: 16,
          marginBottom: 2,
        }}
      >
        {title}
      </Text>
      <Text style={{ color: Colors.background + "80", fontSize: 14 }}>
        {number}
      </Text>
    </TouchableOpacity>
  );
};
