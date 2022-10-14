// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDswCqaKMzXqL2sbGqfMFCjlRcGAYsXhQE",
  authDomain: "practice-authentication-a4e4d.firebaseapp.com",
  projectId: "practice-authentication-a4e4d",
  storageBucket: "practice-authentication-a4e4d.appspot.com",
  messagingSenderId: "167460524592",
  appId: "1:167460524592:web:0fbaaa6e9c8c43787ad3f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;