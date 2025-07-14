import { useRef } from "react";
import { Animated } from "react-native";

export const useAnimation = (initialValue: number = 0) => {
  const animatedValue = useRef(new Animated.Value(initialValue)).current;

  const animate = (toValue: number, duration: number = 300) => {
    return Animated.timing(animatedValue, {
      toValue,
      duration,
      useNativeDriver: true,
    });
  };

  const start = (toValue: number, duration?: number) => {
    animate(toValue, duration).start();
  };

  // Возвращаем сам Animated.Value, а не объект
  return animatedValue;
};
