import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAwFsbZGJYHEnQ3bVx9BCY0lfcrrfLt61Y",
  authDomain: "lmf-database.firebaseapp.com",
  projectId: "lmf-database",
  storageBucket: "lmf-database.firebasestorage.app",
  messagingSenderId: "1028463851972",
  appId: "1:1028463851972:web:97c8f79b2fa86b5a048c91",
  measurementId: "G-GRVZYTKZ3G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Database export karo taake hum isay Components mein use kar sakein
export const db = getFirestore(app);