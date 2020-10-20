import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJ_eewYQbVMv94hnVhWacqJpa-t6V3xO8",
  authDomain: "clone-f790b.firebaseapp.com",
  databaseURL: "https://clone-f790b.firebaseio.com",
  projectId: "clone-f790b",
  storageBucket: "clone-f790b.appspot.com",
  messagingSenderId: "774079464058",
  appId: "1:774079464058:web:500d7dc24c84a46618f1c3",
  measurementId: "G-D01T0QTJ72",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export {db, auth};
