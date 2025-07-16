import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../core/storage/app_storage.dart';
import '../../app/constants/app_constants.dart';

final localeProvider = StateNotifierProvider<LocaleNotifier, Locale>((ref) {
  return LocaleNotifier();
});

class LocaleNotifier extends StateNotifier<Locale> {
  LocaleNotifier() : super(const Locale('en', 'US')) {
    _loadLocale();
  }

  void _loadLocale() {
    final savedLanguage = AppStorage.getString(AppConstants.storageKeyLanguage, defaultValue: 'en');
    switch (savedLanguage) {
      case 'pl':
        state = const Locale('pl', 'PL');
        break;
      case 'ru':
        state = const Locale('ru', 'RU');
        break;
      default:
        state = const Locale('en', 'US');
    }
  }

  Future<void> setLocale(Locale locale) async {
    state = locale;
    await AppStorage.setString(AppConstants.storageKeyLanguage, locale.languageCode);
  }
}