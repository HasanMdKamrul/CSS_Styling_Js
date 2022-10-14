// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtsqh9XqbXV9FMxy-1528oFwLiTOIsMII",
  authDomain: "pop-up-auth.firebaseapp.com",
  projectId: "pop-up-auth",
  storageBucket: "pop-up-auth.appspot.com",
  messagingSenderId: "54986680160",
  appId: "1:54986680160:web:ceea0f498461c413492005"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;