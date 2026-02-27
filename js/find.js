import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs
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

const donorContainer = document.getElementById("donorContainer");
let allDonors = [];

window.handleButton = function () {
  window.location.href = "../pages/reviewsendform.html";
};

function displayDonor(data) {
  const card = document.createElement("div");
  card.classList.add("donor-card");

  const btn = document.createElement("button");
  btn.textContent = "Contact donor";
  btn.classList.add("contact-btn");

  
  btn.addEventListener("click", () => {
    window.location.href = `reviewsendform.html?id=${data.id}`;
  });
  console.log(data.id)

  card.innerHTML = `
    <p><strong>Donor Name:</strong> ${data.name}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Mother Age:</strong> ${data.age}</p>
    <p><strong>Baby Month:</strong> ${data.month}</p>
  
    <p><strong>Location:</strong> ${data.location}</p>
    <p><strong>Availability:</strong> ${data.availability}</p>
    <p><strong>Message:</strong> ${data.message}</p>
    
  `;

  card.appendChild(btn);
  donorContainer.appendChild(card);
}

window.loadDonors = async function () {
  donorContainer.innerHTML = "Loading...";

  const snapshot = await getDocs(collection(db, "users"));
  donorContainer.innerHTML = "";
  allDonors = [];

  snapshot.forEach(doc => {
    const data = doc.data();
    const id = doc.id;
    const donorData = {id, ...data};
    allDonors.push(donorData);
    displayDonor(donorData);
   
    
  
});
}
window.searchLocation = function () {
  const value = document.getElementById("searchInput").value.toLowerCase();

  donorContainer.innerHTML = "";

  const filtered = allDonors.filter(d =>
    d.location?.toLowerCase().includes(value) ||
    d.name?.toLowerCase().includes(value)
  );

  if (filtered.length === 0) {
    donorContainer.innerHTML = "No donor found";
  } else {
    filtered.forEach(displayDonor);
  }
};

loadDonors();










