import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKbotsNu2ORve11mQ3zfnC_ONW5M0A3y0",
  authDomain: "crud-react-redux-94990.firebaseapp.com",
  projectId: "crud-react-redux-94990",
  storageBucket: "crud-react-redux-94990.appspot.com",
  messagingSenderId: "665938816191",
  appId: "1:665938816191:web:b18ddb00854cc4c3f9ea0a",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, db, googleAuthProvider };
