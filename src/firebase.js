// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9SY4mNfXVIB5w1uaE6hlGMeFO-A3TnmA",
  authDomain: "my-react-project-b29d1.firebaseapp.com",
  projectId: "my-react-project-b29d1",
  storageBucket: "my-react-project-b29d1.firebasestorage.app",
  messagingSenderId: "320349316189",
  appId: "1:320349316189:web:8b09632ab74850d69359b4",
  measurementId: "G-T61VYF3CXN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);