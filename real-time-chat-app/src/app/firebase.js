// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOJ1Wq4b3SXqGvCznBnNMnb7NljKpiHsM",
  authDomain: "chat-app-55dd1.firebaseapp.com",
  projectId: "chat-app-55dd1",
  storageBucket: "chat-app-55dd1.appspot.com",
  messagingSenderId: "1043975551498",
  appId: "1:1043975551498:web:95d1b894b83914dd797df3",
  measurementId: "G-GRCXQJDYX6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);