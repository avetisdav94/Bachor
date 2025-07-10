import { news } from "@/data/news";
import { topWords, wordOfTheDay } from "@/data/words";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.greeting}>👋 Привет, друг!</Text>
        <View style={styles.wordOfDayCard}>
          <View style={styles.emojiCircle}>
            <Text style={styles.emoji}>🌟</Text>
          </View>
          <Text style={styles.wordOfDayLabel}>Слово дня</Text>
          <Text style={styles.wordOfDayWord}>{wordOfTheDay.word}</Text>
          <Text style={styles.wordOfDayMeaning}>{wordOfTheDay.meaning}</Text>
          <Text style={styles.wordOfDayTranslation}>
            {wordOfTheDay.translation}
          </Text>
        </View>
        <View style={[styles.section, styles.topWordsCard]}>
          <View style={styles.sectionHeader}>
            <FontAwesome5 name="fire" size={18} color="#457b9d" />
            <Text style={styles.sectionTitle}>Топ 5 слов</Text>
          </View>
          {topWords.map((item, idx) => (
            <View key={idx} style={styles.topWordRow}>
              <Text style={styles.topWord}>{item.word}</Text>
              <Text style={styles.topWordMeaning}>{item.meaning}</Text>
            </View>
          ))}
        </View>
        <View style={styles.dialectCard}>
          <Text style={styles.dialectTitle}>Выбери диалект: </Text>
          <View style={styles.dialectButtons}>
            <TouchableOpacity style={styles.dialectBtn}>
              <Text style={styles.dialectBtnText}>Gwara Warszawska</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.dialectBtn}>
              <Text style={styles.dialectBtnText}>Gwara Poznaska</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={[styles.section, styles.newsCard]}>
          <View style={styles.sectionHeader}>
            <MaterialCommunityIcons
              name="newspaper-variant-outline"
              size={20}
              color="#43aa8b"
            />
            <Text style={styles.sectionTitle}>Новости</Text>
          </View>
          {news.map((item, idx) => (
            <View key={idx} style={styles.newsRow}>
              <Text style={styles.newsTitle}>{item.title}</Text>
              <Text style={styles.newsDate}>{item.date}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f2f2f2",
  },
  container: {
    paddingTop: 36,
    backgroundColor: "#f2f2f2",
    paddingBottom: 36,
  },
  greeting: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#1d3557",
    marginLeft: 32,
    marginBottom: 12,
  },
  wordOfDayCard: {
    backgroundColor: "#fffbe6",
    borderRadius: 22,
    padding: 22,
    marginHorizontal: 24,
    marginBottom: 24,
    alignItems: "center",
    shadowColor: "#f4d35e",
    shadowOpacity: 0.18,
    shadowRadius: 16,
    elevation: 6,
    borderWidth: 1.5,
    borderColor: "#ffe066",
  },
  emojiCircle: {
    backgroundColor: "#ffe066",
    width: 54,
    height: 54,
    borderRadius: 27,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    shadowColor: "#f4d35e",
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 4,
  },
  emoji: {
    fontSize: 32,
  },
  wordOfDayLabel: {
    fontSize: 16,
    color: "#f4a259",
    fontWeight: "bold",
    marginBottom: 6,
    letterSpacing: 1,
  },
  wordOfDayWord: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#e63946",
    marginBottom: 4,
    textAlign: "center",
  },
  wordOfDayMeaning: {
    fontSize: 16,
    color: "#333",
    marginBottom: 2,
    textAlign: "center",
  },
  wordOfDayTranslation: {
    fontSize: 16,
    color: "#457b9d",
    fontStyle: "italic",
    textAlign: "center",
    marginBottom: 2,
  },
  section: {
    borderRadius: 14,
    marginHorizontal: 24,
    marginBottom: 18,
    padding: 14,
  },
  dialectCard: {
    backgroundColor: "#eaf4fb",
    borderRadius: 18,
    marginHorizontal: 24,
    marginBottom: 18,
    padding: 18,
    alignItems: "center",
    shadowColor: "#457b9d",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  dialectTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1d3557",
    marginBottom: 12,
  },
  dialectButtons: {
    flexDirection: "row",
    gap: 12,
    flexWrap: "wrap",
    justifyContent: "center",
  },
  dialectBtn: {
    backgroundColor: "#457b9d",
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 16,
    minWidth: 120,
    alignItems: "center",
  },
  dialectBtnText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
  },
  topWordsCard: {
    backgroundColor: "#fff",
    borderRadius: 18,
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 10,
    elevation: 4,
    borderWidth: 1,
    borderColor: "#eaf4fb",
    marginVertical: 8,
  },
  newsCard: {
    backgroundColor: "#fff",
    borderRadius: 18,
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 10,
    elevation: 4,
    borderWidth: 1,
    borderColor: "#eafaf1",
    marginVertical: 8,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
    gap: 8,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#457b9d",
    marginLeft: 8,
  },
  topWordRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
    borderBottomWidth: 0.5,
    borderBottomColor: "#dbeafe",
    paddingBottom: 2,
  },
  topWord: {
    fontWeight: "bold",
    color: "#e63946",
    fontSize: 16,
  },
  topWordMeaning: {
    color: "#333",
    fontSize: 15,
    marginLeft: 8,
    flex: 1,
    textAlign: "right",
  },
  newsRow: {
    marginBottom: 6,
    borderBottomWidth: 0.5,
    borderBottomColor: "#b7efc5",
    paddingBottom: 2,
  },
  newsTitle: {
    fontSize: 15,
    color: "#1d3557",
  },
  newsDate: {
    fontSize: 12,
    color: "#888",
  },
});
