// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjAxPxe2MfJ1ubOfG4_kVhrpXoIV5c1js",
  authDomain: "safe-tour-29d6d.firebaseapp.com",
  projectId: "safe-tour-29d6d",
  storageBucket: "safe-tour-29d6d.firebasestorage.app",
  messagingSenderId: "581532445336",
  appId: "1:581532445336:web:04994abbe279702e3d3eed",
  measurementId: "G-G8J5HYD6C7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app; 