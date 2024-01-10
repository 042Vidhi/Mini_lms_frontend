/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider,
    onAuthStateChanged,
    signInWithPopup,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    updateProfile,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCfCMmhRinxawCt50PZEWXrpw-ULssc_0",
  authDomain: "lms-tinker.firebaseapp.com",
  projectId: "lms-tinker",
  storageBucket: "lms-tinker.appspot.com",
  messagingSenderId: "218985431655",
  appId: "1:218985431655:web:167e79e1234e1c5d0a4ac2",
  measurementId: "G-QB60VG9Z3Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider ,
    onAuthStateChanged,
    signInWithPopup,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    updateProfile,
};