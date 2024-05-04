// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1v1l124JvrZT8dXbHMPZCAS6hYs1qUTg",
  authDomain: "it-sysarch32-store-herbias.firebaseapp.com",
  projectId: "it-sysarch32-store-herbias",
  storageBucket: "it-sysarch32-store-herbias.appspot.com",
  messagingSenderId: "742693879570",
  appId: "1:742693879570:web:cdfe174674493beb61bdcb",
  measurementId: "G-VQF03K2RC7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const storage = getStorage(app);
