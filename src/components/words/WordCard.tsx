import { useFavorites } from "@/src/context/FavoritesContext";
import { Word } from "@/src/types";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Card } from "../../components/common/Card";
import { Colors } from "../../constants/colors";
import { Fonts } from "../../constants/fonts";

interface WordCardProps {
  word: Word;
  category?: string;
  showCategory?: boolean;
}

export const WordCard: React.FC<WordCardProps> = ({
  word,
  category = "",
  showCategory = false,
}) => {
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();
  const isWordFavorite = isFavorite(word.word);

  const handleFavoriteToggle = () => {
    if (isWordFavorite) {
      removeFromFavorites(word.word);
    } else {
      addToFavorites(word, category);
    }
  };

  return (
    <Card>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <View style={{ flex: 1, marginRight: 12 }}>
          <Text
            style={{
              fontSize: Fonts.titleSmall,
              fontWeight: Fonts.weightBold,
              color: Colors.primary,
              marginBottom: 8,
            }}
          >
            {word.word}
          </Text>

          <Text
            style={{
              fontSize: Fonts.bodyMedium,
              color: Colors.text,
              marginBottom: 8,
              lineHeight: 22,
            }}
          >
            {word.meaning}
          </Text>

          {word.translation && (
            <Text
              style={{
                fontSize: Fonts.bodyMedium,
                color: Colors.textSecondary,
                fontStyle: "italic",
                marginBottom: 8,
              }}
            >
              {word.translation}
            </Text>
          )}

          {word.examples && (
            <View
              style={{
                backgroundColor: Colors.card,
                borderRadius: 8,
                padding: 12,
                marginTop: 4,
                borderLeftWidth: 3,
                borderLeftColor: Colors.primary,
              }}
            >
              <Text
                style={{
                  fontSize: Fonts.bodySmall,
                  color: Colors.textSecondary,
                  fontStyle: "italic",
                  lineHeight: 20,
                }}
              >
                "{word.examples}"
              </Text>
            </View>
          )}

          {/* Исправляем условие для показа категории */}
          {showCategory && category && category.trim() !== "" && (
            <View
              style={{
                backgroundColor: Colors.primary + "20",
                borderRadius: 8,
                paddingHorizontal: 12,
                paddingVertical: 4,
                alignSelf: "flex-start",
                marginTop: 8,
              }}
            >
              <Text
                style={{
                  fontSize: Fonts.caption,
                  color: Colors.primary,
                  fontWeight: Fonts.weightSemiBold,
                }}
              >
                {category}
              </Text>
            </View>
          )}
        </View>

        {/* Кнопка избранного */}
        <TouchableOpacity
          onPress={handleFavoriteToggle}
          style={{
            backgroundColor: isWordFavorite ? Colors.error + "20" : Colors.card,
            borderRadius: 12,
            width: 44,
            height: 44,
            justifyContent: "center",
            alignItems: "center",
            borderWidth: 1,
            borderColor: isWordFavorite ? Colors.error + "30" : Colors.border,
          }}
        >
          <Ionicons
            name={isWordFavorite ? "heart" : "heart-outline"}
            size={20}
            color={isWordFavorite ? Colors.error : Colors.textSecondary}
          />
        </TouchableOpacity>
      </View>
    </Card>
  );
};
