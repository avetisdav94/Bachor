class AppConstants {
  static const String appName = 'Bachor';
  static const String appVersion = '1.0.0';
  
  // Supabase Configuration
  static const String supabaseUrl = 'https://your-supabase-url.supabase.co';
  static const String supabaseAnonKey = 'your-supabase-anon-key';
  
  // API Endpoints
  static const String apiBaseUrl = 'https://your-api-url.com';
  
  // Storage Keys
  static const String storageKeyUser = 'user_profile';
  static const String storageKeyFavorites = 'favorites';
  static const String storageKeyTheme = 'theme_mode';
  static const String storageKeyLanguage = 'language';
  static const String storageKeyOnboarding = 'onboarding_completed';
  
  // Pagination
  static const int defaultPageSize = 20;
  static const int searchPageSize = 10;
  
  // Timeouts
  static const Duration networkTimeout = Duration(seconds: 30);
  static const Duration cacheTimeout = Duration(hours: 24);
  
  // Animation Durations
  static const Duration animationDuration = Duration(milliseconds: 300);
  static const Duration longAnimationDuration = Duration(milliseconds: 500);
  
  // UI Constants
  static const double defaultPadding = 16.0;
  static const double smallPadding = 8.0;
  static const double largePadding = 24.0;
  static const double defaultRadius = 12.0;
  
  // Routes
  static const String splashRoute = '/splash';
  static const String onboardingRoute = '/onboarding';
  static const String homeRoute = '/home';
  static const String wordsRoute = '/words';
  static const String wordDetailRoute = '/word-detail';
  static const String searchRoute = '/search';
  static const String favoritesRoute = '/favorites';
  static const String guideRoute = '/guide';
  static const String profileRoute = '/profile';
  static const String authRoute = '/auth';
}