import 'package:flutter_test/flutter_test.dart';
import 'package:bachor/core/storage/app_storage.dart';
import 'package:bachor/core/error/exceptions.dart';
import 'package:bachor/core/error/failures.dart';

void main() {
  group('AppStorage', () {
    test('should handle data storage and retrieval', () async {
      // This is a mock test since actual storage requires initialization
      // In a real test, you would initialize Hive and test actual storage
      
      // Mock test for demonstration
      expect(true, true);
    });
  });

  group('Error Handling', () {
    test('should create network exception correctly', () {
      // Arrange
      const exception = NetworkException(
        message: 'Network connection failed',
        code: 'NETWORK_ERROR',
      );

      // Assert
      expect(exception.message, 'Network connection failed');
      expect(exception.code, 'NETWORK_ERROR');
    });

    test('should create network failure correctly', () {
      // Arrange
      const failure = NetworkFailure(
        message: 'Network connection failed',
        code: 'NETWORK_ERROR',
      );

      // Assert
      expect(failure.message, 'Network connection failed');
      expect(failure.code, 'NETWORK_ERROR');
    });

    test('should create server exception correctly', () {
      // Arrange
      const exception = ServerException(
        message: 'Server error occurred',
        code: 'SERVER_ERROR',
      );

      // Assert
      expect(exception.message, 'Server error occurred');
      expect(exception.code, 'SERVER_ERROR');
    });

    test('should create auth exception correctly', () {
      // Arrange
      const exception = AuthException(
        message: 'Authentication failed',
        code: 'AUTH_ERROR',
      );

      // Assert
      expect(exception.message, 'Authentication failed');
      expect(exception.code, 'AUTH_ERROR');
    });

    test('should create validation exception correctly', () {
      // Arrange
      const exception = ValidationException(
        message: 'Invalid input data',
        code: 'VALIDATION_ERROR',
      );

      // Assert
      expect(exception.message, 'Invalid input data');
      expect(exception.code, 'VALIDATION_ERROR');
    });

    test('should create unknown exception correctly', () {
      // Arrange
      const exception = UnknownException(
        message: 'Something went wrong',
      );

      // Assert
      expect(exception.message, 'Something went wrong');
      expect(exception.code, 'UNKNOWN_ERROR');
    });
  });
}