import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

let REACT_APP_FIREBASE_API_KEY = "AIzaSyApQF_dZ0wIjrz5fKqLR-Z0gows0mjWl98";
let REACT_APP_FIREBASE_AUTH_DOMAIN = "netflix-clone-7eb56.firebaseapp.com";
let REACT_APP_FIREBASE_PROJECT_ID = "netflix-clone-7eb56";
let REACT_APP_FIREBASE_STORAGE_BUCKET = "netflix-clone-7eb56.appspot.com";
let REACT_APP_MESSAGING_SENDER = "113321329211";
let REACT_APP_APP_ID = "1:113321329211:web:9083d9000b9f0256f0d21e";

const firebaseConfig = {
  apiKey: REACT_APP_FIREBASE_API_KEY,
  authDomain: REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: REACT_APP_MESSAGING_SENDER,
  appId: REACT_APP_APP_ID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
