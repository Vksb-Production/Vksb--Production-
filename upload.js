import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDMLHk9G2Usjhy5SY44ekAxGbdbw0V1dSA",
  authDomain: "vksb--production.firebaseapp.com",
  projectId: "vksb--production",
  storageBucket: "vksb--production.appspot.com",
  messagingSenderId: "489620312891",
  appId: "1:489620312891:web:83915decec1475bb4bdd1e"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Upload function
window.uploadContent = async function () {
  const title = document.getElementById("title").value.trim();
  const link = document.getElementById("link").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const category = document.getElementById("category").value;

  if (!title || !link || !subject || !category) {
    alert("Please fill all fields.");
    return;
  }

  try {
    await addDoc(collection(db, category), {
      title: title,
      link: link,
      subject: subject,
      timestamp: serverTimestamp()
    });
    alert("Uploaded successfully!");
    document.getElementById("title").value = "";
    document.getElementById("link").value = "";
    document.getElementById("subject").value = "";
  } catch (error) {
    console.error("Error uploading content:", error);
    alert("Error uploading: " + error.message);
  }
};