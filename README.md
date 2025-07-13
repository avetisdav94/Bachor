# Bachor - Polish Slang Dictionary & Migrant Guide

**Version 0.03** | A modern mobile app for learning Polish slang and navigating life in Poland

## 🚀 Features

### 📚 Polish Slang Dictionary

- **Comprehensive word database** with meanings, translations, and examples
- **Category-based organization** for easy navigation
- **Search functionality** to find words quickly
- **Favorites system** - save words for later reference
- **Interactive word cards** with detailed information

### 🏠 Migrant Guide

- **Life in Poland** - essential information for immigrants
- **Document guidance** - visa, work permits, and bureaucracy
- **Cultural tips** - understanding Polish society
- **Practical advice** - housing, healthcare, and daily life

### 👤 User Profile

- **Favorites collection** - personal word library
- **Usage statistics** - track your learning progress
- **Customizable settings** - personalize your experience
- **Achievement system** - gamified learning experience

### 🎨 Modern Design

- **Clean interface** with intuitive navigation
- **Smooth animations** and transitions
- **Responsive design** for all screen sizes
- **Beautiful onboarding** experience

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
