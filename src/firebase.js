import firebase from "firebase/app";
import "firebase/auth";

const REACT_APP_FIREBASE_API_KEY = "AIzaSyAIEoWJ7h4wbn0x-qkf3MKLI05TllJRnhM";
const REACT_APP_FIREBASE_AUTH_DOMAIN = "auth-development-ba6e6.firebaseapp.com";
const REACT_APP_FIREBASE_PROJECT_ID = "auth-development-ba6e6";
const REACT_APP_FIREBASE_STORAGE_BUCKET = "auth-development-ba6e6.appspot.com";
const REACT_APP_FIREBASE_MESSAGING_SENDER_ID = "581332845681";
const REACT_APP_FIREBASE_APP_ID = "1:581332845681:web:363a2529acb8451c9d47d0";

const app = firebase.initializeApp({
    apiKey: REACT_APP_FIREBASE_API_KEY,
    authDomain: REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: REACT_APP_FIREBASE_APP_ID,
});

export const auth = app.auth();
export default app;
