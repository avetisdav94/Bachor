import 'package:equatable/equatable.dart';

class WordCategory extends Equatable {
  final String id;
  final String title;
  final String titleEn;
  final String titleRu;
  final String color;
  final String icon;
  final int wordsCount;

  const WordCategory({
    required this.id,
    required this.title,
    required this.titleEn,
    required this.titleRu,
    required this.color,
    required this.icon,
    required this.wordsCount,
  });

  WordCategory copyWith({
    String? id,
    String? title,
    String? titleEn,
    String? titleRu,
    String? color,
    String? icon,
    int? wordsCount,
  }) {
    return WordCategory(
      id: id ?? this.id,
      title: title ?? this.title,
      titleEn: titleEn ?? this.titleEn,
      titleRu: titleRu ?? this.titleRu,
      color: color ?? this.color,
      icon: icon ?? this.icon,
      wordsCount: wordsCount ?? this.wordsCount,
    );
  }

  @override
  List<Object?> get props => [
        id,
        title,
        titleEn,
        titleRu,
        color,
        icon,
        wordsCount,
      ];
}