import { Colors } from "@/src/constants/colors";
import { Fonts } from "@/src/constants/fonts";
import { Layout } from "@/src/constants/layout";
import { OnboardingSlide as OnboardingSlideType } from "@/src/types/onboarding";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Dimensions, Text, View } from "react-native";

interface OnboardingSlideProps {
  slide: OnboardingSlideType;
}

const { width, height } = Dimensions.get("window");

export const OnboardingSlide: React.FC<OnboardingSlideProps> = ({ slide }) => {
  return (
    <LinearGradient
      colors={[slide.backgroundColor, slide.backgroundColor + "80"]}
      style={{
        width,
        height, // Используем полную высоту экрана
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: Layout.padding * 2,
        paddingTop: 80, // Отступ сверху для skip кнопки
        paddingBottom: 180, // Отступ снизу для нижней панели
      }}
    >
      {/* Image/Icon */}
      <View
        style={{
          width: 140, // Увеличиваем размер
          height: 140,
          borderRadius: 70,
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 50,
          shadowColor: "#000",
          shadowOpacity: 0.1,
          shadowRadius: 20,
          shadowOffset: { width: 0, height: 10 },
          elevation: 10,
        }}
      >
        <Text style={{ fontSize: 70 }}>{slide.image}</Text>
      </View>

      {/* Title */}
      <Text
        style={{
          fontSize: Fonts.titleLarge + 4, // Увеличиваем размер
          fontWeight: Fonts.weightBold,
          color: Colors.background,
          textAlign: "center",
          marginBottom: 20,
          textShadowColor: "rgba(0, 0, 0, 0.3)",
          textShadowOffset: { width: 0, height: 2 },
          textShadowRadius: 4,
        }}
      >
        {slide.title}
      </Text>

      {/* Subtitle */}
      <Text
        style={{
          fontSize: Fonts.titleMedium + 2, // Увеличиваем размер
          fontWeight: Fonts.weightSemiBold,
          color: "rgba(255, 255, 255, 0.95)",
          textAlign: "center",
          marginBottom: 30,
          textShadowColor: "rgba(0, 0, 0, 0.2)",
          textShadowOffset: { width: 0, height: 1 },
          textShadowRadius: 2,
        }}
      >
        {slide.subtitle}
      </Text>

      {/* Description */}
      <Text
        style={{
          fontSize: Fonts.bodyLarge + 2, // Увеличиваем размер
          color: "rgba(255, 255, 255, 0.85)",
          textAlign: "center",
          lineHeight: 28,
          maxWidth: width * 0.85,
          textShadowColor: "rgba(0, 0, 0, 0.2)",
          textShadowOffset: { width: 0, height: 1 },
          textShadowRadius: 2,
        }}
      >
        {slide.description}
      </Text>
    </LinearGradient>
  );
};
