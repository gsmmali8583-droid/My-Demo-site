// Import the functions you need from Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getFirestore, addDoc, collection } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQ0RkjcAZc46pzI67LuYHD_-Sv1Cx4tR4",
  authDomain: "testing-52280.firebaseapp.com",
  projectId: "testing-52280",
  storageBucket: "testing-52280.firebasestorage.app",
  messagingSenderId: "206943290940",
  appId: "1:206943290940:web:95c42a09e86b614ddd2539",
  measurementId: "G-1WVYD18RT8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Initialize Firestore

// Function to save user data
export async function saveUser(data) {
  try {
    console.log('Firebase config:', firebaseConfig.projectId);
    console.log('Attempting to save to Firestore...');
    // Add a new document to "users" collection
    const docRef = await addDoc(collection(db, "users"), data);
    console.log('Document written with ID: ', docRef.id);
    return { success: true };
  } catch (error) {
    console.error('Firebase error details:', error);
    return { success: false, error: error.message };
  }
}
