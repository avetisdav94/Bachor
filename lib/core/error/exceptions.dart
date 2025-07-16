import 'package:equatable/equatable.dart';

abstract class AppException extends Equatable implements Exception {
  final String message;
  final String code;

  const AppException({
    required this.message,
    required this.code,
  });

  @override
  List<Object?> get props => [message, code];
}

class NetworkException extends AppException {
  const NetworkException({
    required super.message,
    required super.code,
  });
}

class ServerException extends AppException {
  const ServerException({
    required super.message,
    required super.code,
  });
}

class AuthException extends AppException {
  const AuthException({
    required super.message,
    required super.code,
  });
}

class CacheException extends AppException {
  const CacheException({
    required super.message,
    required super.code,
  });
}

class ValidationException extends AppException {
  const ValidationException({
    required super.message,
    required super.code,
  });
}

class UnknownException extends AppException {
  const UnknownException({
    required super.message,
    super.code = 'UNKNOWN_ERROR',
  });
}