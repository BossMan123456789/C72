import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDU1HpaezA4XMx-8YyL2LNhxg-IhpI1JUQ",
  authDomain: "wireless-library-f77b7.firebaseapp.com",
  projectId: "wireless-library-f77b7",
  storageBucket: "wireless-library-f77b7.appspot.com",
  messagingSenderId: "974535865515",
  appId: "1:974535865515:web:67e14c7ae15995594773ee"
};
firebase.initializeApp(firebaseConfig)
export default firebase.firestore()