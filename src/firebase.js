import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firebase-firestore";

// var firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
//   databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
//   measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
// };

var firebaseConfig = {
  apiKey: "AIzaSyDhKXheZxEU2Oa-otJHJ32B7SbwfibKE4Q",
  authDomain: "make-it-whoop.firebaseapp.com",
  databaseURL: "https://make-it-whoop.firebaseio.com",
  projectId: "make-it-whoop",
  storageBucket: "make-it-whoop.appspot.com",
  messagingSenderId: "216533056866",
  appId: "1:216533056866:web:5bd963dac19643f20cc03b",
  measurementId: "G-T4EXQPLX0E"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export default firebase;
