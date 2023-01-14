import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCeY_TBioQPwezNkwCNO1g0Vpz31da1_VM",
  authDomain: "test2-55387.firebaseapp.com",
  projectId: "test2-55387",
  storageBucket: "test2-55387.appspot.com",
  messagingSenderId: "59265601181",
  appId: "1:59265601181:web:c5e67c8ebecdb5647b0e74",
  measurementId: "G-E0GL3L384F",
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export const firestore = firebase.firestore();
