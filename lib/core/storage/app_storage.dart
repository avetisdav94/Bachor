import 'package:hive/hive.dart';
import 'package:shared_preferences/shared_preferences.dart';

class AppStorage {
  static late Box _generalBox;
  static late Box _favoritesBox;
  static late Box _userBox;
  static late SharedPreferences _prefs;

  static Future<void> init() async {
    _generalBox = await Hive.openBox('general');
    _favoritesBox = await Hive.openBox('favorites');
    _userBox = await Hive.openBox('user');
    _prefs = await SharedPreferences.getInstance();
  }

  // General storage
  static Future<void> saveData(String key, dynamic value) async {
    await _generalBox.put(key, value);
  }

  static T? getData<T>(String key) {
    return _generalBox.get(key);
  }

  static Future<void> removeData(String key) async {
    await _generalBox.delete(key);
  }

  // Favorites storage
  static Future<void> addToFavorites(String wordId) async {
    await _favoritesBox.put(wordId, true);
  }

  static Future<void> removeFromFavorites(String wordId) async {
    await _favoritesBox.delete(wordId);
  }

  static bool isFavorite(String wordId) {
    return _favoritesBox.containsKey(wordId);
  }

  static List<String> getFavorites() {
    return _favoritesBox.keys.cast<String>().toList();
  }

  // User storage
  static Future<void> saveUser(Map<String, dynamic> userData) async {
    await _userBox.put('user', userData);
  }

  static Map<String, dynamic>? getUser() {
    return _userBox.get('user');
  }

  static Future<void> removeUser() async {
    await _userBox.delete('user');
  }

  // Preferences
  static Future<void> setBool(String key, bool value) async {
    await _prefs.setBool(key, value);
  }

  static bool getBool(String key, {bool defaultValue = false}) {
    return _prefs.getBool(key) ?? defaultValue;
  }

  static Future<void> setString(String key, String value) async {
    await _prefs.setString(key, value);
  }

  static String getString(String key, {String defaultValue = ''}) {
    return _prefs.getString(key) ?? defaultValue;
  }

  static Future<void> setInt(String key, int value) async {
    await _prefs.setInt(key, value);
  }

  static int getInt(String key, {int defaultValue = 0}) {
    return _prefs.getInt(key) ?? defaultValue;
  }

  static Future<void> remove(String key) async {
    await _prefs.remove(key);
  }

  static Future<void> clear() async {
    await _generalBox.clear();
    await _favoritesBox.clear();
    await _userBox.clear();
    await _prefs.clear();
  }
}