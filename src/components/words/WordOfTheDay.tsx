import { Fonts } from "@/src/constants/fonts";
import React from "react";
import { Text, View } from "react-native";
import { Card } from "../../components/common/Card";
import { Colors } from "../../constants/colors";
import { WordOfTheDay } from "../../types";

interface WordOfTheDayProps {
  word: WordOfTheDay;
}

export const WordOfTheDayCard: React.FC<WordOfTheDayProps> = ({ word }) => {
  return (
    <Card>
      <View style={{ alignItems: "center", marginBottom: 16 }}>
        <View
          style={{
            backgroundColor: "#fef3c7",
            borderRadius: 20,
            width: 60,
            height: 60,
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 12,
          }}
        >
          <Text style={{ fontSize: 28 }}>🌟</Text>
        </View>
        <Text
          style={{
            fontSize: Fonts.bodyLarge,
            color: Colors.warning,
            fontWeight: Fonts.weightSemiBold,
          }}
        >
          Слово дня
        </Text>
      </View>
      <Text
        style={{
          fontSize: 24,
          fontWeight: Fonts.weightBold,
          color: Colors.text,
          textAlign: "center",
          marginBottom: 8,
        }}
      >
        {word.word}
      </Text>
      <Text
        style={{
          fontSize: Fonts.bodyLarge,
          color: Colors.textSecondary,
          textAlign: "center",
          marginBottom: 4,
        }}
      >
        {word.meaning}
      </Text>
      <Text
        style={{
          fontSize: Fonts.bodyMedium,
          color: Colors.primary,
          textAlign: "center",
          fontStyle: "italic",
        }}
      >
        {word.translation}
      </Text>
    </Card>
  );
};
