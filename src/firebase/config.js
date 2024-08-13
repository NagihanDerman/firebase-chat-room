// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1Bx9CB2gqhfOUW9UARWK9Kf_Nme58gqs",
  authDomain: "chatapp-a0d5f.firebaseapp.com",
  projectId: "chatapp-a0d5f",
  storageBucket: "chatapp-a0d5f.appspot.com",
  messagingSenderId: "871307373449",
  appId: "1:871307373449:web:c089289f3f67420b9e0f58",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// authentication hizmetinin referansını al
export const auth = getAuth(app);

// google sağlayıcısının kurlumunu yap
export const provider = new GoogleAuthProvider();

// veritabanı hizmetinin referansını alma
export const db = getFirestore(app);
