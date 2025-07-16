import '../entities/word.dart';
import '../repositories/word_repository.dart';

class GetWordsByCategory {
  final WordRepository _wordRepository;

  GetWordsByCategory(this._wordRepository);

  Future<List<Word>> call(String categoryId) async {
    return await _wordRepository.getWordsByCategory(categoryId);
  }
}