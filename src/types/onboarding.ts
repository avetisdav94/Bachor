export interface OnboardingSlide {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string; // emoji или иконка
  backgroundColor: string;
}
export interface AuthOption {
  id: string;
  title: string;
  icon: string;
  backgroundColor: string;
  textColor: string;
  onPress: () => void;
}
