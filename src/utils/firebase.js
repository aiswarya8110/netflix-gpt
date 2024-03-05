// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMqW4_jLxoy-tlT5xH4ZFmCCPA5X8T2Z8",
  authDomain: "netflix-gpt-search.firebaseapp.com",
  projectId: "netflix-gpt-search",
  storageBucket: "netflix-gpt-search.appspot.com",
  messagingSenderId: "236501789269",
  appId: "1:236501789269:web:af57f9c6473c80e9e382dc",
  measurementId: "G-CLRZM3FER1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth();