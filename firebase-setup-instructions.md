# Firebase Setup Instructions for Džeparac App

## The Problem
Your Firebase configuration is currently using placeholder values:
- `projectId: "your-project-id"`
- `apiKey: "your-api-key-here"`
- etc.

This causes the 400 Bad Request error because Firebase is trying to connect to a non-existent project.

## Solution Steps

### 1. Create a Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project" or "Add project"
3. Enter a project name (e.g., "dzeparac-app")
4. Follow the setup wizard

### 2. Enable Firestore Database
1. In your Firebase project, go to "Firestore Database"
2. Click "Create database"
3. Choose "Start in test mode" (for development)
4. Select a location close to your users

### 3. Get Your Firebase Configuration
1. In Firebase Console, click the gear icon → "Project settings"
2. Scroll down to "Your apps" section
3. Click "Web app" icon (</>) to add a web app
4. Register your app with a name (e.g., "Dzeparac Web")
5. Copy the configuration object that looks like this:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyC...",
  authDomain: "your-project-id.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project-id.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef123456"
};
```

### 4. Update Your firebase-config.js
Replace the placeholder values in your `firebase-config.js` file with the real values from step 3.

### 5. Set Firestore Security Rules (Optional but Recommended)
In Firebase Console → Firestore Database → Rules, you can set up security rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow read/write access to all documents for now (development only)
    match /{document=**} {
      allow read, write: if true;
    }
  }
}
```

**Note:** The above rules allow anyone to read/write your database. For production, you should implement proper authentication and security rules.

## After Setup
Once you update your Firebase configuration with real values, your app should work properly and the 400 Bad Request error will be resolved.

## Need Help?
If you need help with any of these steps, let me know and I can guide you through the specific step you're having trouble with.
