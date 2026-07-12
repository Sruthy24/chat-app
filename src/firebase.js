import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

  apiKey: "AIzaSyDmob29uwAN1Oke4gBD9yvBxavwihx8wVg",

  authDomain: "react-firebase-chat-1d338.firebaseapp.com",

  projectId: "react-firebase-chat-1d338",

  storageBucket: "react-firebase-chat-1d338.firebasestorage.app",

  messagingSenderId: "702279492350",

  appId: "1:702279492350:web:c27ee2ab3f3b36247a3baf",

  measurementId: "G-TNRW43CM9S"

};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
