import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  setPersistence,
  browserLocalPersistence,
  browserSessionPersistence,
  inMemoryPersistence,
} from "firebase/auth";

  const firebaseConfig = {
    apiKey: "AIzaSyDi-bQdIqWt3OsMs4KSYGtcOCfngVCrMf4",
    authDomain: "my-app-5f5bf.firebaseapp.com",
    projectId: "my-app-5f5bf",
    storageBucket: "my-app-5f5bf.appspot.com",
    messagingSenderId: "243128182736",
    appId: "1:243128182736:web:f7aa16216e7fb4d4b8bbd5",
    measurementId: "G-ZDD6ELDKNQ"
  };
// init firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// generate & export auth object
const auth = getAuth();

setPersistence(auth, browserLocalPersistence);

export { db, auth };
