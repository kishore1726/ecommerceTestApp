# ShopEase - Cross-Platform E-commerce App

A modern e-commerce mobile application built with Expo CLI, featuring a beautiful UI and seamless shopping experience across iOS and Android platforms.

## Features

- Cross-platform compatibility (iOS & Android)
- Beautiful and intuitive UI with React Native Paper
- State management with Redux Toolkit
- Shopping cart functionality
- User authentication and profile management
- Product catalog with search functionality
- Automated deployment to App Store and Play Store using EAS

## Getting Started

1. Install dependencies
   ```bash
   npm install
   ```

2. Start the development server
   ```bash
   npm start
   ```

3. Run on specific platforms
   ```bash
   # For iOS
   npm run ios

   # For Android
   npm run android
   ```

## Deployment

### Prerequisites

1. Set up your Expo account
   ```bash
   eas login
   ```

2. Configure your app
   - Update `app.config.js` with your app details
   - Update `eas.json` with your store credentials

### Building for Stores

1. Build for Android
   ```bash
   npm run build:android
   ```

2. Build for iOS
   ```bash
   npm run build:ios
   ```

### Submitting to Stores

1. Submit to Play Store
   ```bash
   npm run submit:android
   ```

2. Submit to App Store
   ```bash
   npm run submit:ios
   ```

## Project Structure

```
expo-ecommerce-app/
├── src/
│   ├── components/     # Reusable UI components
│   ├── screens/        # Screen components
│   ├── store/          # Redux store and slices
│   ├── services/       # API and other services
│   └── utils/          # Utility functions
├── assets/            # Images and other static assets
├── app.config.js      # Expo configuration
└── eas.json          # EAS Build configuration
```

## Learn More

- [Expo Documentation](https://docs.expo.dev/)
- [React Native Paper](https://callstack.github.io/react-native-paper/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [EAS Build](https://docs.expo.dev/build/introduction/)
