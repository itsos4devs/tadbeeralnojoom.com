import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA2kbz0iWHhe3B17p_XbEFD9_Hlm1vrv9g",
  authDomain: "test-11c0b.firebaseapp.com",
  projectId: "test-11c0b",
  storageBucket: "test-11c0b.appspot.com",
  messagingSenderId: "1003199964874",
  appId: "1:1003199964874:web:5b391991b6901dc93ab633",
  measurementId: "G-1KXSWPQNLZ",
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export const firestore = firebase.firestore();
