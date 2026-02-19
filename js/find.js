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

function displayDonor(data) {
  const card = document.createElement("div");
  card.classList.add("donor-card");

  card.innerHTML = `
    <p><b>Donor Name:</b> ${data.name}</p>
    <p><b>Email:</b> ${data.email}</p>
    <p><b>Mother Age:</b> ${data.age}</p>
    <p><b>Baby Month:</b> ${data.month}</p>
    <p><b>Phone:</b> ${data.phone_number}</p>
    <p><b>Location:</b> ${data.location}</p>
    <p><b>Availability:</b> ${data.availability}</p>
    <p><b>Message:</b> ${data.message}</p>
    
  `;

  donorContainer.appendChild(card);
}

window.loadDonors = async function () {
  donorContainer.innerHTML = "Loading...";

  const snapshot = await getDocs(collection(db, "users"));
  donorContainer.innerHTML = "";
  allDonors = [];

  snapshot.forEach(doc => {
    const data = doc.data();
    allDonors.push(data);
    displayDonor(data);
  });
};

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










// import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
// import {
//   getFirestore,
//   collection,
//   getDocs
// } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-firestore.js";

// const firebaseConfig = {
//   apiKey: "AIzaSyAiHTQQHFRVap6r5N8XWYXUH7DoigH6SmQ",
//   authDomain: "thaaimaicare-donate-form.firebaseapp.com",
//   projectId: "thaaimaicare-donate-form",
//   storageBucket: "thaaimaicare-donate-form.firebasestorage.app",
//   messagingSenderId: "632961605438",
//   appId: "1:632961605438:web:0a4b32ca65b59aebfe966f"
// };

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// const donorContainer = document.getElementById("donorContainer");
// let allDonors = []; // 🔥 Store all donors here for easy searching

// // 🎴 Create donor card
// function displayDonor(data) {
//   const card = document.createElement("div");
//   card.classList.add("donor-card");

//   card.innerHTML = `
//     <p><strong>Donor Name:</strong> ${data.name || "N/A"}</p>
//     <p><strong>Email Address:</strong> ${data.email || "N/A"}</p>
//     <p><strong>Age:</strong> ${data.age || "N/A"}</p>
//     <p><strong>Month:</strong> ${data.month || "N/A"}</p>
//     <p><strong>Phone:</strong> ${data.phone_number || "N/A"}</p>
//     <p><strong>Location:</strong> ${data.location || "N/A"}</p>
//     <p><strong>Availability:</strong> ${data.availability || "N/A"}</p>
//     <p><strong>Message:</strong> ${data.message || ""}</p>
//   `;

//   donorContainer.appendChild(card);
// }

// // 🩸 SHOW ALL DONORS
// window.loadDonors = async function () {
//   donorContainer.innerHTML = "<p>Loading donors...</p>";

//   try {
//     const snapshot = await getDocs(collection(db, "users"));
//     allDonors = []; // Clear local list
//     donorContainer.innerHTML = "";

//     if (snapshot.empty) {
//       donorContainer.innerHTML = "<p>No donors available.</p>";
//       return;
//     }

//     snapshot.forEach(doc => {
//         const data = doc.data();
//         allDonors.push(data); // Save to our list
//         displayDonor(data);
//     });
//   } catch (error) {
//     console.error("Error loading donors:", error);
//     donorContainer.innerHTML = "<p>Error loading donors. Please check your connection.</p>";
//   }
// };

// // 🔍 SMART SEARCH (Searches Name or Location)
// window.searchLocation = function () {
//   const searchValue = document.getElementById("searchInput").value.trim().toLowerCase();
  
//   // Clear the container
//   donorContainer.innerHTML = "";

//   if (!searchValue) {
//     // If search is empty, show everyone
//     allDonors.forEach(donor => displayDonor(donor));
//     return;
//   }

//   // Filter donors who match the search in Name OR Location
//   const filteredDonors = allDonors.filter(donor => {
//     const name = (donor.name || "").toLowerCase();
//     const location = (donor.location || "").toLowerCase();
//     return name.includes(searchValue) || location.includes(searchValue);
//   });

//   if (filteredDonors.length === 0) {
//     donorContainer.innerHTML = `<p>No donor found matching "${searchValue}". Try searching by Name or City.</p>`;
//   } else {
//     filteredDonors.forEach(donor => displayDonor(donor));
//   }
// };

// // Auto load all donors when page opens
// loadDonors();

