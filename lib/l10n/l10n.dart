import 'package:flutter/material.dart';

class L10n {
  static const supportedLocales = [
    Locale('en', 'US'),
    Locale('pl', 'PL'),
    Locale('ru', 'RU'),
  ];
  
  static const localeNames = {
    'en': 'English',
    'pl': 'Polski',
    'ru': 'Русский',
  };
  
  static String getLocaleName(String languageCode) {
    return localeNames[languageCode] ?? 'English';
  }
}