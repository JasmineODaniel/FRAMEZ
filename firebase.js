// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBytFJ0MBk6v951i64mbGlQO6pnDLieVFE",
  authDomain: "framez-hng-stage4-e94d2.firebaseapp.com",
  projectId: "framez-hng-stage4-e94d2",
  storageBucket: "framez-hng-stage4-e94d2.firebasestorage.app",
  messagingSenderId: "245639412715",
  appId: "1:245639412715:web:92ae56fe0acb12a82d37ae",
  measurementId: "G-0WT9YXW2RY",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
