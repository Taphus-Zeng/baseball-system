
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase, ref, set, get, onValue, update, child, remove, push } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBDc712j6cY3VoL2YxvTk8rnwqDfcr28UA",
  authDomain: "baseball-scoreboard-294d8.firebaseapp.com",
  databaseURL: "https://baseball-scoreboard-294d8-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "baseball-scoreboard-294d8",
  storageBucket: "baseball-scoreboard-294d8.firebasestorage.app",
  messagingSenderId: "179359096477",
  appId: "1:179359096477:web:8188f897371651442e7e74"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);

export { 
    auth, db, ref, set, get, onValue, update, child, remove, push,
    signInWithEmailAndPassword, onAuthStateChanged, signOut 
};
