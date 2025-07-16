import 'package:equatable/equatable.dart';

abstract class Failure extends Equatable {
  final String message;
  final String code;

  const Failure({
    required this.message,
    required this.code,
  });

  @override
  List<Object?> get props => [message, code];
}

class NetworkFailure extends Failure {
  const NetworkFailure({
    required super.message,
    required super.code,
  });
}

class ServerFailure extends Failure {
  const ServerFailure({
    required super.message,
    required super.code,
  });
}

class AuthFailure extends Failure {
  const AuthFailure({
    required super.message,
    required super.code,
  });
}

class CacheFailure extends Failure {
  const CacheFailure({
    required super.message,
    required super.code,
  });
}

class ValidationFailure extends Failure {
  const ValidationFailure({
    required super.message,
    required super.code,
  });
}

class UnknownFailure extends Failure {
  const UnknownFailure({
    required super.message,
    super.code = 'UNKNOWN_ERROR',
  });
}