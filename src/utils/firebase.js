// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDaAdTznz6lkE0vqwOGNqGTldlxlsG3OMs",
  authDomain: "netflixgpt-e6378.firebaseapp.com",
  projectId: "netflixgpt-e6378",
  storageBucket: "netflixgpt-e6378.appspot.com",
  messagingSenderId: "830149096763",
  appId: "1:830149096763:web:5a5b4c7e1f1ed8b659b31e",
  measurementId: "G-BS1RVB9S4F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);