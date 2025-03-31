// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0GrTSEhWOLHiXXaKesplyW7RgwRuCoy4",
  authDomain: "ntuuse-9fcf7.firebaseapp.com",
  projectId: "ntuuse-9fcf7",
  storageBucket: "ntuuse-9fcf7.firebasestorage.app",
  messagingSenderId: "1042602973962",
  appId: "1:1042602973962:web:2954c9eecadd304413f8f3",
  measurementId: "G-CFT34TSEJ0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);