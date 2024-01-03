// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-mern-fe829.firebaseapp.com",
  projectId: "real-estate-mern-fe829",
  storageBucket: "real-estate-mern-fe829.appspot.com",
  messagingSenderId: "379912379260",
  appId: "1:379912379260:web:d032ce78c68268628662f9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);