import firebase from 'firebase';
require('@firebase/firestore')
const firebaseConfig = {
    apiKey: "AIzaSyDs8DBX8G1vLiP7aAa_PJQSxIghYSpACyQ",
    authDomain: "book-santa-e302f.firebaseapp.com",
    projectId: "book-santa-e302f",
    storageBucket: "book-santa-e302f.appspot.com",
    messagingSenderId: "185593686219",
    appId: "1:185593686219:web:4e33fd6bf6a8dc7216534e"
  };
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig); 
  export default firebase.firestore();