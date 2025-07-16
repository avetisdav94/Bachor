import 'package:equatable/equatable.dart';

class Word extends Equatable {
  final String id;
  final String word;
  final String meaning;
  final String? translation;
  final String? pronunciation;
  final List<String> examples;
  final List<String> detailedExamples;
  final String category;
  final DateTime createdAt;
  final bool isFavorite;

  const Word({
    required this.id,
    required this.word,
    required this.meaning,
    this.translation,
    this.pronunciation,
    required this.examples,
    required this.detailedExamples,
    required this.category,
    required this.createdAt,
    this.isFavorite = false,
  });

  Word copyWith({
    String? id,
    String? word,
    String? meaning,
    String? translation,
    String? pronunciation,
    List<String>? examples,
    List<String>? detailedExamples,
    String? category,
    DateTime? createdAt,
    bool? isFavorite,
  }) {
    return Word(
      id: id ?? this.id,
      word: word ?? this.word,
      meaning: meaning ?? this.meaning,
      translation: translation ?? this.translation,
      pronunciation: pronunciation ?? this.pronunciation,
      examples: examples ?? this.examples,
      detailedExamples: detailedExamples ?? this.detailedExamples,
      category: category ?? this.category,
      createdAt: createdAt ?? this.createdAt,
      isFavorite: isFavorite ?? this.isFavorite,
    );
  }

  @override
  List<Object?> get props => [
        id,
        word,
        meaning,
        translation,
        pronunciation,
        examples,
        detailedExamples,
        category,
        createdAt,
        isFavorite,
      ];
}