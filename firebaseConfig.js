// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgm_6oy321UwgZCJZYwnvawwyeM6PSCU0",
  authDomain: "gaia-10194.firebaseapp.com",
  projectId: "gaia-10194",
  storageBucket: "gaia-10194.firebasestorage.app",
  messagingSenderId: "156140578409",
  appId: "1:156140578409:web:ab6a18d711571ad2ede4f8",
  measurementId: "G-NWD1KBVY94"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
