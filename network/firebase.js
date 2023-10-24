// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbRENDWezB6GGMwdHQ2O1axPDhARGvdAo",
  authDomain: "nacpatin.firebaseapp.com",
  projectId: "nacpatin",
  storageBucket: "nacpatin.appspot.com",
  messagingSenderId: "77405871643",
  appId: "1:77405871643:web:4e911ede6ae96d3af762be",
  measurementId: "G-XB7CE2JBW8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);