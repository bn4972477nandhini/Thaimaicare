
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
    import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-firestore.js";


  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAiHTQQHFRVap6r5N8XWYXUH7DoigH6SmQ",
    authDomain: "thaaimaicare-donate-form.firebaseapp.com",
    projectId: "thaaimaicare-donate-form",
    storageBucket: "thaaimaicare-donate-form.firebasestorage.app",
    messagingSenderId: "632961605438",
    appId: "1:632961605438:web:0a4b32ca65b59aebfe966f"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db=getFirestore(app);
 

const form = document.querySelector("form");
console.log(form);

form.addEventListener("submit", function (e) {
  e.preventDefault();   

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let age = document.getElementById("age").value.trim();
  let month = document.getElementById("month").value.trim();
  let phone = document.getElementById("phone").value.trim();
  let location = document.getElementById("location").value.trim();
  let availability = document.getElementById("availability").value;
  let message = document.getElementById("message").value.trim();

  if (name === "") {
    alert("Please enter your name");
    return;
  }
  if (email === "") {
    alert("Please enter your email");
    return;
  }
  if (phone === "") {
    alert("Please enter your phone number");
    return;
  }
  if (location === "") {
    alert("Please enter your location");
    return;
  }
  if (availability === "") {
    alert("Please select your availability");
    return;
  }
  console.log(name);
  console.log(email);
  console.log(age);
  console.log(month);
  console.log(phone);
  console.log(location);
  console.log(availability);
  console.log(message);

  addDoc(collection(db, "users"), {
            name: name,
            email: email,
            age:age,
            month:month,
            phone_number:phone,
            location:location,
            availability:availability,
            message:message,
            createdAt: new Date()
        });
        alert("Detailes added successfully");
        form.reset();
}
)




