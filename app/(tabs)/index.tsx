import { news } from "@/data/news";
import { topWords, wordOfTheDay } from "@/data/words";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.wordCard}>
          <Text style={styles.title}>Слово дня</Text>
          <Text style={styles.word}>{wordOfTheDay.word}</Text>
          <Text style={styles.meaning}>{wordOfTheDay.meaning}</Text>
          <Text style={styles.translation}>{wordOfTheDay.translation}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Топ 5 слов</Text>
          {topWords.map((item, idx) => (
            <View key={idx} style={styles.topWordRow}>
              <Text style={styles.topWord}>{item.word}</Text>
              <Text style={styles.topWordMeaning}>{item.meaning}</Text>
            </View>
          ))}
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Новости</Text>
          {news.map((item, idx) => (
            <View key={idx} style={styles.newsRow}>
              <Text style={styles.newsTitle}>{item.title}</Text>
              <Text style={styles.newsDate}>{item.date}</Text>
            </View>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f2f2f2",
  },
  container: {
    flex: 1,
    paddingTop: 48,
    backgroundColor: "#f2f2f2",
  },
  wordCard: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 2,
    alignItems: "center",
    marginHorizontal: 24,
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#457b9d",
    marginBottom: 4,
  },
  word: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#e63946",
    marginBottom: 4,
  },
  meaning: {
    fontSize: 15,
    color: "#333",
    marginBottom: 2,
    textAlign: "center",
  },
  translation: {
    fontSize: 15,
    color: "#1d3557",
    fontStyle: "italic",
    textAlign: "center",
  },
  section: {
    backgroundColor: "#fff",
    borderRadius: 12,
    marginHorizontal: 24,
    marginBottom: 16,
    padding: 12,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#457b9d",
    marginBottom: 8,
  },
  topWordRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
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
