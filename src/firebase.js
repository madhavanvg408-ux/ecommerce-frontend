// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSBtjRzHIDp1ifLYW7lDL6jQULSKOmcIY",
  authDomain: "ecommerce-prod-9e7b1.firebaseapp.com",
  projectId: "ecommerce-prod-9e7b1",
  storageBucket: "ecommerce-prod-9e7b1.firebasestorage.app",
  messagingSenderId: "118302906247",
  appId: "1:118302906247:web:070bc52de37ae2d15fe522",
  measurementId: "G-V1JD1LN9TK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
