

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";



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





const form = document.getElementById("RS-form");
const reviewContainer = document.getElementById("reviewContainer");

form.addEventListener("submit",(e)=>{
  e.preventDefault();

  const name = document.getElementById("name").value;
  const comment = document.getElementById("comment").value;
  const location = document.getElementById("location").value;
  //const imageFile = document.getElementById("image-upload").files[0];

  // // let imageURL = "";

 
  // // if(imageFile){
  // //   imageURL = URL.createObjectURL(imageFile);
  // // }

  
  // const reviewDiv = document.createElement("div");
  // reviewDiv.classList.add("review");

  // reviewDiv.innerHTML = `
  //   ${imageURL ? `<img src="${imageURL}" class="user-img">` : ""}
  //   <p>"${comment}"</p>
  //   <span>- ${name}, ${location}</span>
  // `;


  // reviewContainer.appendChild(reviewDiv);

  // form.reset();
  try {
      addDoc(collection(db, "milkReviews"), {
        name,
        comment,
        location,
       
      });
  
      alert("✅ Data saved successfully!");
      form.reset();
  
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  });






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

loadReviews();

