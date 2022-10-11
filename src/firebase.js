// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpdhNQ7YYKJ3tjfWu3AOjdlFo7dct3HgM",
  authDomain: "chatkarobymanish.firebaseapp.com",
  projectId: "chatkarobymanish",
  storageBucket: "chatkarobymanish.appspot.com",
  messagingSenderId: "272518507514",
  appId: "1:272518507514:web:c2116ff414d634cae0d243",
  measurementId: "G-PGFYPZEFEK"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
