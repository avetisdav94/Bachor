import '../entities/word.dart';
import '../entities/word_category.dart';

abstract class WordRepository {
  Future<List<Word>> getAllWords();
  Future<List<Word>> getWordsByCategory(String categoryId);
  Future<List<Word>> searchWords(String query);
  Future<Word?> getWordById(String id);
  Future<Word?> getWordOfTheDay();
  Future<List<WordCategory>> getCategories();
  Future<List<Word>> getFavoriteWords();
  Future<void> addToFavorites(String wordId);
  Future<void> removeFromFavorites(String wordId);
  Future<bool> isFavorite(String wordId);
  Future<void> incrementWordViews(String wordId);
}