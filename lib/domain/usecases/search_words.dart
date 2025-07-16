import '../entities/word.dart';
import '../repositories/word_repository.dart';

class SearchWords {
  final WordRepository _wordRepository;

  SearchWords(this._wordRepository);

  Future<List<Word>> call(String query) async {
    if (query.trim().isEmpty) return [];
    return await _wordRepository.searchWords(query);
  }
}