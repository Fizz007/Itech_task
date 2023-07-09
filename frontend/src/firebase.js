import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBiWyaXng2rxN_e5vAk5CxoYb-p0yOAoXM",
  authDomain: "bhoomi-1d78a.firebaseapp.com",
  projectId: "bhoomi-1d78a",
  storageBucket: "bhoomi-1d78a.appspot.com",
  messagingSenderId: "993524743404",
  appId: "1:993524743404:web:8563ca898152eabc0e79c9"
  };

  const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const database = getFirestore(app);