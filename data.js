import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDMLHk9G2Usjhy5SY44ekAxGbdbw0V1dSA",
  authDomain: "vksb--production.firebaseapp.com",
  projectId: "vksb--production",
  storageBucket: 
  "vksb--production.appspot",
  messagingSenderId: "489620312891",
  appId: "1:489620312891:web:83915decec1475bb4bdd1e"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function loadData(type, elementId) {
  const querySnapshot = await getDocs(collection(db, type));
  let html = `<h3>${type.toUpperCase()}</h3><ul>`;
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    html += `<li><a href="${data.link}" target="_blank">${data.title}</a></li>`;
  });
  html += `</ul>`;
  document.getElementById(elementId).innerHTML = html;
}

loadData("notices", "notices");
loadData("lectures", "lectures");
loadData("notes", "notes");
loadData("dpp", "dpp");