// src/components/screens/ProfileScreen.tsx
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import React, { useEffect, useState } from "react";
import {
  Alert,
  Animated,
  Dimensions,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Colors } from "../../constants/colors";
import { Layout } from "../../constants/layout";
import { useAuth } from "../../context/AuthContext";
import { useFavorites } from "../../context/FavoritesContext";

const { width } = Dimensions.get("window");

export const ProfileScreen: React.FC = () => {
  const fadeAnim = React.useRef(new Animated.Value(0)).current;
  const slideAnim = React.useRef(new Animated.Value(-50)).current;

  const { user, signOut, updateProfile } = useAuth();
  const { favorites } = useFavorites();
  const [showEditModal, setShowEditModal] = useState(false);
  const [wordsViewed] = useState(234);
  const [cardsCompleted] = useState(12);

  // Данные для Karta Pobytu (можно позже вынести в контекст или API)
  const [kartaPobytu] = useState({
    basis: "Praca", // Praca, Studia, Rodzina
    issueDate: "2024-01-15",
    expiryDate: "2025-01-15",
    isValid: true,
  });

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 600,
        useNativeDriver: true,
      }),
    ]).start();
  }, [fadeAnim, slideAnim]);

  const handleSignOut = async () => {
    Alert.alert("Выход из аккаунта", "Вы действительно хотите выйти?", [
      { text: "Отмена", style: "cancel" },
      {
        text: "Выйти",
        style: "destructive",
        onPress: async () => {
          const { error } = await signOut();
          if (error) {
            console.error("Sign out error:", error);
          }
        },
      },
    ]);
  };

  const handleAvatarPress = async () => {
    Alert.alert("Изменить фото профиля", "Выберите источник изображения", [
      { text: "Отмена", style: "cancel" },
      { text: "Камера", onPress: openCamera },
      { text: "Галерея", onPress: openGallery },
    ]);
  };

  const openCamera = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      Alert.alert("Ошибка", "Необходимо разрешение на использование камеры");
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.7,
    });

    if (!result.canceled && result.assets[0]) {
      await updateProfileAvatar(result.assets[0].uri);
    }
  };

  const openGallery = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.7,
    });

    if (!result.canceled && result.assets[0]) {
      await updateProfileAvatar(result.assets[0].uri);
    }
  };

  const updateProfileAvatar = async (uri: string) => {
    const { error } = await updateProfile({ avatar: uri });
    if (error) {
      Alert.alert("Ошибка", "Не удалось обновить аватар");
    } else {
      Alert.alert("Успешно", "Аватар обновлен!");
    }
  };

  const getBasisInfo = (basis: string) => {
    switch (basis) {
      case "Praca":
        return {
          emoji: "💼",
          title: "Работа",
          description: "Трудоустройство",
          color: Colors.primary,
        };
      case "Studia":
        return {
          emoji: "🎓",
          title: "Учеба",
          description: "Образование",
          color: Colors.success,
        };
      case "Rodzina":
        return {
          emoji: "👨‍👩‍👧‍👦",
          title: "Семья",
          description: "Воссоединение семьи",
          color: Colors.warning,
        };
      default:
        return {
          emoji: "📄",
          title: "Другое",
          description: "Иное основание",
          color: Colors.textSecondary,
        };
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const months = [
      "января",
      "февраля",
      "марта",
      "апреля",
      "мая",
      "июня",
      "июля",
      "августа",
      "сентября",
      "октября",
      "ноября",
      "декабря",
    ];
    return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
  };

  const getDaysUntilExpiry = () => {
    const today = new Date();
    const expiry = new Date(kartaPobytu.expiryDate);
    const diffTime = expiry.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "🌅 Доброе утро";
    if (hour < 17) return "☀️ Добрый день";
    return "🌙 Добрый вечер";
  };

  if (!user) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>🔄 Загрузка профиля...</Text>
      </View>
    );
  }

  const basisInfo = getBasisInfo(kartaPobytu.basis);
  const daysUntilExpiry = getDaysUntilExpiry();
  const isExpiringSoon = daysUntilExpiry <= 30;

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.primary} />

      {/* Header */}
      <View style={styles.header}>
        <Animated.View style={[styles.headerContent, { opacity: fadeAnim }]}>
          <Text style={styles.greeting}>{getGreeting()}</Text>

          <View style={styles.profileInfo}>
            <View style={styles.avatarContainer}>
              <TouchableOpacity
                onPress={handleAvatarPress}
                style={styles.avatarTouchable}
              >
                <View style={styles.avatar}>
                  {user.avatar ? (
                    <Image
                      source={{ uri: user.avatar }}
                      style={styles.avatarImage}
                    />
                  ) : (
                    <Text style={styles.avatarEmoji}>
                      {user.displayName?.charAt(0).toUpperCase() || "👤"}
                    </Text>
                  )}
                </View>
                <View style={styles.avatarEditBadge}>
                  <Ionicons name="camera" size={12} color={Colors.white} />
                </View>
              </TouchableOpacity>
              <View style={styles.statusBadge}>
                <Text style={styles.statusEmoji}>✨</Text>
              </View>
            </View>

            <View style={styles.userInfo}>
              <Text style={styles.displayName}>
                {user.displayName || "Пользователь"}
              </Text>
              <Text style={styles.email}>{user.email}</Text>
              <Text style={styles.joinDate}>
                📅 С нами с {formatDate(user.createdAt)}
              </Text>
            </View>
          </View>
        </Animated.View>
      </View>

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {/* Stats Cards */}
        <Animated.View
          style={[
            styles.statsContainer,
            {
              opacity: fadeAnim,
              transform: [{ translateY: slideAnim }],
            },
          ]}
        >
          <View style={styles.statCard}>
            <Text style={styles.statEmoji}>❤️</Text>
            <Text style={styles.statValue}>{favorites.length}</Text>
            <Text style={styles.statLabel}>Избранные</Text>
          </View>

          <View style={styles.statCard}>
            <Text style={styles.statEmoji}>📖</Text>
            <Text style={styles.statValue}>{wordsViewed}</Text>
            <Text style={styles.statLabel}>Слов изучено</Text>
          </View>

          <View style={styles.statCard}>
            <Text style={styles.statEmoji}>🎯</Text>
            <Text style={styles.statValue}>{cardsCompleted}</Text>
            <Text style={styles.statLabel}>Карточек пройдено</Text>
          </View>
        </Animated.View>

        {/* Karta Pobytu */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>🏛️ Karta Pobytu</Text>

          <View
            style={[
              styles.kartaPobytuCard,
              {
                borderColor: kartaPobytu.isValid
                  ? Colors.success
                  : Colors.error,
              },
            ]}
          >
            {/* Header карты */}
            <View style={styles.kartaPobytuHeader}>
              <View style={styles.kartaPobytuIcon}>
                <Text style={styles.kartaPobytuEmoji}>🇵🇱</Text>
              </View>
              <View style={styles.kartaPobytuHeaderText}>
                <Text style={styles.kartaPobytuTitle}>Karta Pobytu</Text>
                <Text
                  style={[
                    styles.kartaPobytuStatus,
                    {
                      color: kartaPobytu.isValid
                        ? Colors.success
                        : Colors.error,
                    },
                  ]}
                >
                  {kartaPobytu.isValid ? "Действительна" : "Недействительна"}
                </Text>
              </View>
              <View
                style={[
                  styles.kartaPobytuStatusBadge,
                  {
                    backgroundColor: kartaPobytu.isValid
                      ? Colors.success
                      : Colors.error,
                  },
                ]}
              >
                <Ionicons
                  name={kartaPobytu.isValid ? "checkmark" : "close"}
                  size={16}
                  color={Colors.white}
                />
              </View>
            </View>

            {/* Основание выдачи */}
            <View style={styles.kartaPobytuInfo}>
              <View style={styles.kartaPobytuInfoRow}>
                <Text style={styles.kartaPobytuLabel}>Основание:</Text>
                <View style={styles.kartaPobytuBasis}>
                  <Text style={styles.kartaPobytuBasisEmoji}>
                    {basisInfo.emoji}
                  </Text>
                  <Text
                    style={[
                      styles.kartaPobytuBasisText,
                      { color: basisInfo.color },
                    ]}
                  >
                    {basisInfo.title}
                  </Text>
                </View>
              </View>

              <View style={styles.kartaPobytuInfoRow}>
                <Text style={styles.kartaPobytuLabel}>Описание:</Text>
                <Text style={styles.kartaPobytuValue}>
                  {basisInfo.description}
                </Text>
              </View>
            </View>

            {/* Даты */}
            <View style={styles.kartaPobytuDates}>
              <View style={styles.kartaPobytuDateItem}>
                <Text style={styles.kartaPobytuDateLabel}>Выдана:</Text>
                <Text style={styles.kartaPobytuDateValue}>
                  {formatDate(kartaPobytu.issueDate)}
                </Text>
              </View>

              <View style={styles.kartaPobytuDateItem}>
                <Text style={styles.kartaPobytuDateLabel}>Действует до:</Text>
                <Text
                  style={[
                    styles.kartaPobytuDateValue,
                    { color: isExpiringSoon ? Colors.error : Colors.text },
                  ]}
                >
                  {formatDate(kartaPobytu.expiryDate)}
                </Text>
              </View>
            </View>

            {/* Предупреждение о скором истечении */}
            {isExpiringSoon && (
              <View style={styles.kartaPobytuWarning}>
                <Ionicons name="warning" size={16} color={Colors.error} />
                <Text style={styles.kartaPobytuWarningText}>
                  Осталось дней: {daysUntilExpiry}
                </Text>
              </View>
            )}

            {/* Кнопка действий */}
            <TouchableOpacity style={styles.kartaPobytuAction}>
              <Text style={styles.kartaPobytuActionText}>
                Управление картой
              </Text>
              <Ionicons
                name="chevron-forward"
                size={20}
                color={Colors.primary}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Quick Actions */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>🚀 Быстрые действия</Text>

          <TouchableOpacity
            style={styles.actionCard}
            onPress={() => setShowEditModal(true)}
          >
            <View style={styles.actionIcon}>
              <Text style={styles.actionEmoji}>✏️</Text>
            </View>
            <View style={styles.actionContent}>
              <Text style={styles.actionTitle}>Редактировать профиль</Text>
              <Text style={styles.actionDescription}>
                Изменить имя, фото и другие данные
              </Text>
            </View>
            <Ionicons
              name="chevron-forward"
              size={20}
              color={Colors.textSecondary}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionCard}>
            <View style={styles.actionIcon}>
              <Text style={styles.actionEmoji}>🔔</Text>
            </View>
            <View style={styles.actionContent}>
              <Text style={styles.actionTitle}>Уведомления</Text>
              <Text style={styles.actionDescription}>
                Настроить получение уведомлений
              </Text>
            </View>
            <Ionicons
              name="chevron-forward"
              size={20}
              color={Colors.textSecondary}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionCard}>
            <View style={styles.actionIcon}>
              <Text style={styles.actionEmoji}>🎨</Text>
            </View>
            <View style={styles.actionContent}>
              <Text style={styles.actionTitle}>Темы оформления</Text>
              <Text style={styles.actionDescription}>
                Выбрать цветовую схему
              </Text>
            </View>
            <Ionicons
              name="chevron-forward"
              size={20}
              color={Colors.textSecondary}
            />
          </TouchableOpacity>
        </View>

        {/* Settings */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>⚙️ Настройки</Text>

          <TouchableOpacity style={styles.actionCard}>
            <View style={styles.actionIcon}>
              <Text style={styles.actionEmoji}>🔒</Text>
            </View>
            <View style={styles.actionContent}>
              <Text style={styles.actionTitle}>Безопасность</Text>
              <Text style={styles.actionDescription}>Пароль и приватность</Text>
            </View>
            <Ionicons
              name="chevron-forward"
              size={20}
              color={Colors.textSecondary}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionCard}>
            <View style={styles.actionIcon}>
              <Text style={styles.actionEmoji}>💬</Text>
            </View>
            <View style={styles.actionContent}>
              <Text style={styles.actionTitle}>Поддержка</Text>
              <Text style={styles.actionDescription}>
                Помощь и обратная связь
              </Text>
            </View>
            <Ionicons
              name="chevron-forward"
              size={20}
              color={Colors.textSecondary}
            />
          </TouchableOpacity>
        </View>

        {/* Sign Out */}
        <View style={styles.section}>
          <TouchableOpacity style={styles.signOutCard} onPress={handleSignOut}>
            <View style={styles.signOutIcon}>
              <Text style={styles.signOutEmoji}>👋</Text>
            </View>
            <View style={styles.actionContent}>
              <Text style={styles.signOutTitle}>Выйти из аккаунта</Text>
              <Text style={styles.signOutDescription}>
                До свидания! Возвращайтесь скорее
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.bottomSpacing} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.background,
  },
  loadingText: {
    fontSize: 18,
    color: Colors.textSecondary,
  },
  header: {
    backgroundColor: Colors.primary,
    paddingTop: 50,
    paddingBottom: 40,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 10,
  },
  headerContent: {
    paddingHorizontal: Layout.padding,
  },
  greeting: {
    fontSize: 16,
    color: Colors.white || "#FFFFFF",
    opacity: 0.9,
    marginBottom: 20,
  },
  profileInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatarContainer: {
    position: "relative",
    marginRight: 16,
  },
  avatarTouchable: {
    position: "relative",
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: Colors.white || "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
    overflow: "hidden",
  },
  avatarImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  avatarEmoji: {
    fontSize: 32,
    color: Colors.primary,
  },
  avatarEditBadge: {
    position: "absolute",
    bottom: 2,
    right: 2,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: Colors.white || "#FFFFFF",
  },
  statusBadge: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: Colors.success || "#4CAF50",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: Colors.white || "#FFFFFF",
  },
  statusEmoji: {
    fontSize: 12,
  },
  userInfo: {
    flex: 1,
  },
  displayName: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.white || "#FFFFFF",
    marginBottom: 4,
  },
  email: {
    fontSize: 16,
    color: Colors.white || "#FFFFFF",
    opacity: 0.8,
    marginBottom: 4,
  },
  joinDate: {
    fontSize: 12,
    color: Colors.white || "#FFFFFF",
    opacity: 0.7,
  },
  scrollView: {
    flex: 1,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: Layout.padding,
    paddingVertical: 20,
    marginTop: 20,
  },
  statCard: {
    backgroundColor: Colors.white || "#FFFFFF",
    borderRadius: 16,
    padding: 20,
    alignItems: "center",
    width: (width - Layout.padding * 2 - 32) / 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
  },
  statEmoji: {
    fontSize: 24,
    marginBottom: 8,
  },
  statValue: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.primary,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: Colors.textSecondary,
    textAlign: "center",
  },
  section: {
    paddingHorizontal: Layout.padding,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.text,
    marginBottom: 16,
  },
  // Стили для Karta Pobytu
  kartaPobytuCard: {
    backgroundColor: Colors.white || "#FFFFFF",
    borderRadius: 20,
    padding: 20,
    borderWidth: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 15,
    elevation: 8,
  },
  kartaPobytuHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  kartaPobytuIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: Colors.primaryLight || "#E3F2FD",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  kartaPobytuEmoji: {
    fontSize: 24,
  },
  kartaPobytuHeaderText: {
    flex: 1,
  },
  kartaPobytuTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.text,
    marginBottom: 2,
  },
  kartaPobytuStatus: {
    fontSize: 14,
    fontWeight: "600",
  },
  kartaPobytuStatusBadge: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  kartaPobytuInfo: {
    marginBottom: 20,
  },
  kartaPobytuInfoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  kartaPobytuLabel: {
    fontSize: 14,
    color: Colors.textSecondary,
    fontWeight: "500",
  },
  kartaPobytuValue: {
    fontSize: 14,
    color: Colors.text,
    fontWeight: "600",
  },
  kartaPobytuBasis: {
    flexDirection: "row",
    alignItems: "center",
  },
  kartaPobytuBasisEmoji: {
    fontSize: 16,
    marginRight: 6,
  },
  kartaPobytuBasisText: {
    fontSize: 14,
    fontWeight: "600",
  },
  kartaPobytuDates: {
    backgroundColor: Colors.background,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  kartaPobytuDateItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  kartaPobytuDateLabel: {
    fontSize: 14,
    color: Colors.textSecondary,
  },
  kartaPobytuDateValue: {
    fontSize: 14,
    fontWeight: "600",
    color: Colors.text,
  },
  kartaPobytuWarning: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.errorLight || "#FEF2F2",
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
  kartaPobytuWarningText: {
    fontSize: 14,
    color: Colors.error,
    fontWeight: "600",
    marginLeft: 8,
  },
  kartaPobytuAction: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: Colors.border,
  },
  kartaPobytuActionText: {
    fontSize: 16,
    fontWeight: "600",
    color: Colors.primary,
  },
  // Остальные стили остаются без изменений
  actionCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.white || "#FFFFFF",
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
  },
  actionIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: Colors.primaryLight || "#E3F2FD",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  actionEmoji: {
    fontSize: 20,
  },
  actionContent: {
    flex: 1,
  },
  actionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: Colors.text,
    marginBottom: 4,
  },
  actionDescription: {
    fontSize: 14,
    color: Colors.textSecondary,
  },
  signOutCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.errorLight || "#FFEBEE",
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: Colors.error,
  },
  signOutIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: Colors.error,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  signOutEmoji: {
    fontSize: 20,
  },
  signOutTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: Colors.error,
    marginBottom: 4,
  },
  signOutDescription: {
    fontSize: 14,
    color: Colors.error,
    opacity: 0.8,
  },
  bottomSpacing: {
    height: 30,
  },
});
