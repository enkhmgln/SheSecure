import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiDFmmOA7Ro55FBZiyCFBrbBGViztMJgI",
  authDomain: "she-4e61b.firebaseapp.com",
  projectId: "she-4e61b",
  storageBucket: "she-4e61b.appspot.com",
  messagingSenderId: "367565999716",
  appId: "1:367565999716:web:75f7ce87fedc60dac41971"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// // Your web app's Firebase configuration


// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();