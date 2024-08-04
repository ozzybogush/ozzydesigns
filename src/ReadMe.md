## APP
Ozzy designs 

## App Schema
OzzyDesigns/
├── src/
│   ├── data/
│   │   ├── mockDatabase.js
│   ├── components/
│   │   ├── Auth/
│   │   │   ├── Login.js
│   │   │   └── SignUp.js
│   │   ├── Products/
│   │   │   ├── ProductList.js
│   │   │   └── ProductDetail.js
│   │   ├── Payment/
│   │   │   ├── PaymentForm.js
│   │   │   └── PaymentSuccess.js
│   │   └── Sale.js
│   ├── navigation/
│   │   ├── AppNavigator.js
│   │   └── AuthNavigator.js
│   ├── screens/
│   │   ├── AuthScreen.js
│   │   ├── ProductsScreen.js
│   │   ├── PaymentScreen.js
│   │   └── SaleScreen.js
│   ├── App.js
│   └── store/
│       ├── actions/
│       │   ├── authActions.js
│       │   └── cartActions.js
│       ├── reducers/
│       │   ├── authReducer.js
│       │   └── cartReducer.js
│       └── store.js
├── package.json
├


## Optional Dependencies

- `npm install expo-crypto`: Installs the Expo Crypto library. This library provides cryptographic functions for secure data storage and encryption in Expo-based projects. You can use it when you need to work with cryptographic operations within your app.

- `npm install expo-font`: Installs the Expo Font library. This library is used for loading and managing custom fonts in Expo projects. If your app uses custom fonts, you can install this package to ensure your fonts are properly loaded and displayed.

- `npm install expo-secure-store`: Installs the Expo SecureStore library. SecureStore allows you to securely store and manage sensitive data such as user tokens, passwords, or other confidential information in an Expo project. Use this package when you need to implement secure data storage.

## Troubleshooting Commands

- `npm cache clean --force`: Clears the npm cache forcefully. Use this command if you encounter issues related to cached package data. It can help resolve problems with outdated or corrupted cached data.

- `npm install --force`: Installs project dependencies while forcibly resolving and installing potentially conflicting packages. This command is typically used to overcome dependency conflicts when they cannot be resolved through regular installation.

- `npm install --legacy-peer-deps`: Installs project dependencies while allowing legacy peer dependency rules. Use this when you encounter issues with peer dependencies that cannot be resolved with newer package management rules.


## Troubleshooting Commands

- `npm install --verbose`: Runs the installation process in verbose mode, providing detailed information about which dependencies are being installed and any potential issues. This can be helpful for diagnosing problems during installation.

- `npm ls`: Lists the project's dependency tree, showing a hierarchical structure of installed packages. It can help you identify the versions and relationships of installed packages, making it easier to pinpoint any conflicts.

- `npm outdated`: Checks for outdated packages in your project and displays a list of dependencies that have newer versions available. This is useful for keeping your project up to date and ensuring you are using the latest packages.

- `npm audit`: Performs a security audit of your project's dependencies. It checks for known vulnerabilities in the packages you've installed and provides recommendations for updating packages to address security issues.

- `npm dedupe`: Attempts to reduce duplicate packages in the dependency tree, which can help optimize your project's size and resolve potential conflicts caused by multiple versions of the same package.

- `npm rebuild`: Rebuilds native modules used by packages in your project. This can be useful if you encounter issues related to native modules not working properly.

- `npm doctor`: Runs a series of checks to diagnose common issues in your npm environment. It provides recommendations and guidance for resolving these issues.

`rm -rf node_modules` : delete node modules

`npm cache clean --force` :

` rm package-lock.json `


## Install these dependencies
- npm install react
- npm install react-dom
- npm install react-native
- npm install react-native-gesture-handler
- npm install react-native-reanimated
- npm install react-native-screens
- npm install react-native-web
- npm install react-redux
- npm install redux
- npm install expo
- npm install babel-preset-expo
- npm install expo-crypto 
- npm install -g expo-cli
- npm install @react-navigation/native-stack
- npm install @reduxjs/toolkit
- npm install axios


- npm outdated

- npm install

- npx expo install --fix :
```
Some dependencies are incompatible with the installed expo version:
  react-native-gesture-handler@2.13.2 - expected version: ~2.12.0
  react-native-reanimated@3.5.4 - expected version: ~3.3.0
  react-native-screens@3.25.0 - expected version: ~3.22.0
Your project may not work correctly until you install the correct versions of the packages.
Fix with: npx expo install --fix
```


 "expo": {
      "dependencies": {
        "expo-crypto": "~10.1.1",
        "expo-font": "~10.0.0",
        "expo-secure-store": "~10.0.0"
      }


## use these scripts if expo is installed
"scripts": {
    "start": "expo start",
    "android": "expo start --android",
    "ios": "expo start --ios",
    "web": "expo start --web",
    "eject": "expo eject"
  }


`npm install react-native-keyevent --save react-native link react-native-keyevent`
Verify that your project has the necessary permissions to capture key events. On Android, this typically involves modifying the `AndroidManifest.xml` file to request permission to capture key events. You might need to add the following permission to the manifest:
Add this
<uses-permission android:name="android.permission.SET_DEBUG_APP