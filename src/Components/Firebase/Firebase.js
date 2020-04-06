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
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

class Firebase {
  constructor() {
    firebase.initializeApp(firebaseConfig);
  }
  // Auth New Users And Add To A Collection
  authUser = (email, password, collection, fields) => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then((cred) => {
        firestore().collection(collection).doc(cred.user.uid).set(fields);
      })
      .catch((e) => console.log(e));
  };

  // Sign Out Users
  signOutUser = () => {
    firebase
      .auth()
      .signOut()
      .then(() => console.log("user logged out"));
  };

  // Login Users
  signInUser = (email, password, stateUpdate) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((cred) => {
        console.log(cred);
        return cred;
      })
      .catch((e) => {
        stateUpdate(
          `We Are Unable To Find Your Account. Please try Again Or Contact www.makeitwhoop@gmail.com To Create An Account`
        );
        console.log(e.code);
      });
  };

  // listen to auth status change

  userLoginWatch = (updateState) => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        updateState(true);
      } else {
        updateState(false);
      }
    });
  };

  // Get Collection Of Players
  list = (collection, stateUpdate) => {
    firestore()
      .collection(collection)
      .onSnapshot((snapShot) => {
        const newList = snapShot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        stateUpdate(newList);
      });
  };
}

export default Firebase;
