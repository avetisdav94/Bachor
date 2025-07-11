<div align="center">
  <img src="assets/icon.png" alt="Bachor Logo" width="120" height="120">
  
  # 🇵🇱 Bachor
  
  **Your Polish Slang Dictionary & Migrant's Guide**
  
  ![Version](https://img.shields.io/badge/version-0.02-blue.svg)
  ![React Native](https://img.shields.io/badge/React%20Native-0.72-61DAFB.svg)
  ![Expo](https://img.shields.io/badge/Expo-49.0-000020.svg)
  ![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6.svg)
  ![License](https://img.shields.io/badge/license-MIT-green.svg)
  
  *Learn Polish slang and navigate life in Poland with confidence*
  
  [📱 Download](#-download) • [🚀 Features](#-features) • [📱 Screenshots](#-screenshots) • [🛠️ Installation](#️-installation)
</div>

---

## 📖 About

**Bachor** is a comprehensive mobile application designed specifically for Russian-speaking migrants in Poland. It combines a modern Polish slang dictionary with an essential migrant's handbook, making it your go-to companion for understanding contemporary Polish language and navigating daily life in Poland.

### 🎯 Why Bachor?

- **Stay Current**: Learn the latest Polish slang and street language
- **Navigate Confidently**: Access essential information for life in Poland
- **Beautiful Design**: Enjoy a clean, modern interface with smooth animations
- **Offline Ready**: Access your content anytime, anywhere
- **Regular Updates**: Fresh content and new features added regularly

---

## 🚀 What's New in v0.02

### ✨ **Major Updates**

- **🏗️ Production-Ready Architecture**: Completely restructured codebase for scalability
- **📱 Improved Navigation**: Clean navigation without duplicate headers
- **🎨 Consistent Design System**: Unified components and styling
- **🔧 Better Code Organization**: Separated concerns with proper folder structure
- **📊 TypeScript Integration**: Full type safety throughout the application

### 🔧 **Technical Improvements**

- **Components**: Modular, reusable UI components
- **Constants**: Centralized colors, fonts, and layout values
- **Hooks**: Custom hooks for animations and state management
- **Types**: Comprehensive TypeScript definitions
- **Utils**: Helper functions and utilities

### 🎯 **User Experience**

- **Cleaner Interface**: Removed redundant navigation headers
- **Better Performance**: Optimized animations and rendering
- **Consistent Styling**: Unified design across all screens
- **Smoother Transitions**: Enhanced navigation between screens

---

## ✨ Features

### 🔥 **Slang Dictionary**

- **Word of the Day**: Discover new Polish slang with meanings and translations
- **Top Words**: Most popular and useful slang terms
- **Categories**: Organized by topics (Money, Friends, Work, Food, Emotions)
- **Category Navigation**: Clean, header-free navigation between categories
- **Word Details**: Comprehensive information for each slang term

### 📚 **Migrant's Handbook**

- **Essential Documents**: Visa, residence permits, work permits
- **Employment**: Job search, worker rights, employment laws
- **Housing**: Rental guides, utilities, tenant rights
- **Healthcare**: Insurance, NFZ, finding doctors
- **Banking**: Account opening, cards, loans
- **Education**: Schools, universities, diploma recognition
- **Transportation**: Driving licenses, public transport
- **Taxes**: Filing declarations, tax benefits
- **Emergency Contacts**: Quick access to emergency services

### 🏠 **Smart Home Screen**

- **Daily Updates**: Fresh content every day
- **Quick Access**: Jump to any section instantly
- **News Feed**: Latest migration law updates
- **Personalized**: Tailored to your interests

### 👤 **Profile & Settings**

- **Progress Tracking**: Monitor your vocabulary growth
- **Preferences**: Customize notifications and appearance
- **Statistics**: View your learning progress
- **Settings**: App configuration and preferences

---

## 📱 Screenshots

<div align="center">
  <table>
    <tr>
      <td align="center">
        <img src="screenshots/home.png" alt="Home Screen" width="200">
        <br>
        <b>🏠 Home Screen</b>
        <br>
        <i>Daily word, top terms, and quick access</i>
      </td>
      <td align="center">
        <img src="screenshots/words.png" alt="Words Screen" width="200">
        <br>
        <b>📚 Slang Dictionary</b>
        <br>
        <i>Categorized slang with meanings</i>
      </td>
      <td align="center">
        <img src="screenshots/category.png" alt="Category Screen" width="200">
        <br>
        <b>🔍 Category Details</b>
        <br>
        <i>Clean navigation without headers</i>
      </td>
      <td align="center">
        <img src="screenshots/profile.png" alt="Profile Screen" width="200">
        <br>
        <b>👤 Profile</b>
        <br>
        <i>Settings and progress tracking</i>
      </td>
    </tr>
  </table>
</div>

---

## 🛠️ Installation

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [Git](https://git-scm.com/)

### Quick Start

```bash
# Clone the repository
git clone https://github.com/yourusername/bachor.git

# Navigate to project directory
cd bachor

# Install dependencies
npm install

# Start the development server
npx expo start
```

### Running on Device

1. Install [Expo Go](https://expo.dev/client) on your iOS or Android device
2. Scan the QR code from the terminal
3. The app will load on your device

---

## 🗂️ Project Structure

```
bachor/
├── app/
│   ├── (tabs)/
│   │   ├── index.tsx              # Home screen
│   │   ├── words/
│   │   │   ├── _layout.tsx        # Words navigation layout
│   │   │   ├── index.tsx          # Words categories
│   │   │   └── [category].tsx     # Category details
│   │   ├── guide.tsx              # Migrant's handbook
│   │   └── profile.tsx            # User profile
│   └── _layout.tsx                # Root layout
├── src/
│   ├── components/
│   │   ├── common/                # Reusable components
│   │   │   ├── Card.tsx
│   │   │   ├── Header.tsx
│   │   │   └── EmergencyButton.tsx
│   │   ├── words/                 # Word-related components
│   │   │   ├── CategoryCard.tsx
│   │   │   ├── WordCard.tsx
│   │   │   └── WordOfTheDay.tsx
│   │   ├── guide/                 # Guide components
│   │   │   ├── GuideCard.tsx
│   │   │   └── EmergencyContacts.tsx
│   │   └── screens/               # Screen components
│   │       ├── HomeScreen.tsx
│   │       ├── WordsScreen.tsx
│   │       ├── CategoryDetailScreen.tsx
│   │       ├── GuideScreen.tsx
│   │       └── ProfileScreen.tsx
│   ├── constants/                 # App constants
│   │   ├── colors.ts
│   │   ├── fonts.ts
│   │   └── layout.ts
│   ├── types/                     # TypeScript types
│   │   ├── index.ts
│   │   ├── words.ts
│   │   └── guide.ts
│   ├── hooks/                     # Custom hooks
│   │   └── useAnimation.ts
│   └── utils/                     # Utility functions
│       └── categoryIcons.ts
├── data/                          # Static data
│   ├── words.ts
│   ├── wordCategories.ts
│   └── news.ts
├── assets/                        # App assets
└── README.md
```

---

## 🧪 Technologies & Libraries

<div align="center">
  <table>
    <tr>
      <td align="center">
        <img src="https://reactnative.dev/img/header_logo.svg" alt="React Native" width="60">
        <br>
        <b>React Native</b>
      </td>
      <td align="center">
        <img src="https://expo.dev/favicon.ico" alt="Expo" width="60">
        <br>
        <b>Expo</b>
      </td>
      <td align="center">
        <img src="https://www.typescriptlang.org/favicon-32x32.png" alt="TypeScript" width="60">
        <br>
        <b>TypeScript</b>
      </td>
      <td align="center">
        <img src="https://reactnavigation.org/img/spiro.svg" alt="React Navigation" width="60">
        <br>
        <b>Expo Router</b>
      </td>
    </tr>
  </table>
</div>

### Core Dependencies

- **React Native**: Cross-platform mobile app framework
- **Expo**: Development platform and tools
- **TypeScript**: Static type checking
- **Expo Router**: File-based routing
- **Expo Vector Icons**: Beautiful icons
- **React Native Safe Area Context**: Safe area handling

---

## 📅 Changelog

### v0.02 (Current)

- 🏗️ **Architecture Refactor**: Complete project restructure for production
- 📱 **Navigation Improvements**: Removed duplicate headers, cleaner UX
- 🎨 **Design System**: Unified components and styling
- 🔧 **Code Organization**: Better separation of concerns
- 📊 **TypeScript**: Full type safety implementation
- ✨ **Performance**: Optimized animations and rendering

### v0.01

- 🚀 **Initial Release**: Basic app structure with all main features
- 📚 **Slang Dictionary**: Categories and word management
- 📋 **Migrant's Handbook**: Essential information for Poland
- 🏠 **Home Screen**: Daily word and quick access
- 👤 **Profile**: User settings and statistics

---

## 🚀 Roadmap

### Version 0.03 - Coming Soon

- [ ] **Search Functionality**: Find words and guides quickly
- [ ] **Favorites**: Save your favorite words and articles
- [ ] **Audio Pronunciation**: Listen to correct pronunciation
- [ ] **Offline Mode**: Download content for offline use
- [ ] **Push Notifications**: Daily word reminders

### Version 0.04 - Future

- [ ] **Dark Mode**: Eye-friendly dark theme
- [ ] **Language Learning**: Interactive quizzes and games
- [ ] **Community Features**: User contributions
- [ ] **Advanced Statistics**: Detailed progress tracking

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙌 Contributing

We welcome contributions! Here's how you can help:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add some amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Contributing Guidelines

- Follow the existing code style and architecture
- Add tests for new features
- Update documentation as needed
- Be respectful and constructive

---

## 📬 Contact & Support

<div align="center">
  
### Questions? Suggestions? Found a bug?

[![Email](https://img.shields.io/badge/Email-avetisdav94@gmail.com-red?style=for-the-badge&logo=gmail&logoColor=white)](mailto:avetisdav94@gmail.com)
[![GitHub Issues](https://img.shields.io/badge/GitHub-Issues-black?style=for-the-badge&logo=github&logoColor=white)](https://github.com/yourusername/bachor/issues)

</div>

---

## 🌟 Show Your Support

If you like this project, please consider:

- ⭐ **Star** this repository
- 🐛 **Report** bugs and issues
- 💡 **Suggest** new features
- 📢 **Share** with your friends

---

<div align="center">
  <br>
  <img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png" alt="divider">
  <br>
  <br>
  
  **Made with ❤️ for the Polish-Russian community**
  
  <br>
  
  *Bachor - Your guide to Polish slang and life in Poland*
  
  <br>
  <br>
  
  [![Back to Top](https://img.shields.io/badge/Back%20to%20Top-000000?style=for-the-badge&logo=github&logoColor=white)](#-bachor)
</div>
