import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";

import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.7.0/firebase-firestore.js";


const firebaseConfig = {
  apiKey: "AIzaSyAiHTQQHFRVap6r5N8XWYXUH7DoigH6SmQ",
  authDomain: "thaaimaicare-donate-form.firebaseapp.com",
  projectId: "thaaimaicare-donate-form",
  storageBucket: "thaaimaicare-donate-form.firebasestorage.app",
  messagingSenderId: "632961605438",
  appId: "1:632961605438:web:0a4b32ca65b59aebfe966f"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const form = document.getElementById("donate-form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const age = document.getElementById("age").value.trim();
  const month = document.getElementById("month").value.trim();
  const location = document.getElementById("location").value.trim();
  const availability = document.getElementById("availability").value;
  const rchid = document.getElementById("rchid").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !age || !month || !location || !availability) {
    alert("Please fill all required fields");
    return;
  }

  try {

    const docRef = await addDoc(collection(db, "users"), {
      name,
      email,
      age,
      baby_month: month,
      location,
      location_lower: location.toLowerCase(),
      availability,
      rchid,
      message,
      createdAt: serverTimestamp()
    });

    console.log("Document ID:", docRef.id);

    alert("Form saved successfully!");
    form.reset();

  } catch (error) {
    console.error(error);
    alert(error.message);
  }
});