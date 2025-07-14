// src/components/common/ProfileInfo.tsx
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants/colors";
import { useAuth } from "../../context/AuthContext";

export const ProfileInfo: React.FC = () => {
  const { user } = useAuth();

  if (!user) {
    return (
      <View style={styles.container}>
        <Text style={styles.noUser}>Пользователь не авторизован</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Имя:</Text>
      <Text style={styles.value}>{user.displayName || "Не указано"}</Text>

      <Text style={styles.label}>Email:</Text>
      <Text style={styles.value}>{user.email}</Text>

      <Text style={styles.label}>Дата регистрации:</Text>
      <Text style={styles.value}>
        {new Date(user.createdAt).toLocaleDateString("ru-RU")}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: Colors.card,
    borderRadius: 12,
    margin: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: Colors.text,
    marginTop: 10,
  },
  value: {
    fontSize: 16,
    color: Colors.textSecondary,
    marginBottom: 10,
  },
  noUser: {
    fontSize: 16,
    color: Colors.textSecondary,
    textAlign: "center",
  },
});
