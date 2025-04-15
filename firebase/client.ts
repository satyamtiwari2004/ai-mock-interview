// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDV6aaXat9E_vqMYT3mnNdbGa2l0b3VlOo",
  authDomain: "mockprep1.firebaseapp.com",
  projectId: "mockprep1",
  storageBucket: "mockprep1.firebasestorage.app",
  messagingSenderId: "502987975609",
  appId: "1:502987975609:web:1ff163ab898f09a2b96468",
  measurementId: "G-Q7NNLXKCM8"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();




export const auth = getAuth(app);
export const db = getFirestore(app);