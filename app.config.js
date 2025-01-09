export default {
  name: 'ShopEase',
  slug: 'shopease',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/images/icon.png',
  splash: {
    image: './assets/images/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff'
  },
  updates: {
    fallbackToCacheTimeout: 0
  },
  assetBundlePatterns: [
    '**/*'
  ],
  ios: {
    supportsTablet: true,
    bundleIdentifier: 'com.yourcompany.shopease'
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './assets/images/adaptive-icon.png',
      backgroundColor: '#FFFFFF'
    },
    package: 'com.yourcompany.shopease'
  },
  web: {
    favicon: './assets/images/favicon.png'
  },
  scheme: 'shopease',
  newArchEnabled: true,
  extra: {
    eas: {
      projectId: 'your-project-id'
    }
  }
}
