// src/components/common/SearchBar.tsx
import { Colors } from "@/src/constants/colors";
import { Fonts } from "@/src/constants/fonts";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
interface SearchBarProps {
  placeholder?: string;
  onSearch: (query: string) => void;
  onClear?: () => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = "Поиск...",
  onSearch,
  onClear,
}) => {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleSearch = (text: string) => {
    setQuery(text);
    onSearch(text);
  };

  const handleClear = () => {
    setQuery("");
    onSearch("");
    onClear?.();
  };

  return (
    <View
      style={{
        backgroundColor: Colors.card,
        borderRadius: 16,
        paddingHorizontal: 16,
        paddingVertical: 12,
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: isFocused ? Colors.primary : Colors.border,
        marginBottom: 16,
      }}
    >
      <Ionicons
        name="search"
        size={20}
        color={isFocused ? Colors.primary : Colors.textSecondary}
        style={{ marginRight: 12 }}
      />

      <TextInput
        style={{
          flex: 1,
          fontSize: Fonts.bodyMedium,
          color: Colors.text,
          padding: 0,
        }}
        placeholder={placeholder}
        placeholderTextColor={Colors.textSecondary}
        value={query}
        onChangeText={handleSearch}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        autoCorrect={false}
        autoCapitalize="none"
      />

      {query.length > 0 && (
        <TouchableOpacity
          onPress={handleClear}
          style={{
            backgroundColor: Colors.textSecondary + "20",
            borderRadius: 12,
            width: 24,
            height: 24,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Ionicons name="close" size={14} color={Colors.textSecondary} />
        </TouchableOpacity>
      )}
    </View>
  );
};
