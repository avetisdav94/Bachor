import '../entities/word.dart';
import '../repositories/word_repository.dart';

class GetFavoriteWords {
  final WordRepository _wordRepository;

  GetFavoriteWords(this._wordRepository);

  Future<List<Word>> call() async {
    return await _wordRepository.getFavoriteWords();
  }
}