// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC86tPny-vxvogjKk2DeEZmH7_6qIJLyCA",
  authDomain: "ivethjuma.firebaseapp.com",
  projectId: "ivethjuma",
  storageBucket: "ivethjuma.appspot.com",
  messagingSenderId: "267706188329",
  appId: "1:267706188329:web:356e5d994363cd38671238",
  measurementId: "G-SWXX34FQ0Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);