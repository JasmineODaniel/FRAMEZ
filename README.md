# Framez — React Native (Expo) + Firebase

Strictly mobile app. Dark mode with glassmorphism on #121212. Headings use Michroma. Modern icons, no kite share icon. Feed with stories, bottom create action.

## Quick start (VS Code)
1) Install Node 18.x and Git.
2) Install Expo CLI globally: npm i -g expo-cli.
3) Clone this repo, then in VS Code open the folder.
4) Terminal:

cd src/mobile
npm install

5) Add Firebase keys in src/mobile/src/firebase/config.ts (see Firebase setup below).
6) Start app: npm run start then press a for Android, i for iOS, or scan the QR with Expo Go.


## Tech choices (fixed versions, not latest)
- Expo SDK 51 line (React Native 0.74).
- Firebase JS SDK 10.x.
- React Navigation 6.x.
- React Native Image Picker and Expo FileSystem for media.
- Context API for auth state.

## Features implemented
- Auth: email/password signup, login, logout, persistent session.
- Posts: create with text and optional image; upload to Firebase Storage, store in Firestore; newest first feed.
- Feed: story bar at top; modern icons; pressed states only, no hover white flash.
- Profile: shows current user info and their posts; change profile photo; logout.
- Post details: real-time comments.

## Firebase setup
1) Go to Firebase Console → Create project → Enable Authentication (Email/Password).
2) Firestore Database → Start in test mode (for development), then create indexes if prompted.
3) Storage → Create default bucket. Add rules suitable for auth users in development.
4) Project settings → Your apps (Web) → copy config. Paste into `src/mobile/src/firebase/config.ts`:
```ts
export const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
};
```

## Run scripts
```
cd src/mobile
npm run start        # start Metro
npm run android      # run on Android emulator/device
npm run ios          # run on iOS simulator
```

## Appetize hosting
1) Install EAS: `npm i -g eas-cli` and `eas login`.
2) In `src/mobile`: `eas build -p android --profile preview`.
3) Upload the APK/AAB from the EAS build to appetize.io, copy the share link.



## Notes
- Theme: always dark, base `#121212`, glass surfaces use blur and translucency.
- Typography: Michroma for headings; system sans for body.
- Icons: Ionicons/Feather alternatives, no kite share symbol.
- The Create action is in the bottom tab; do not place a create field at the top of the feed.

## Troubleshooting
- White blank screen: ensure you are running Expo app, not the web preview. Use `npm run start` then open on emulator or Expo Go.
- Metro cache: press `r` to reload, `shift+r` to clear cache in Expo CLI.
- Android build issues: run `npx expo-doctor` inside `src/mobile`.
