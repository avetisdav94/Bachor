// src/components/screens/NewsDetailScreen.tsx
import { news } from "@/data/news";
import { Fonts } from "@/src/constants/fonts";
import { Layout } from "@/src/constants/layout";
import { useAnimation } from "@/src/hooks/useAnimation";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import {
  Animated,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../../constants/colors";

export const NewsDetailScreen: React.FC = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const fadeAnim = useAnimation();

  const newsItem = news.find((item) => item.id === id);

  if (!newsItem) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: Colors.background }}>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={{ fontSize: Fonts.titleMedium, color: Colors.text }}>
            Новость не найдена
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  const formatContent = (content: string) => {
    // Простой парсер для базового markdown
    return content.split("\n").map((line, index) => {
      if (line.startsWith("# ")) {
        return (
          <Text
            key={index}
            style={{
              fontSize: Fonts.titleMedium,
              fontWeight: Fonts.weightBold,
              color: Colors.text,
              marginBottom: 16,
              marginTop: index > 0 ? 24 : 0,
            }}
          >
            {line.replace("# ", "")}
          </Text>
        );
      } else if (line.startsWith("## ")) {
        return (
          <Text
            key={index}
            style={{
              fontSize: Fonts.titleSmall,
              fontWeight: Fonts.weightSemiBold,
              color: Colors.text,
              marginBottom: 12,
              marginTop: 20,
            }}
          >
            {line.replace("## ", "")}
          </Text>
        );
      } else if (line.startsWith("### ")) {
        return (
          <Text
            key={index}
            style={{
              fontSize: Fonts.bodyLarge,
              fontWeight: Fonts.weightSemiBold,
              color: Colors.primary,
              marginBottom: 8,
              marginTop: 16,
            }}
          >
            {line.replace("### ", "")}
          </Text>
        );
      } else if (line.startsWith("**") && line.endsWith("**")) {
        return (
          <Text
            key={index}
            style={{
              fontSize: Fonts.bodyLarge,
              fontWeight: Fonts.weightSemiBold,
              color: Colors.text,
              marginBottom: 8,
            }}
          >
            {line.replace(/\*\*/g, "")}
          </Text>
        );
      } else if (line.startsWith("- ")) {
        return (
          <Text
            key={index}
            style={{
              fontSize: Fonts.bodyMedium,
              color: Colors.textSecondary,
              marginBottom: 4,
              marginLeft: 16,
            }}
          >
            • {line.replace("- ", "")}
          </Text>
        );
      } else if (line.trim()) {
        return (
          <Text
            key={index}
            style={{
              fontSize: Fonts.bodyMedium,
              color: Colors.textSecondary,
              lineHeight: 24,
              marginBottom: 12,
            }}
          >
            {line}
          </Text>
        );
      }
      return null;
    });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.background }}>
      <Animated.View style={{ flex: 1, opacity: fadeAnim }}>
        {/* Custom Header */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: Layout.padding,
            paddingTop: 16,
            paddingBottom: 16,
            backgroundColor: Colors.background,
            borderBottomWidth: 1,
            borderBottomColor: Colors.border,
          }}
        >
          <TouchableOpacity
            onPress={() => router.back()}
            style={{
              backgroundColor: Colors.card,
              borderRadius: 12,
              width: 40,
              height: 40,
              justifyContent: "center",
              alignItems: "center",
              marginRight: 16,
            }}
          >
            <Ionicons name="arrow-back" size={20} color={Colors.text} />
          </TouchableOpacity>

          <View style={{ flex: 1 }}>
            <Text
              style={{
                fontSize: Fonts.titleSmall,
                fontWeight: Fonts.weightSemiBold,
                color: Colors.text,
              }}
            >
              Новости
            </Text>
            <Text
              style={{
                fontSize: Fonts.bodySmall,
                color: Colors.textSecondary,
              }}
            >
              {newsItem.category}
            </Text>
          </View>
        </View>

        {/* Content */}
        <ScrollView
          contentContainerStyle={{
            paddingHorizontal: Layout.padding,
            paddingVertical: Layout.padding,
          }}
          showsVerticalScrollIndicator={false}
        >
          {/* Article Info */}
          <View style={{ marginBottom: 20 }}>
            <Text
              style={{
                fontSize: Fonts.bodySmall,
                color: Colors.textSecondary,
                marginBottom: 8,
              }}
            >
              {newsItem.date} • {newsItem.author}
            </Text>
            <View
              style={{
                backgroundColor: Colors.primary + "20",
                borderRadius: 8,
                paddingHorizontal: 12,
                paddingVertical: 4,
                alignSelf: "flex-start",
              }}
            >
              <Text
                style={{
                  fontSize: Fonts.caption,
                  color: Colors.primary,
                  fontWeight: Fonts.weightSemiBold,
                }}
              >
                {newsItem.category}
              </Text>
            </View>
          </View>

          {/* Article Content */}
          <View>{formatContent(newsItem.content)}</View>
        </ScrollView>
      </Animated.View>
    </SafeAreaView>
  );
};
