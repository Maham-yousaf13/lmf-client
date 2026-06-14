import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAwFsbZGJYHEnQ3bVx9BCY0lfcrrfLt61Y",
  authDomain: "lmf-database.firebaseapp.com",
  projectId: "lmf-database",
  storageBucket: "lmf-database.firebasestorage.app",
  messagingSenderId: "1028463851972",
  appId: "1:1028463851972:web:97c8f79b2fa86b5a048c91",
  measurementId: "G-GRVZYTKZ3G"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// THESE ARE THE CRITICAL EXPORTS
export const db = getFirestore(app);
export const auth = getAuth(app);