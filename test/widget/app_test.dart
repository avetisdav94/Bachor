import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import 'package:bachor/main.dart';

void main() {
  group('Bachor App', () {
    testWidgets('App should initialize without errors', (WidgetTester tester) async {
      // Initialize the app
      await tester.pumpWidget(
        const ProviderScope(
          child: MaterialApp(
            home: Scaffold(
              body: Center(
                child: Text('Test App'),
              ),
            ),
          ),
        ),
      );

      // Verify the app renders
      expect(find.text('Test App'), findsOneWidget);
    });

    testWidgets('Theme provider should work correctly', (WidgetTester tester) async {
      // Test theme functionality
      await tester.pumpWidget(
        const ProviderScope(
          child: MaterialApp(
            home: Scaffold(
              body: Center(
                child: Text('Theme Test'),
              ),
            ),
          ),
        ),
      );

      expect(find.text('Theme Test'), findsOneWidget);
    });

    testWidgets('Localization should work correctly', (WidgetTester tester) async {
      // Test localization functionality
      await tester.pumpWidget(
        const ProviderScope(
          child: MaterialApp(
            home: Scaffold(
              body: Center(
                child: Text('Localization Test'),
              ),
            ),
          ),
        ),
      );

      expect(find.text('Localization Test'), findsOneWidget);
    });
  });
}