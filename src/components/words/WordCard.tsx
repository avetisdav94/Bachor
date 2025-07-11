import React from "react";
import { Text } from "react-native";
import { Card } from "../../components/common/Card";
import { Colors } from "../../constants/colors";
import { Fonts } from "../../constants/fonts";
import { Word } from "../../types/words";

interface WordCardProps {
  word: Word;
}

export const WordCard: React.FC<WordCardProps> = ({ word }) => {
  return (
    <Card style={{ marginBottom: 16 }}>
      <Text
        style={{
          fontSize: Fonts.titleSmall,
          fontWeight: Fonts.weightSemiBold,
          color: Colors.text,
          marginBottom: 8,
        }}
      >
        {word.word}
      </Text>
      <Text
        style={{
          fontSize: Fonts.bodyLarge,
          color: Colors.textSecondary,
          marginBottom: 4,
        }}
      >
        {word.meaning}
      </Text>
      {word.translation && (
        <Text
          style={{
            fontSize: Fonts.bodyMedium,
            color: Colors.primary,
            fontStyle: "italic",
          }}
        >
          {word.translation}
        </Text>
      )}
    </Card>
  );
};
