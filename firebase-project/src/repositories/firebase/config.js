

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuM2cHz5SLyCsTAHJqqQmAX6XCDO9-FuY",
  authDomain: "mipro-1dd2f.firebaseapp.com",
  projectId: "mipro-1dd2f",
  storageBucket: "mipro-1dd2f.firebasestorage.app",
  messagingSenderId: "166728730184",
  appId: "1:166728730184:web:6caf9b54c5e61ea7647a7d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);