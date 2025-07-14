export interface UserProfile {
  nickname: string;
  voivodeship: string;
  documentType: DocumentType;
  registrationDate: string;
  wordsViewed: number;
  favoriteWords: number;
}

export type DocumentType =
  | "none"
  | "tourist_visa"
  | "work_visa"
  | "student_visa"
  | "work_permit"
  | "residence_card"
  | "permanent_residence"
  | "eu_citizen";

export interface Voivodeship {
  id: string;
  name: string;
  nameEn: string;
}

export interface DocumentTypeInfo {
  id: DocumentType;
  name: string;
  description: string;
  icon: string;
}
