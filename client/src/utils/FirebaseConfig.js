import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyDEcAQ-eRwi7t6xkXSbarIv82xO0EP0hD8",
    authDomain: "whatsapp-clone-559e8.firebaseapp.com",
    projectId: "whatsapp-clone-559e8",
    storageBucket: "whatsapp-clone-559e8.appspot.com",
    messagingSenderId: "245875313681",
    appId: "1:245875313681:web:9477bf1a502e66d28235b0",
    measurementId: "G-3CFC4YX9YL"
  };
  const app =initializeApp(firebaseConfig);
  export const firebaseAuth = getAuth(app)