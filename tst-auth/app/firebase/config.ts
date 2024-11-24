import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCF0BZFm6ugt4zPt2wZF_R45YBIvR6f2MI",
  authDomain: "tst-auth-95a7b.firebaseapp.com",
  projectId: "tst-auth-95a7b",
  storageBucket: "tst-auth-95a7b.firebasestorage.app",
  messagingSenderId: "1019391304676",
  appId: "1:1019391304676:web:39250b34d783f64c911df1"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { app, auth, googleProvider };