// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "my-estate-aa404.firebaseapp.com",
  projectId: "my-estate-aa404",
  storageBucket: "my-estate-aa404.appspot.com",
  messagingSenderId: "177844851533",
  appId: "1:177844851533:web:0f090e446cea4ded239d04",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
