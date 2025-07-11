export const categoryIcons: Record<string, string> = {
  money: "💰",
  friends: "👥",
  study_work: "📚",
  food_drink: "🍕",
  emotions: "😊",
  transport: "🚗",
  technology: "💻",
  health: "🏥",
  entertainment: "🎬",
  shopping: "🛍️",
};

export const getCategoryIcon = (key: string): string => {
  return categoryIcons[key] || "📝";
};
