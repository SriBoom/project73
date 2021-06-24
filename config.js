import firebase from 'firebase'
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyA0hCRcul5xnIy1jnSqldAGaOsrhJARuJ0",
  authDomain: "story-hub-1c72c.firebaseapp.com",
  projectId: "story-hub-1c72c",
  storageBucket: "story-hub-1c72c.appspot.com",
  messagingSenderId: "694452336057",
  appId: "1:694452336057:web:221943a2d381b2c1f53268"
};

  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();