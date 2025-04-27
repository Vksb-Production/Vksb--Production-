// firebase.js
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js';

const firebaseConfig = {
  apiKey: "AIzaSyDMLHk9G2Usjhy5SY44ekAxGbdbw0V1dSA",
  authDomain: "vksb--production.firebaseapp.com",
  projectId: "vksb--production",
  storageBucket: "vksb--production.appspot.com",
  messagingSenderId: "489620312891",
  appId: "1:489620312891:web:83915decec1475bb4bdd1e"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };