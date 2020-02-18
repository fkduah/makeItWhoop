import firebase, { auth, firestore } from "firebase/app";
import "firebase/auth";
import "firebase/firebase-firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

class Firebase {
  constructor() {
    firebase.initializeApp(firebaseConfig);
  }
  // Auth New Users And Add To A Collection
  authUser = (email, password, collection, fields) => {
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
  signOutUser = () => {
    firebase
      .auth()
      .signOut()
      .then(() => console.log("user logged out"));
  };

  // Login Users
  signInUser = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword()
      .then(cred => {
        console.log(cred);
        return cred;
      });
  };

  // listen to auth status change

  userLoginWatch = updateState => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        updateState(true);
      } else {
        updateState(false);
      }
    });
  };
}

export default Firebase;
