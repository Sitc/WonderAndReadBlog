import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyAObbylfwgaraITlfm8HJ_SG2MB8SIcsEk",
  authDomain: "wonderandreadblog.firebaseapp.com",
  projectId: "wonderandreadblog",
  storageBucket: "wonderandreadblog.appspot.com",
  messagingSenderId: "538189199392",
  appId: "1:538189199392:web:660dfe08aa9199a08de445",
  measurementId: "G-PW3HKBE0Q6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp }

export default firebaseApp.firestore()