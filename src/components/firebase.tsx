import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyD-Z2uk5so0nD2SMZEOTi_nZ9GhtO9BIvM",
  authDomain: "osl-inventory.firebaseapp.com",
  databaseURL: "https://osl-inventory-default-rtdb.firebaseio.com",
  projectId: "osl-inventory",
  storageBucket: "osl-inventory.appspot.com",
  messagingSenderId: "1019383998460",
  appId: "1:1019383998460:web:06c3207f3be2bddd9ab479",
};
// Initialize Firebase
var fireDB = firebase.initializeApp(firebaseConfig);

export default fireDB.database().ref();
