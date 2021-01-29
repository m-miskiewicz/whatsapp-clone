import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC3QFhLzUB_fDQyE_vIu5BSTYd6Fct9QME",
  authDomain: "whatsapp-clone-70ce3.firebaseapp.com",
  projectId: "whatsapp-clone-70ce3",
  storageBucket: "whatsapp-clone-70ce3.appspot.com",
  messagingSenderId: "298752898966",
  appId: "1:298752898966:web:c95731999a6404472fcfb7",
  measurementId: "G-MJTZ3PR7CD"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;