// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: process.env.FIREBASE_APIKEY,

  authDomain: "gfl-blog-398214.firebaseapp.com",

  projectId: "gfl-blog-398214",

  storageBucket: "gfl-blog-398214.appspot.com",

  messagingSenderId: "377447274569",

  appId: "1:377447274569:web:37a0141eadea9760744798",

  measurementId: "G-CD076CD6W1"

};


// Initialize Firebase

export const app = initializeApp(firebaseConfig);
