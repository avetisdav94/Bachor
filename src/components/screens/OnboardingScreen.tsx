import { onboardingSlides } from "@/data/onboarding";
import { AuthOptions } from "@/src/components/onboarding/AuthOptions";
import { OnboardingSlide } from "@/src/components/onboarding/OnboardingSlide";
import { Colors } from "@/src/constants/colors";
import { Fonts } from "@/src/constants/fonts";
import { Layout } from "@/src/constants/layout";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useRef, useState } from "react";
import {
  Dimensions,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { width } = Dimensions.get("window");

export const OnboardingScreen: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollViewRef = useRef<ScrollView>(null);
  const router = useRouter();

  const handleNext = () => {
    if (currentIndex < onboardingSlides.length - 1) {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      scrollViewRef.current?.scrollTo({ x: nextIndex * width, animated: true });
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      const prevIndex = currentIndex - 1;
      setCurrentIndex(prevIndex);
      scrollViewRef.current?.scrollTo({ x: prevIndex * width, animated: true });
    }
  };

  const handleSkip = () => {
    router.replace("/(tabs)");
  };

  const handleScroll = (event: any) => {
    const x = event.nativeEvent.contentOffset.x;
    const index = Math.round(x / width);
    setCurrentIndex(index);
  };

  const isLastSlide = currentIndex === onboardingSlides.length - 1;

  return (
    <View style={{ flex: 1 }}>
      {/* Скрываем status bar для полного экрана */}
      <StatusBar hidden />

      {/* Skip Button */}
      <TouchableOpacity
        onPress={handleSkip}
        style={{
          position: "absolute",
          top: 50, // Увеличиваем отступ сверху
          right: Layout.padding,
          zIndex: 10,
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          borderRadius: 20,
          paddingHorizontal: 16,
          paddingVertical: 8,
        }}
      >
        <Text
          style={{
            fontSize: Fonts.bodyMedium,
            color: Colors.background,
            fontWeight: Fonts.weightSemiBold,
          }}
        >
          Пропустить
        </Text>
      </TouchableOpacity>

      {/* Slides */}
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        style={{ flex: 1 }}
      >
        {onboardingSlides.map((slide) => (
          <OnboardingSlide key={slide.id} slide={slide} />
        ))}
      </ScrollView>

      {/* Bottom Container */}
      <View
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: isLastSlide ? 400 : 120,
        }}
      >
        {isLastSlide ? (
          <AuthOptions />
        ) : (
          <View
            style={{
              backgroundColor: Colors.background,
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
              paddingHorizontal: Layout.padding * 2,
              paddingTop: 30,
              paddingBottom: 40,
              shadowColor: "#000",
              shadowOpacity: 0.1,
              shadowRadius: 10,
              shadowOffset: { width: 0, height: -5 },
              elevation: 10,
            }}
          >
            {/* Page Indicators */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: 24,
              }}
            >
              {onboardingSlides.map((_, index) => (
                <View
                  key={index}
                  style={{
                    width: index === currentIndex ? 24 : 8,
                    height: 8,
                    borderRadius: 4,
                    backgroundColor:
                      index === currentIndex ? Colors.primary : Colors.border,
                    marginHorizontal: 4,
                  }}
                />
              ))}
            </View>

            {/* Navigation Buttons */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                onPress={handlePrevious}
                disabled={currentIndex === 0}
                style={{
                  backgroundColor:
                    currentIndex === 0 ? Colors.card : Colors.primary,
                  borderRadius: 12,
                  width: 48,
                  height: 48,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Ionicons
                  name="arrow-back"
                  size={24}
                  color={
                    currentIndex === 0
                      ? Colors.textSecondary
                      : Colors.background
                  }
                />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={handleNext}
                style={{
                  backgroundColor: Colors.primary,
                  borderRadius: 12,
                  width: 48,
                  height: 48,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Ionicons
                  name="arrow-forward"
                  size={24}
                  color={Colors.background}
                />
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    </View>
  );
};
