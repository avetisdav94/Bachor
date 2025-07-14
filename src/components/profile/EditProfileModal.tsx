// src/components/profile/EditProfileModal.tsx
import { documentTypes, voivodeships } from "@/data/profile";
import { Colors } from "@/src/constants/colors";
import { Fonts } from "@/src/constants/fonts";
import { Layout } from "@/src/constants/layout";
import { useProfile } from "@/src/context/ProfileContext";
import { DocumentType } from "@/src/types/profile";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Modal,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

interface EditProfileModalProps {
  visible: boolean;
  onClose: () => void;
}

export const EditProfileModal: React.FC<EditProfileModalProps> = ({
  visible,
  onClose,
}) => {
  const { profile, updateProfile } = useProfile();
  const [nickname, setNickname] = useState(profile.nickname);
  const [selectedVoivodeship, setSelectedVoivodeship] = useState(
    profile.voivodeship
  );
  const [selectedDocumentType, setSelectedDocumentType] = useState(
    profile.documentType
  );
  const [showVoivodeshipPicker, setShowVoivodeshipPicker] = useState(false);
  const [showDocumentPicker, setShowDocumentPicker] = useState(false);

  const handleSave = () => {
    updateProfile({
      nickname,
      voivodeship: selectedVoivodeship,
      documentType: selectedDocumentType,
    });
    onClose();
  };

  const getCurrentVoivodeship = () => {
    return (
      voivodeships.find((v) => v.id === selectedVoivodeship)?.nameEn ||
      "Не выбрано"
    );
  };

  const getCurrentDocumentType = () => {
    return (
      documentTypes.find((d) => d.id === selectedDocumentType)?.name ||
      "Не выбрано"
    );
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
    >
      <View style={{ flex: 1, backgroundColor: Colors.background }}>
        {/* Header */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: Layout.padding,
            paddingTop: 60,
            paddingBottom: 20,
            borderBottomWidth: 1,
            borderBottomColor: Colors.border,
          }}
        >
          <TouchableOpacity onPress={onClose}>
            <Text style={{ fontSize: Fonts.bodyLarge, color: Colors.primary }}>
              Отмена
            </Text>
          </TouchableOpacity>
          <Text
            style={{
              fontSize: Fonts.titleMedium,
              fontWeight: Fonts.weightBold,
              color: Colors.text,
            }}
          >
            Редактировать профиль
          </Text>
          <TouchableOpacity onPress={handleSave}>
            <Text
              style={{
                fontSize: Fonts.bodyLarge,
                color: Colors.primary,
                fontWeight: Fonts.weightSemiBold,
              }}
            >
              Сохранить
            </Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{ padding: Layout.padding }}
        >
          {/* Никнейм */}
          <View style={{ marginBottom: 24 }}>
            <Text
              style={{
                fontSize: Fonts.bodyMedium,
                fontWeight: Fonts.weightSemiBold,
                color: Colors.text,
                marginBottom: 8,
              }}
            >
              Никнейм
            </Text>
            <TextInput
              value={nickname}
              onChangeText={setNickname}
              style={{
                backgroundColor: Colors.card,
                borderRadius: 12,
                paddingHorizontal: 16,
                paddingVertical: 12,
                fontSize: Fonts.bodyMedium,
                color: Colors.text,
                borderWidth: 1,
                borderColor: Colors.border,
              }}
              placeholder="Введите никнейм"
              placeholderTextColor={Colors.textSecondary}
            />
          </View>

          {/* Воеводство */}
          <View style={{ marginBottom: 24 }}>
            <Text
              style={{
                fontSize: Fonts.bodyMedium,
                fontWeight: Fonts.weightSemiBold,
                color: Colors.text,
                marginBottom: 8,
              }}
            >
              Воеводство
            </Text>
            <TouchableOpacity
              onPress={() => setShowVoivodeshipPicker(!showVoivodeshipPicker)}
              style={{
                backgroundColor: Colors.card,
                borderRadius: 12,
                paddingHorizontal: 16,
                paddingVertical: 12,
                borderWidth: 1,
                borderColor: Colors.border,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ fontSize: Fonts.bodyMedium, color: Colors.text }}>
                {getCurrentVoivodeship()}
              </Text>
              <Ionicons
                name={showVoivodeshipPicker ? "chevron-up" : "chevron-down"}
                size={20}
                color={Colors.textSecondary}
              />
            </TouchableOpacity>

            {showVoivodeshipPicker && (
              <View
                style={{
                  backgroundColor: Colors.card,
                  borderRadius: 12,
                  marginTop: 8,
                  maxHeight: 200,
                  borderWidth: 1,
                  borderColor: Colors.border,
                }}
              >
                <ScrollView>
                  {voivodeships.map((voivodeship) => (
                    <TouchableOpacity
                      key={voivodeship.id}
                      onPress={() => {
                        setSelectedVoivodeship(voivodeship.id);
                        setShowVoivodeshipPicker(false);
                      }}
                      style={{
                        paddingHorizontal: 16,
                        paddingVertical: 12,
                        borderBottomWidth: 1,
                        borderBottomColor: Colors.border,
                        backgroundColor:
                          selectedVoivodeship === voivodeship.id
                            ? Colors.primary + "20"
                            : "transparent",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: Fonts.bodyMedium,
                          color: Colors.text,
                        }}
                      >
                        {voivodeship.nameEn}
                      </Text>
                      <Text
                        style={{
                          fontSize: Fonts.bodySmall,
                          color: Colors.textSecondary,
                        }}
                      >
                        {voivodeship.name}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              </View>
            )}
          </View>

          {/* Тип документа */}
          <View style={{ marginBottom: 24 }}>
            <Text
              style={{
                fontSize: Fonts.bodyMedium,
                fontWeight: Fonts.weightSemiBold,
                color: Colors.text,
                marginBottom: 8,
              }}
            >
              Тип документа
            </Text>
            <TouchableOpacity
              onPress={() => setShowDocumentPicker(!showDocumentPicker)}
              style={{
                backgroundColor: Colors.card,
                borderRadius: 12,
                paddingHorizontal: 16,
                paddingVertical: 12,
                borderWidth: 1,
                borderColor: Colors.border,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ fontSize: Fonts.bodyMedium, color: Colors.text }}>
                {getCurrentDocumentType()}
              </Text>
              <Ionicons
                name={showDocumentPicker ? "chevron-up" : "chevron-down"}
                size={20}
                color={Colors.textSecondary}
              />
            </TouchableOpacity>

            {showDocumentPicker && (
              <View
                style={{
                  backgroundColor: Colors.card,
                  borderRadius: 12,
                  marginTop: 8,
                  maxHeight: 300,
                  borderWidth: 1,
                  borderColor: Colors.border,
                }}
              >
                <ScrollView>
                  {documentTypes.map((docType) => (
                    <TouchableOpacity
                      key={docType.id}
                      onPress={() => {
                        setSelectedDocumentType(docType.id as DocumentType);
                        setShowDocumentPicker(false);
                      }}
                      style={{
                        paddingHorizontal: 16,
                        paddingVertical: 12,
                        borderBottomWidth: 1,
                        borderBottomColor: Colors.border,
                        backgroundColor:
                          selectedDocumentType === docType.id
                            ? Colors.primary + "20"
                            : "transparent",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <Text style={{ fontSize: 20, marginRight: 12 }}>
                        {docType.icon}
                      </Text>
                      <View style={{ flex: 1 }}>
                        <Text
                          style={{
                            fontSize: Fonts.bodyMedium,
                            color: Colors.text,
                          }}
                        >
                          {docType.name}
                        </Text>
                        <Text
                          style={{
                            fontSize: Fonts.bodySmall,
                            color: Colors.textSecondary,
                          }}
                        >
                          {docType.description}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              </View>
            )}
          </View>
        </ScrollView>
      </View>
    </Modal>
  );
};
