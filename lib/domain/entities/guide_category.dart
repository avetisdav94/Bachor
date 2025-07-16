import 'package:equatable/equatable.dart';

class GuideCategory extends Equatable {
  final String id;
  final String title;
  final String titleEn;
  final String titleRu;
  final String subtitle;
  final String subtitleEn;
  final String subtitleRu;
  final String icon;
  final String color;
  final String bgColor;
  final String url;
  final int order;

  const GuideCategory({
    required this.id,
    required this.title,
    required this.titleEn,
    required this.titleRu,
    required this.subtitle,
    required this.subtitleEn,
    required this.subtitleRu,
    required this.icon,
    required this.color,
    required this.bgColor,
    required this.url,
    required this.order,
  });

  GuideCategory copyWith({
    String? id,
    String? title,
    String? titleEn,
    String? titleRu,
    String? subtitle,
    String? subtitleEn,
    String? subtitleRu,
    String? icon,
    String? color,
    String? bgColor,
    String? url,
    int? order,
  }) {
    return GuideCategory(
      id: id ?? this.id,
      title: title ?? this.title,
      titleEn: titleEn ?? this.titleEn,
      titleRu: titleRu ?? this.titleRu,
      subtitle: subtitle ?? this.subtitle,
      subtitleEn: subtitleEn ?? this.subtitleEn,
      subtitleRu: subtitleRu ?? this.subtitleRu,
      icon: icon ?? this.icon,
      color: color ?? this.color,
      bgColor: bgColor ?? this.bgColor,
      url: url ?? this.url,
      order: order ?? this.order,
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
        icon,
        color,
        bgColor,
        url,
        order,
      ];
}