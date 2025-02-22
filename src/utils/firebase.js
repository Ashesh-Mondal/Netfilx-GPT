// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3KMGdILOyXoFmnFLf290XEs0bJoXQPQ0",
  authDomain: "netflixgpt-95ee3.firebaseapp.com",
  projectId: "netflixgpt-95ee3",
  storageBucket: "netflixgpt-95ee3.firebasestorage.app",
  messagingSenderId: "468595073244",
  appId: "1:468595073244:web:b30f6158ddf52e6ed81419",
  measurementId: "G-BQXVDPHNR7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
