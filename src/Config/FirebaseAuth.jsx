import React from "react";
import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDwpqppi1ux6dcdAuTbj9oVMlsLBa85wrI",
  authDomain: "castlewood-ecommerce.firebaseapp.com",
  databaseURL: "https://castlewood-ecommerce.firebaseio.com",
  projectId: "castlewood-ecommerce",
  storageBucket: "castlewood-ecommerce.appspot.com",
  messagingSenderId: "49154927734",
  appId: "1:49154927734:web:807f68aea29690f9528357",
  measurementId: "G-HCK0Y0H8T2",
};
const fire = firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default fire;