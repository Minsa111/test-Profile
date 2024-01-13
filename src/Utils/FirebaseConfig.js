// Import the functions you need from the SDKs you need
import { getFirestore } from "@firebase/firestore";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3TpWyF_q6cJ0daorOE9RYtlmpUJQFWUs",
  authDomain: "profile-92597.firebaseapp.com",
  projectId: "profile-92597",
  storageBucket: "profile-92597.appspot.com",
  messagingSenderId: "797873017157",
  appId: "1:797873017157:web:8bfa484f2dec7443852e2c",
  measurementId: "G-HHFGYTWVTJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
