// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "propertysite-mern.firebaseapp.com",
  projectId: "propertysite-mern",
  storageBucket: "propertysite-mern.appspot.com",
  messagingSenderId: "357393667730",
  appId: "1:357393667730:web:68a891013d9067510a784b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);