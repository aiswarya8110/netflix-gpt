// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnOqWLePKPFjdWkPYwiIC2u3NimOz86WI",
  authDomain: "netflix-gpt-4639a.firebaseapp.com",
  projectId: "netflix-gpt-4639a",
  storageBucket: "netflix-gpt-4639a.appspot.com",
  messagingSenderId: "710341724531",
  appId: "1:710341724531:web:8b40d1195263403a1ddd06",
  measurementId: "G-ZHG62TK185"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth();