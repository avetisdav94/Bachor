import 'package:flutter/material.dart';
import 'package:talker_flutter/talker_flutter.dart';

import 'exceptions.dart';
import 'failures.dart';

class ErrorHandler {
  static late TalkerFlutter _talker;
  static late BuildContext _context;

  static void init(BuildContext context) {
    _context = context;
    _talker = TalkerFlutter.init();
  }

  static void handleError(Object error, StackTrace? stackTrace) {
    _talker.handle(error, stackTrace);
    
    if (error is AppException) {
      _showErrorDialog(error.message);
    } else if (error is Failure) {
      _showErrorDialog(error.message);
    } else {
      _showErrorDialog('An unexpected error occurred');
    }
  }

  static void logError(String message, {Object? error, StackTrace? stackTrace}) {
    _talker.error(message, error, stackTrace);
  }

  static void logInfo(String message) {
    _talker.info(message);
  }

  static void logWarning(String message) {
    _talker.warning(message);
  }

  static void _showErrorDialog(String message) {
    if (_context.mounted) {
      showDialog(
        context: _context,
        builder: (context) => AlertDialog(
          title: const Text('Error'),
          content: Text(message),
          actions: [
            TextButton(
              onPressed: () => Navigator.of(context).pop(),
              child: const Text('OK'),
            ),
          ],
        ),
      );
    }
  }

  static Failure mapExceptionToFailure(AppException exception) {
    switch (exception.runtimeType) {
      case NetworkException:
        return NetworkFailure(
          message: exception.message,
          code: exception.code,
        );
      case ServerException:
        return ServerFailure(
          message: exception.message,
          code: exception.code,
        );
      case AuthException:
        return AuthFailure(
          message: exception.message,
          code: exception.code,
        );
      case CacheException:
        return CacheFailure(
          message: exception.message,
          code: exception.code,
        );
      case ValidationException:
        return ValidationFailure(
          message: exception.message,
          code: exception.code,
        );
      default:
        return UnknownFailure(
          message: exception.message,
          code: exception.code,
        );
    }
  }
}