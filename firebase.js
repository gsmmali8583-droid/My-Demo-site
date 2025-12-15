// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);