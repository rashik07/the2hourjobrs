import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBe2KsskdoNooyeRTTWFbMTf5n7FiKbs9I",
  authDomain: "hoursjob-423c0.firebaseapp.com",
  projectId: "hoursjob-423c0",
  storageBucket: "hoursjob-423c0.appspot.com",
  messagingSenderId: "18745558676",
  appId: "1:18745558676:web:64330f8cd203ba05521681",
  measurementId: "G-ZNZ21KP8J8",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.getAnalytics();

export default firebase;
