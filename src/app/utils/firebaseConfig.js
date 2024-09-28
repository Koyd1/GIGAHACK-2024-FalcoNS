// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAlB28zff9U7-TAwStQwHppk2L4sW6IW-4",
    authDomain: "test-projeect-28e1a.firebaseapp.com",
    projectId: "test-projeect-28e1a",
    storageBucket: "test-projeect-28e1a.appspot.com",
    messagingSenderId: "561118134471",
    appId: "1:561118134471:web:4e9a1e5bdab9e73414fee2",
    measurementId: "G-Y738YG7WT6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebase = getFirestore();
// const analytics = getAnalytics(app);