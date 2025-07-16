import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../constants/app_constants.dart';
import '../../presentation/screens/splash_screen.dart';
import '../../presentation/screens/onboarding_screen.dart';
import '../../presentation/screens/main_screen.dart';
import '../../presentation/screens/word_detail_screen.dart';
import '../../presentation/screens/search_screen.dart';
import '../../presentation/screens/favorites_screen.dart';
import '../../presentation/screens/auth_screen.dart';
import '../../core/storage/app_storage.dart';

final appRouterProvider = Provider<GoRouter>((ref) {
  return GoRouter(
    initialLocation: AppConstants.splashRoute,
    routes: [
      GoRoute(
        path: AppConstants.splashRoute,
        name: 'splash',
        builder: (context, state) => const SplashScreen(),
      ),
      GoRoute(
        path: AppConstants.onboardingRoute,
        name: 'onboarding',
        builder: (context, state) => const OnboardingScreen(),
      ),
      GoRoute(
        path: AppConstants.authRoute,
        name: 'auth',
        builder: (context, state) => const AuthScreen(),
      ),
      GoRoute(
        path: AppConstants.homeRoute,
        name: 'home',
        builder: (context, state) => const MainScreen(),
      ),
      GoRoute(
        path: '${AppConstants.wordDetailRoute}/:wordId',
        name: 'word-detail',
        builder: (context, state) {
          final wordId = state.pathParameters['wordId']!;
          return WordDetailScreen(wordId: wordId);
        },
      ),
      GoRoute(
        path: AppConstants.searchRoute,
        name: 'search',
        builder: (context, state) => const SearchScreen(),
      ),
      GoRoute(
        path: AppConstants.favoritesRoute,
        name: 'favorites',
        builder: (context, state) => const FavoritesScreen(),
      ),
    ],
    redirect: (context, state) {
      final isOnboardingCompleted = AppStorage.getBool(AppConstants.storageKeyOnboarding);
      final isLoggedIn = AppStorage.getUser() != null;
      
      // Handle splash screen logic
      if (state.matchedLocation == AppConstants.splashRoute) {
        return null; // Allow splash screen to handle navigation
      }
      
      // If onboarding not completed, redirect to onboarding
      if (!isOnboardingCompleted && state.matchedLocation != AppConstants.onboardingRoute) {
        return AppConstants.onboardingRoute;
      }
      
      // If onboarding completed but not logged in, redirect to auth
      if (isOnboardingCompleted && !isLoggedIn && state.matchedLocation != AppConstants.authRoute) {
        return AppConstants.authRoute;
      }
      
      // If logged in and trying to access onboarding or auth, redirect to home
      if (isLoggedIn && (state.matchedLocation == AppConstants.onboardingRoute || state.matchedLocation == AppConstants.authRoute)) {
        return AppConstants.homeRoute;
      }
      
      return null;
    },
  );
});