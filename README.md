# Dzeparac - Mobile Money-Saving App for Kids

Dzeparac is a mobile-optimized web application designed for families in ex-Yugoslavia to help kids learn money management through chores and savings goals. Parents act as the "bank" and can assign tasks, while kids can earn money and save towards their goals.

## Features

- **Multi-language Support**: Serbian, Croatian, Bosnian, and Montenegrin
- **Multi-currency Support**: RSD, EUR, KM
- **Task Management**: Parents can create and assign chores to children
- **Negotiation System**: Optional bidirectional negotiation between parents and children
- **Savings Goals**: Kids can set and track progress towards savings goals
- **Real-time Synchronization**: Multiple family members can use the app simultaneously
- **PIN Protection**: Secure parent access with 4-digit PIN
- **Transaction History**: Complete history of all earnings and payments

## Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Backend**: Firebase Firestore (NoSQL database)
- **Real-time Updates**: Firebase real-time listeners
- **Authentication**: Custom PIN-based system
- **Hosting**: Can be hosted on any static web server

## Firebase Setup Instructions

### 1. Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project" or "Add project"
3. Enter project name (e.g., "dzeparac-app")
4. Choose whether to enable Google Analytics (optional)
5. Click "Create project"

### 2. Enable Firestore Database

1. In your Firebase project console, click "Firestore Database"
2. Click "Create database"
3. Choose "Start in test mode" (for development) or "Start in production mode"
4. Select a location for your database (choose closest to your users)
5. Click "Done"

### 3. Get Firebase Configuration

1. In your Firebase project console, click the gear icon (⚙️) and select "Project settings"
2. Scroll down to "Your apps" section
3. Click the web icon (`</>`) to add a web app
4. Enter app nickname (e.g., "Dzeparac Web App")
5. Click "Register app"
6. Copy the Firebase configuration object

### 4. Configure the Application

1. Open `firebase-config.js` file
2. Replace the placeholder configuration with your Firebase config:

```javascript
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "your-api-key-here",
  authDomain: "your-project-id.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project-id.appspot.com",
  messagingSenderId: "123456789",
  appId: "your-app-id-here"
};
```

### 5. Set Up Firestore Security Rules

In the Firebase Console, go to Firestore Database > Rules and update the rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow read/write access to family documents
    match /families/{familyId} {
      allow read, write: if true; // For development - restrict in production
    }
  }
}
```

**Important**: The above rules are for development only. For production, implement proper security rules based on your authentication system.

### 6. Firebase Free Tier Limits

The Firebase Spark (free) plan includes:
- **Firestore**: 1 GiB storage, 50,000 reads/day, 20,000 writes/day
- **Hosting**: 10 GB storage, 10 GB/month transfer
- **Functions**: 125,000 invocations/month

This is more than sufficient for family use of the Dzeparac app.

## Installation and Setup

### 1. Download the Application

Clone or download all the application files:
- `index.html`
- `styles.css`
- `script.js`
- `firebase-config.js`

### 2. Configure Firebase

Follow the Firebase setup instructions above to configure `firebase-config.js`.

### 3. Host the Application

You can host the application using:

**Option A: Firebase Hosting (Recommended)**
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
firebase deploy
```

**Option B: Local Development Server**
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx http-server

# Using PHP
php -S localhost:8000
```

**Option C: Any Static Web Host**
Upload all files to any web hosting service that supports static websites.

### 4. Access the Application

Open your web browser and navigate to your hosted application URL.

## Usage Instructions

### Initial Setup

1. **Language and Currency**: Choose your preferred language and currency
2. **Parent PIN**: Set a 4-digit PIN for parent access
3. **Negotiation Mode**: Enable/disable task negotiation feature
4. **Add Children**: Add family members who will use the app

### For Parents

1. **Access Parent Dashboard**: Click "Roditelj" and enter your PIN
2. **Manage Tasks**: Create, assign, and delete chores
3. **Manage Children**: Add new children, edit balances, view activity
4. **Review History**: View all transactions and payments
5. **Settings**: Change language, currency, PIN, or negotiation settings

### For Children

1. **Select Your Name**: Choose your profile from the main screen
2. **Set Goals**: Define what you're saving money for
3. **View Available Tasks**: See tasks you can accept or negotiate
4. **Complete Tasks**: Mark tasks as completed when finished
5. **Track Progress**: Monitor your balance and goal progress

### Task Negotiation (Optional)

When negotiation is enabled:
1. **Children** can propose different amounts or deadlines for open tasks
2. **Parents** can accept, reject, or counter-propose
3. **Bidirectional negotiation** continues until both parties agree
4. **Final agreement** assigns the task with agreed terms

## Real-time Synchronization

The app uses Firebase real-time listeners to synchronize data across all devices:
- **Instant Updates**: Changes appear immediately on all connected devices
- **Conflict Resolution**: Firebase handles concurrent updates automatically
- **Offline Support**: Basic offline functionality with sync when reconnected

## Family ID System

Each family gets a unique ID when first setting up the app:
- **Automatic Generation**: Family ID is created during initial setup
- **Persistent Storage**: ID is saved locally for future sessions
- **Multi-device Access**: Same family can access data from multiple devices
- **Data Isolation**: Each family's data is completely separate

## Troubleshooting

### Common Issues

**App doesn't load or shows errors:**
- Check that Firebase configuration is correct in `firebase-config.js`
- Verify that Firestore is enabled in your Firebase project
- Check browser console for error messages

**Data not syncing between devices:**
- Ensure all devices are using the same family ID
- Check internet connection
- Verify Firestore security rules allow read/write access

**Can't complete setup:**
- Make sure all required fields are filled
- Check that PIN is exactly 4 digits
- Verify Firebase project is properly configured

### Browser Compatibility

The app is compatible with:
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

### Mobile Optimization

The app is fully optimized for mobile devices:
- Responsive design works on all screen sizes
- Touch-friendly interface
- Fast loading and smooth animations
- Offline-capable with service worker (optional enhancement)

## Security Considerations

### For Development
- Test mode Firestore rules allow all access
- Family data is isolated by unique family ID
- PIN protection for parent functions

### For Production
- Implement proper Firestore security rules
- Consider adding user authentication
- Use HTTPS for all connections
- Regular security audits recommended

## Support and Contributions

This is an open-source project designed to help families teach financial literacy to children. 

### Contributing
- Report bugs and issues
- Suggest new features
- Submit pull requests
- Improve documentation

### License
This project is released under the MIT License.

## Version History

### v2.0.0 (Current)
- Firebase integration for real-time multi-user support
- Family ID system for data isolation
- Real-time synchronization across devices
- Improved error handling and user feedback

### v1.0.0
- Initial release with localStorage
- Basic task management and negotiation
- Multi-language and currency support
- Mobile-optimized interface

---

**Dzeparac** - Teaching kids the value of money, one chore at a time! 💰👨‍👩‍👧‍👦
