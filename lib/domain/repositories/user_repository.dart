import '../entities/user_profile.dart';

abstract class UserRepository {
  Future<UserProfile?> getCurrentUser();
  Future<UserProfile> createUser(UserProfile user);
  Future<UserProfile> updateUser(UserProfile user);
  Future<void> deleteUser(String userId);
  Future<bool> isUserLoggedIn();
  Future<void> logout();
  Future<UserProfile?> signInWithEmail(String email, String password);
  Future<UserProfile?> signUpWithEmail(String email, String password, String nickname);
  Future<void> signInAnonymously();
  Future<void> updateUserStats(String userId, {int? wordsViewed, int? favoriteWordsCount});
}