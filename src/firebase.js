import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5duujkmNu6kSFyNtV25B8fyTgg1VjaLM",
  authDomain: "linkedin-clone-6d717.firebaseapp.com",
  projectId: "linkedin-clone-6d717",
  storageBucket: "linkedin-clone-6d717.appspot.com",
  messagingSenderId: "132100900293",
  appId: "1:132100900293:web:9252758f9668e5bc48b7ac",
  measurementId: "G-EY9NC1L3YT"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
