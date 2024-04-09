// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "mern-blog-9c309.firebaseapp.com",
    projectId: "mern-blog-9c309",
    storageBucket: "mern-blog-9c309.appspot.com",
    messagingSenderId: "955429275889",
    appId: "1:955429275889:web:a45671719893847ff0c150",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
