// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALG1JOt9W2lkKvpfevdwo8JMCrLkepPws",
  authDomain: "stackoverflow-73e92.firebaseapp.com",
  projectId: "stackoverflow-73e92",
  storageBucket: "stackoverflow-73e92.appspot.com",
  messagingSenderId: "371413090975",
  appId: "1:371413090975:web:f4d1a7abbd7312478358aa",
  measurementId: "G-9XB8JKDBM7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();