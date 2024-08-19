// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9m4SSHcpNYLtWiIifp1YTbYnHcZ-B8IU",
  authDomain: "mobile-store-212d5.firebaseapp.com",
  projectId: "mobile-store-212d5",
  storageBucket: "mobile-store-212d5.appspot.com",
  messagingSenderId: "944173092638",
  appId: "1:944173092638:web:be97a5f7ae35519707830f",
  measurementId: "G-EVLRRE1KRD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;