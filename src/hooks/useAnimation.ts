import { useEffect, useRef } from "react";
import { Animated } from "react-native";
import { Layout } from "../constants/layout";

export const useAnimation = (duration: number = Layout.animationDuration) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim, duration]);

  return fadeAnim;
};
