/* eslint-disable react-hooks/rules-of-hooks */
import firebase from "firebase/compat/app";
import { getDatabase, ref, push, child } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyA2hLpEofnq_10-mhAHtFfWenOzB1QueeU",
  authDomain: "test3-5f561.firebaseapp.com",
  databaseURL:
    "https://test3-5f561-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "test3-5f561",
  storageBucket: "test3-5f561.appspot.com",
  messagingSenderId: "5594822092",
  appId: "1:5594822092:web:7ee5a518e4eb98c1ef1969",
};
let fireApp;
if (!firebase.apps.length) {
  fireApp = firebase.initializeApp(firebaseConfig);
}
const database = getDatabase(fireApp);
let roomId;
let dbRef = ref(database, "server/saving-data/fireblog");
if (roomId) {
  dbRef = dbRef.child(roomId);
} else {
  dbRef = push(child(ref(database), "calls"));
}

export const userName = "Karim";

export default dbRef;
