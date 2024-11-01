
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7BrTbyiraTKzvXKnh10y0eQK_CZBlI7Q",
  authDomain: "dreem-house-d4818.firebaseapp.com",
  projectId: "dreem-house-d4818",
  storageBucket: "dreem-house-d4818.firebasestorage.app",
  messagingSenderId: "87256911707",
  appId: "1:87256911707:web:4dda5a42996cd80bdf947e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
