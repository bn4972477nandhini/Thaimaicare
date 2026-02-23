

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


// ✅ Firebase config
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "reviews-form-9158d.firebaseapp.com",
  projectId: "reviews-form-9158d",
  storageBucket: "reviews-form-9158d.appspot.com",
  messagingSenderId: "864610687881",
  appId: "1:864610687881:web:27bb46babb747793489f58"
};

// init firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


// form select


const form = document.getElementById("RS-form");
const reviewContainer = document.getElementById("reviewContainer");

form.addEventListener("submit",(e)=>{
  e.preventDefault();

  const name = document.getElementById("name").value;
  const comment = document.getElementById("comment").value;
  const location = document.getElementById("location").value;
  const imageFile = document.getElementById("image-upload").files[0];

  let imageURL = "";

  // image preview
  if(imageFile){
    imageURL = URL.createObjectURL(imageFile);
  }

  // create review card
  const reviewDiv = document.createElement("div");
  reviewDiv.classList.add("review");

  reviewDiv.innerHTML = `
    ${imageURL ? `<img src="${imageURL}" class="user-img">` : ""}
    <p>"${comment}"</p>
    <span>- ${name}, ${location}</span>
  `;

  // add to Real Experience section
  reviewContainer.appendChild(reviewDiv);

  form.reset();
});




// ⭐ load reviews → show in milk-review section
async function loadReviews(){
  reviewContainer.innerHTML = "";

  const querySnapshot = await getDocs(collection(db,"milkReviews"));

  querySnapshot.forEach((doc)=>{
    const data = doc.data();

    reviewContainer.innerHTML += `
      <div class="review-card">
        <h3>${data.name}</h3>
        <p>${data.comment}</p>
        <span>${data.location}</span>
      </div>
    `;
  });
}

// page load → show existing reviews
loadReviews();

