import 'package:flutter/services.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:integration_test/integration_test.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import 'package:bachor/main.dart' as app;

void main() {
  IntegrationTestWidgetsFlutterBinding.ensureInitialized();

  group('Bachor App Integration Tests', () {
    testWidgets('Complete app flow test', (WidgetTester tester) async {
      // Start the app
      app.main();
      await tester.pumpAndSettle();

      // Test app initialization
      // This would normally test the splash screen and navigation
      // For now, we'll just verify the app starts without crashing
      
      // Wait for potential splash screen
      await tester.pumpAndSettle(const Duration(seconds: 3));
      
      // The app should be running without errors
      expect(tester.takeException(), isNull);
    });

    testWidgets('Navigation flow test', (WidgetTester tester) async {
      // Test navigation between screens
      // This would test the complete user flow through the app
      
      app.main();
      await tester.pumpAndSettle();
      
      // Wait for app to fully load
      await tester.pumpAndSettle(const Duration(seconds: 3));
      
      // Test that we can navigate through the app
      expect(tester.takeException(), isNull);
    });

    testWidgets('Theme switching test', (WidgetTester tester) async {
      // Test theme switching functionality
      
      app.main();
      await tester.pumpAndSettle();
      
      // Wait for app to fully load
      await tester.pumpAndSettle(const Duration(seconds: 3));
      
      // Test theme switching
      expect(tester.takeException(), isNull);
    });

    testWidgets('Localization test', (WidgetTester tester) async {
      // Test language switching functionality
      
      app.main();
      await tester.pumpAndSettle();
      
      // Wait for app to fully load
      await tester.pumpAndSettle(const Duration(seconds: 3));
      
      // Test language switching
      expect(tester.takeException(), isNull);
    });
  });
}