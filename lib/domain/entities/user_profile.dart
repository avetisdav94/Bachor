import 'package:equatable/equatable.dart';

enum DocumentType {
  none,
  touristVisa,
  workVisa,
  studentVisa,
  workPermit,
  residenceCard,
  permanentResidence,
  euCitizen,
}

class UserProfile extends Equatable {
  final String id;
  final String nickname;
  final String email;
  final String voivodeship;
  final DocumentType documentType;
  final DateTime registrationDate;
  final int wordsViewed;
  final int favoriteWordsCount;
  final String? avatarUrl;
  final bool isAnonymous;

  const UserProfile({
    required this.id,
    required this.nickname,
    required this.email,
    required this.voivodeship,
    required this.documentType,
    required this.registrationDate,
    required this.wordsViewed,
    required this.favoriteWordsCount,
    this.avatarUrl,
    this.isAnonymous = false,
  });

  UserProfile copyWith({
    String? id,
    String? nickname,
    String? email,
    String? voivodeship,
    DocumentType? documentType,
    DateTime? registrationDate,
    int? wordsViewed,
    int? favoriteWordsCount,
    String? avatarUrl,
    bool? isAnonymous,
  }) {
    return UserProfile(
      id: id ?? this.id,
      nickname: nickname ?? this.nickname,
      email: email ?? this.email,
      voivodeship: voivodeship ?? this.voivodeship,
      documentType: documentType ?? this.documentType,
      registrationDate: registrationDate ?? this.registrationDate,
      wordsViewed: wordsViewed ?? this.wordsViewed,
      favoriteWordsCount: favoriteWordsCount ?? this.favoriteWordsCount,
      avatarUrl: avatarUrl ?? this.avatarUrl,
      isAnonymous: isAnonymous ?? this.isAnonymous,
    );
  }

  @override
  List<Object?> get props => [
        id,
        nickname,
        email,
        voivodeship,
        documentType,
        registrationDate,
        wordsViewed,
        favoriteWordsCount,
        avatarUrl,
        isAnonymous,
      ];
}