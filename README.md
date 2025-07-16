# Bachor - Polish Slang Dictionary & Migrant Guide

**Version 2.0** | A modern Flutter app for learning Polish slang and navigating life in Poland

## 🚀 Features

### 📚 Polish Slang Dictionary

- **Comprehensive word database** with meanings, translations, and examples
- **Category-based organization** for easy navigation
- **Search functionality** to find words quickly
- **Favorites system** - save words for later reference
- **Interactive word cards** with detailed information
- **Multi-language support** - Polish, English, and Russian

### 🏠 Migrant Guide

- **Life in Poland** - essential information for immigrants
- **Document guidance** - visa, work permits, and bureaucracy
- **Emergency contacts** - important phone numbers
- **Practical advice** - housing, healthcare, and daily life
- **Cultural tips** - understanding Polish society

### 👤 User Profile

- **Favorites collection** - personal word library
- **Usage statistics** - track your learning progress
- **Customizable settings** - personalize your experience
- **Theme selection** - dark/light mode
- **Language preferences** - choose your preferred language

### 🎨 Modern Design

- **Clean architecture** with Flutter best practices
- **Smooth animations** and transitions
- **Responsive design** for all screen sizes
- **Beautiful onboarding** experience
- **Material Design 3** components

## 🏗️ Architecture

The app follows **Clean Architecture** principles:

- **Domain Layer**: Entities, repositories, and use cases
- **Data Layer**: Models, repositories, and data sources
- **Presentation Layer**: Screens, widgets, and state management

## 🛠️ Tech Stack

- **Framework**: Flutter 3.x
- **State Management**: Riverpod
- **Navigation**: Go Router
- **Local Storage**: Hive + Shared Preferences
- **Backend**: Supabase
- **Network**: Dio
- **Localization**: Flutter Intl
- **Testing**: Flutter Test + Integration Tests
- **Error Handling**: Talker

## 📱 Getting Started

### Prerequisites

- Flutter SDK 3.0 or higher
- Dart SDK 3.0 or higher
- Android Studio / VS Code
- Android SDK (for Android development)
- Xcode (for iOS development)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/avetisdav94/Bachor.git
   cd Bachor
   ```

2. **Install dependencies**
   ```bash
   flutter pub get
   ```

3. **Generate localization files**
   ```bash
   flutter gen-l10n
   ```

4. **Configure Supabase**
   - Update `lib/app/constants/app_constants.dart` with your Supabase URL and anon key

5. **Run the app**
   ```bash
   flutter run
   ```

## 🔧 Available Scripts

- `flutter run` - Run the app in development mode
- `flutter test` - Run unit and widget tests
- `flutter test integration_test/` - Run integration tests
- `flutter build apk` - Build APK for Android
- `flutter build ios` - Build for iOS
- `flutter analyze` - Run static analysis
- `flutter gen-l10n` - Generate localization files

## 🌐 Localization

The app supports three languages:
- 🇺🇸 English (en)
- 🇵🇱 Polish (pl)
- 🇷🇺 Russian (ru)

## 📊 Database Schema

The app uses Supabase with the following structure:

### Tables
- `words` - Dictionary entries with categories and examples
- `categories` - Word categories with translations
- `user_profiles` - User information and statistics
- `favorites` - User's favorite words

## 🚀 Deployment

### Android (Google Play Store)
```bash
flutter build apk --release
flutter build appbundle --release
```

### iOS (App Store)
```bash
flutter build ios --release
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Polish migrants community for feedback and suggestions
- Contributors who helped improve the app
- Flutter community for amazing tools and libraries

## 📞 Support

For support, please:
- Open an issue on GitHub
- Contact us at support@bachor.app

---

Made with ❤️ for the Polish migrant community using Flutter

## 📱 Screenshots

<details>
<summary>Click to view screenshots</summary>

### Onboarding & Welcome

|              Welcome Screen              |             Features Overview             |            Getting Started             |
| :--------------------------------------: | :---------------------------------------: | :------------------------------------: |
| ![Welcome](screenshots/onboarding-1.png) | ![Features](screenshots/onboarding-2.png) | ![Start](screenshots/onboarding-3.png) |

### Main Navigation

|          Home Screen          |             Words Dictionary              |          Migrant Guide          |
| :---------------------------: | :---------------------------------------: | :-----------------------------: |
| ![Home](screenshots/home.png) | ![Dictionary](screenshots/dictionary.png) | ![Guide](screenshots/guide.png) |

### Word Features

|              Word Categories              |               Word Details               |          Search Results           |
| :---------------------------------------: | :--------------------------------------: | :-------------------------------: |
| ![Categories](screenshots/categories.png) | ![Details](screenshots/word-details.png) | ![Search](screenshots/search.png) |

### Profile & Favorites

|            User Profile             |          Favorites Collection           |               Settings                |
| :---------------------------------: | :-------------------------------------: | :-----------------------------------: |
| ![Profile](screenshots/profile.png) | ![Favorites](screenshots/favorites.png) | ![Settings](screenshots/settings.png) |

### Category Details

|               Category Words                |               Word Examples                |              Favorites Management               |
| :-----------------------------------------: | :----------------------------------------: | :---------------------------------------------: |
| ![Category](screenshots/category-words.png) | ![Examples](screenshots/word-examples.png) | ![Manage](screenshots/favorites-management.png) |

</details>

## 🛠 Tech Stack

- **React Native** with Expo
- **TypeScript** for type safety
- **Expo Router** for navigation
- **React Native Safe Area Context** for screen handling
- **Vector Icons** for beautiful UI elements
- **Animated API** for smooth transitions
- **Context API** for state management

## 🚀 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/bachor.git
   cd bachor
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npx expo start
   ```

4. **Run on device**
   - Scan QR code with Expo Go app
   - Or press `i` for iOS simulator
   - Or press `a` for Android emulator

## 📁 Project Structure

```
bachor/
├── app/                    # App router pages
│   ├── (tabs)/            # Tab navigation
│   ├── onboarding.tsx     # Welcome screens
│   └── favorites.tsx      # Favorites screen
├── src/
│   ├── components/        # Reusable components
│   │   ├── common/        # Common UI components
│   │   ├── words/         # Word-related components
│   │   ├── profile/       # Profile components
│   │   └── screens/       # Screen components
│   ├── constants/         # App constants
│   ├── context/          # React Context providers
│   ├── hooks/            # Custom hooks
│   └── types/            # TypeScript types
├── data/                 # Static data
└── assets/              # Images and fonts
```

## 🎯 Current Features (v0.03)

- ✅ **Modern onboarding** with 3 welcome screens
- ✅ **Tab navigation** (Words, Guide, Profile)
- ✅ **Word categories** with detailed views
- ✅ **Search functionality** across all words
- ✅ **Favorites system** with heart button
- ✅ **Profile screen** with user stats
- ✅ **Responsive design** for all devices
- ✅ **Smooth animations** throughout the app
- ✅ **TypeScript** implementation
- ✅ **Context-based** state management

## 🔄 Recent Updates (v0.03)

- **Added favorites system** - users can save words for later
- **Enhanced profile screen** - shows favorite words and statistics
- **Improved word cards** - better design with category badges
- **Better navigation** - smoother transitions between screens
- **Code optimization** - better TypeScript types and structure

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- **Developer** - Initial work and ongoing development

## 🙏 Acknowledgments

- Polish language community for slang definitions
- Expo team for the amazing development platform
- React Native community for continuous inspiration

---

**Made with ❤️ for the Polish immigrant community**
