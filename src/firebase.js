// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAw6uBYJ7nwhArYc8fAXuyNh1k6n2u8osQ",
  authDomain: "yt-demo-4a56c.firebaseapp.com",
  projectId: "yt-demo-4a56c",
  storageBucket: "yt-demo-4a56c.appspot.com",
  messagingSenderId: "55404516707",
  appId: "1:55404516707:web:d5198cb7f22af48d506f56"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth=firebase.auth();
const firestore=firebase.firestore();
export const database={
    pusers: firestore.collection('pusers'),
    getTimeStamp:firebase.firestore.FieldValue.serverTimestamp
}
export const storage=firebase.storage()