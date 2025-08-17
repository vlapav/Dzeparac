// Firebase Configuration
// Replace these values with your actual Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyBHJHeTIaCkMzB44ap0o9vLbk_8QvVpgm0",
    authDomain: "dzeparac-9f95c.firebaseapp.com",
    projectId: "dzeparac-9f95c",
    storageBucket: "dzeparac-9f95c.firebasestorage.app",
    messagingSenderId: "1060424296477",
    appId: "1:1060424296477:web:983a2908fe8868947dfef4",
    measurementId: "G-SJ8J84VJVE"
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
