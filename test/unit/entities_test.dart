import 'package:flutter_test/flutter_test.dart';
import 'package:bachor/domain/entities/word.dart';
import 'package:bachor/domain/entities/word_category.dart';
import 'package:bachor/domain/entities/user_profile.dart';

void main() {
  group('Word Entity', () {
    test('should create a word with required fields', () {
      // Arrange
      final word = Word(
        id: '1',
        word: 'Spoko',
        meaning: 'Cool, okay, fine',
        examples: ['Example 1', 'Example 2'],
        detailedExamples: ['Detailed example 1'],
        category: 'common',
        createdAt: DateTime.now(),
      );

      // Assert
      expect(word.id, '1');
      expect(word.word, 'Spoko');
      expect(word.meaning, 'Cool, okay, fine');
      expect(word.examples.length, 2);
      expect(word.isFavorite, false);
    });

    test('should create a copy with updated fields', () {
      // Arrange
      final word = Word(
        id: '1',
        word: 'Spoko',
        meaning: 'Cool, okay, fine',
        examples: ['Example 1'],
        detailedExamples: ['Detailed example 1'],
        category: 'common',
        createdAt: DateTime.now(),
      );

      // Act
      final updatedWord = word.copyWith(isFavorite: true);

      // Assert
      expect(updatedWord.id, word.id);
      expect(updatedWord.word, word.word);
      expect(updatedWord.isFavorite, true);
    });

    test('should be equal when all properties are the same', () {
      // Arrange
      final now = DateTime.now();
      final word1 = Word(
        id: '1',
        word: 'Spoko',
        meaning: 'Cool, okay, fine',
        examples: ['Example 1'],
        detailedExamples: ['Detailed example 1'],
        category: 'common',
        createdAt: now,
      );

      final word2 = Word(
        id: '1',
        word: 'Spoko',
        meaning: 'Cool, okay, fine',
        examples: ['Example 1'],
        detailedExamples: ['Detailed example 1'],
        category: 'common',
        createdAt: now,
      );

      // Assert
      expect(word1, equals(word2));
    });
  });

  group('WordCategory Entity', () {
    test('should create a word category with required fields', () {
      // Arrange
      final category = WordCategory(
        id: 'common',
        title: 'Common Expressions',
        titleEn: 'Common Expressions',
        titleRu: 'Общие выражения',
        color: '#FF5722',
        icon: 'chat',
        wordsCount: 25,
      );

      // Assert
      expect(category.id, 'common');
      expect(category.title, 'Common Expressions');
      expect(category.wordsCount, 25);
    });
  });

  group('UserProfile Entity', () {
    test('should create a user profile with required fields', () {
      // Arrange
      final profile = UserProfile(
        id: '1',
        nickname: 'TestUser',
        email: 'test@example.com',
        voivodeship: 'Mazowieckie',
        documentType: DocumentType.workPermit,
        registrationDate: DateTime.now(),
        wordsViewed: 10,
        favoriteWordsCount: 5,
      );

      // Assert
      expect(profile.id, '1');
      expect(profile.nickname, 'TestUser');
      expect(profile.email, 'test@example.com');
      expect(profile.documentType, DocumentType.workPermit);
      expect(profile.isAnonymous, false);
    });

    test('should create an anonymous user profile', () {
      // Arrange
      final profile = UserProfile(
        id: '1',
        nickname: 'Anonymous',
        email: '',
        voivodeship: '',
        documentType: DocumentType.none,
        registrationDate: DateTime.now(),
        wordsViewed: 0,
        favoriteWordsCount: 0,
        isAnonymous: true,
      );

      // Assert
      expect(profile.nickname, 'Anonymous');
      expect(profile.isAnonymous, true);
      expect(profile.email, '');
    });
  });
}