import '../entities/word.dart';
import '../repositories/word_repository.dart';

class ToggleFavorite {
  final WordRepository _wordRepository;

  ToggleFavorite(this._wordRepository);

  Future<void> call(String wordId) async {
    final isFavorite = await _wordRepository.isFavorite(wordId);
    if (isFavorite) {
      await _wordRepository.removeFromFavorites(wordId);
    } else {
      await _wordRepository.addToFavorites(wordId);
    }
  }
}