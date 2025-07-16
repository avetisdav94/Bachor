import 'package:equatable/equatable.dart';

class EmergencyContact extends Equatable {
  final String id;
  final String title;
  final String titleEn;
  final String titleRu;
  final String subtitle;
  final String subtitleEn;
  final String subtitleRu;
  final String number;
  final String color;
  final String icon;
  final bool isActive;

  const EmergencyContact({
    required this.id,
    required this.title,
    required this.titleEn,
    required this.titleRu,
    required this.subtitle,
    required this.subtitleEn,
    required this.subtitleRu,
    required this.number,
    required this.color,
    required this.icon,
    this.isActive = true,
  });

  EmergencyContact copyWith({
    String? id,
    String? title,
    String? titleEn,
    String? titleRu,
    String? subtitle,
    String? subtitleEn,
    String? subtitleRu,
    String? number,
    String? color,
    String? icon,
    bool? isActive,
  }) {
    return EmergencyContact(
      id: id ?? this.id,
      title: title ?? this.title,
      titleEn: titleEn ?? this.titleEn,
      titleRu: titleRu ?? this.titleRu,
      subtitle: subtitle ?? this.subtitle,
      subtitleEn: subtitleEn ?? this.subtitleEn,
      subtitleRu: subtitleRu ?? this.subtitleRu,
      number: number ?? this.number,
      color: color ?? this.color,
      icon: icon ?? this.icon,
      isActive: isActive ?? this.isActive,
    );
  }

  @override
  List<Object?> get props => [
        id,
        title,
        titleEn,
        titleRu,
        subtitle,
        subtitleEn,
        subtitleRu,
        number,
        color,
        icon,
        isActive,
      ];
}