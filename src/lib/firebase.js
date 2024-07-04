import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyABegL8IlhVK3dsyrZU60wwhSFWOfyG7cI",
  authDomain: "react-fire-c5066.firebaseapp.com",
  projectId: "react-fire-c5066",
  storageBucket: "react-fire-c5066.appspot.com",
  messagingSenderId: "145123578226",
  appId: "1:145123578226:web:ed6714f2d84ce2410c8deb",
  measurementId: "G-HKWYQR6SZ7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()