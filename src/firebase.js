import firebase from "firebase/compat/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCjN0NTOTzHFIc29S_h-gaIwo-TzM0UgJs",
    authDomain: "sparta-react-a8c23.firebaseapp.com",
    projectId: "sparta-react-a8c23",
    storageBucket: "sparta-react-a8c23.appspot.com",
    messagingSenderId: "1089668661209",
    appId: "1:1089668661209:web:1e0adaf696571b40bca3c8",
    measurementId: "G-5LEHQSWJ4C"
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

export { firestore };