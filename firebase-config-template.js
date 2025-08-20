// Firebase Configuration Template
// INSTRUCTIONS: Replace the placeholder values below with your actual Firebase project configuration
// Get these values from: Firebase Console → Project Settings → General → Your apps → Web app

const firebaseConfig = {
    // Replace with your actual API key from Firebase Console
    apiKey: "your-api-key-here",
    
    // Replace with your actual auth domain (usually: your-project-id.firebaseapp.com)
    authDomain: "your-project-id.firebaseapp.com",
    
    // Replace with your actual project ID from Firebase Console
    projectId: "your-project-id",
    
    // Replace with your actual storage bucket (usually: your-project-id.appspot.com)
    storageBucket: "your-project-id.appspot.com",
    
    // Replace with your actual messaging sender ID
    messagingSenderId: "your-sender-id",
    
    // Replace with your actual app ID
    appId: "your-app-id"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firestore
const db = firebase.firestore();

// Firebase Database Helper Functions
const FirebaseDB = {
    // Get family data
    async getFamilyData(familyId) {
        try {
            const doc = await db.collection('families').doc(familyId).get();
            if (doc.exists) {
                return doc.data();
            } else {
                return null;
            }
        } catch (error) {
            console.error('Error getting family data:', error);
            throw error;
        }
    },

    // Save family data
    async saveFamilyData(familyId, data) {
        try {
            await db.collection('families').doc(familyId).set(data, { merge: true });
            return true;
        } catch (error) {
            console.error('Error saving family data:', error);
            throw error;
        }
    },

    // Listen to real-time updates
    listenToFamilyData(familyId, callback) {
        return db.collection('families').doc(familyId).onSnapshot((doc) => {
            if (doc.exists) {
                callback(doc.data());
            }
        }, (error) => {
            console.error('Error listening to family data:', error);
        });
    },

    // Create new family
    async createFamily(familyData) {
        try {
            const docRef = await db.collection('families').add(familyData);
            return docRef.id;
        } catch (error) {
            console.error('Error creating family:', error);
            throw error;
        }
    },

    // Check if family exists
    async familyExists(familyId) {
        try {
            const doc = await db.collection('families').doc(familyId).get();
            return doc.exists;
        } catch (error) {
            console.error('Error checking family existence:', error);
            return false;
        }
    }
};

// Export for use in other files
window.FirebaseDB = FirebaseDB;
