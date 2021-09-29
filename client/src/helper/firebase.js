// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
//import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyBL8aVYLFnPg9LQ0Lb7bbYABegVNJDpyv8",
  authDomain: "fir-m-s-e0778.firebaseapp.com",
  projectId: "fir-m-s-e0778",
  storageBucket: "fir-m-s-e0778.appspot.com",
  messagingSenderId: "790204484147",
  appId: "1:790204484147:web:e2b7eeecb954bcd6c63146"
};


const app = initializeApp(firebaseConfig);

 export default getFirestore();


