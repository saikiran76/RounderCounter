// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBM68gJPfVoogS4bdExSWlw6M3JRrRDokw",
  authDomain: "counter-4be29.firebaseapp.com",
  projectId: "counter-4be29",
  storageBucket: "counter-4be29.appspot.com",
  messagingSenderId: "1079246266104",
  appId: "1:1079246266104:web:5f52730447b886da67650d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
auth.languageCode = 'en';
export const provider = new GoogleAuthProvider();
