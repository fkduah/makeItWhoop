import firebase, { auth, firestore } from "firebase/app";
import "firebase/auth";
import "firebase/firebase-firestore";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
//   databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
//   measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
// };

const firebaseConfig = {
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

// Auth New Users And Add To A Collection
export const authUser = (email, password, collection, fields) => {
  auth()
    .createUserWithEmailAndPassword(email, password)
    .then(cred => {
      firestore()
        .collection(collection)
        .doc(cred.user.uid)
        .set(fields);
    });
};

// Sign Out Users
export const signOutUser = () => {
  firebase
    .auth()
    .signOut()
    .then(() => console.log("user logged out"));
};

// Login Users
export const signInUser = () => {
  firebase
    .auth()
    .signInWithEmailAndPassword()
    .then(cred => {
      console.log(cred);
      return cred;
    });
};

// listen to auth status change

export const userLoginWatch = updateState => {
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      updateState(true);
    } else {
      updateState(false);
    }
  });
};
