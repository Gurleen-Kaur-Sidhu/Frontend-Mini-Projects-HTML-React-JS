// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeL2e891csNT3x7ZSYgbCPFH-pqrQY6Jw",
  authDomain: "clone-c7192.firebaseapp.com",
  projectId: "clone-c7192",
  storageBucket: "clone-c7192.appspot.com",
  messagingSenderId: "994024439975",
  appId: "1:994024439975:web:d6fc85c63b448fcd9e1b82"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore(app)
export default app;