import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../../app/constants/app_constants.dart';

class SearchScreen extends ConsumerStatefulWidget {
  const SearchScreen({super.key});

  @override
  ConsumerState<SearchScreen> createState() => _SearchScreenState();
}

class _SearchScreenState extends ConsumerState<SearchScreen> {
  final TextEditingController _searchController = TextEditingController();
  final List<Map<String, dynamic>> _allWords = [
    {
      'id': '1',
      'word': 'Spoko',
      'meaning': 'Cool, okay, fine',
      'translation': 'Круто, хорошо, отлично',
      'category': 'Common expressions',
    },
    {
      'id': '2',
      'word': 'Ziomek',
      'meaning': 'Buddy, friend',
      'translation': 'Друг, приятель',
      'category': 'Social',
    },
    {
      'id': '3',
      'word': 'Kasa',
      'meaning': 'Money, cash',
      'translation': 'Деньги, наличные',
      'category': 'Finance',
    },
    {
      'id': '4',
      'word': 'Zajebisty',
      'meaning': 'Awesome, amazing',
      'translation': 'Потрясающий, классный',
      'category': 'Expressions',
    },
    {
      'id': '5',
      'word': 'Laska',
      'meaning': 'Girl, chick',
      'translation': 'Девушка, девчонка',
      'category': 'Social',
    },
    {
      'id': '6',
      'word': 'Ziomal',
      'meaning': 'Buddy, mate',
      'translation': 'Приятель, товарищ',
      'category': 'Social',
    },
    {
      'id': '7',
      'word': 'Hajs',
      'meaning': 'Money',
      'translation': 'Деньги',
      'category': 'Finance',
    },
    {
      'id': '8',
      'word': 'Kozak',
      'meaning': 'Cool person, hero',
      'translation': 'Крутой человек, герой',
      'category': 'Social',
    },
  ];

  List<Map<String, dynamic>> _filteredWords = [];
  bool _isSearching = false;

  @override
  void initState() {
    super.initState();
    _filteredWords = _allWords;
  }

  @override
  void dispose() {
    _searchController.dispose();
    super.dispose();
  }

  void _performSearch(String query) {
    setState(() {
      _isSearching = query.isNotEmpty;
      if (query.isEmpty) {
        _filteredWords = _allWords;
      } else {
        _filteredWords = _allWords.where((word) {
          return word['word'].toLowerCase().contains(query.toLowerCase()) ||
                 word['meaning'].toLowerCase().contains(query.toLowerCase()) ||
                 word['translation'].toLowerCase().contains(query.toLowerCase());
        }).toList();
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Search Words'),
        bottom: PreferredSize(
          preferredSize: const Size.fromHeight(60),
          child: Padding(
            padding: const EdgeInsets.all(16),
            child: TextField(
              controller: _searchController,
              onChanged: _performSearch,
              decoration: InputDecoration(
                hintText: 'Search for words...',
                prefixIcon: const Icon(Icons.search),
                suffixIcon: _searchController.text.isNotEmpty
                    ? IconButton(
                        icon: const Icon(Icons.clear),
                        onPressed: () {
                          _searchController.clear();
                          _performSearch('');
                        },
                      )
                    : null,
                border: OutlineInputBorder(
                  borderRadius: BorderRadius.circular(12),
                ),
                filled: true,
                fillColor: Theme.of(context).colorScheme.surface,
              ),
              autofocus: true,
            ),
          ),
        ),
      ),
      body: _buildBody(),
    );
  }

  Widget _buildBody() {
    if (_isSearching && _filteredWords.isEmpty) {
      return const Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Icon(
              Icons.search_off,
              size: 64,
              color: Colors.grey,
            ),
            SizedBox(height: 16),
            Text(
              'No results found',
              style: TextStyle(
                fontSize: 18,
                color: Colors.grey,
              ),
            ),
            SizedBox(height: 8),
            Text(
              'Try searching with different keywords',
              style: TextStyle(
                color: Colors.grey,
              ),
            ),
          ],
        ),
      );
    }

    if (!_isSearching && _filteredWords.isNotEmpty) {
      return Column(
        children: [
          Padding(
            padding: const EdgeInsets.all(16),
            child: Row(
              children: [
                Icon(
                  Icons.info_outline,
                  size: 20,
                  color: Theme.of(context).colorScheme.primary,
                ),
                const SizedBox(width: 8),
                Text(
                  'Type above to search through ${_allWords.length} words',
                  style: Theme.of(context).textTheme.bodyMedium?.copyWith(
                    color: Theme.of(context).colorScheme.onSurface.withOpacity(0.7),
                  ),
                ),
              ],
            ),
          ),
          Expanded(
            child: _buildWordsList(),
          ),
        ],
      );
    }

    return _buildWordsList();
  }

  Widget _buildWordsList() {
    return ListView.builder(
      padding: const EdgeInsets.all(16),
      itemCount: _filteredWords.length,
      itemBuilder: (context, index) {
        final word = _filteredWords[index];
        return Card(
          margin: const EdgeInsets.only(bottom: 8),
          child: ListTile(
            title: Text(
              word['word'],
              style: Theme.of(context).textTheme.titleMedium?.copyWith(
                fontWeight: FontWeight.bold,
                color: Theme.of(context).colorScheme.primary,
              ),
            ),
            subtitle: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                const SizedBox(height: 4),
                Text(
                  word['meaning'],
                  style: Theme.of(context).textTheme.bodyMedium,
                ),
                const SizedBox(height: 2),
                Text(
                  word['translation'],
                  style: Theme.of(context).textTheme.bodySmall?.copyWith(
                    color: Theme.of(context).colorScheme.onSurface.withOpacity(0.7),
                  ),
                ),
                const SizedBox(height: 4),
                Chip(
                  label: Text(
                    word['category'],
                    style: const TextStyle(fontSize: 12),
                  ),
                  backgroundColor: Theme.of(context).colorScheme.secondary.withOpacity(0.1),
                  materialTapTargetSize: MaterialTapTargetSize.shrinkWrap,
                ),
              ],
            ),
            trailing: const Icon(Icons.arrow_forward_ios),
            onTap: () {
              context.push('${AppConstants.wordDetailRoute}/${word['id']}');
            },
          ),
        );
      },
    );
  }
}