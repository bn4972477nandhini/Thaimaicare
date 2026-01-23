 

  // 🔹 Import Firebase
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
  import { 
    getFirestore, 
    collection, 
    getDocs 
  } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-firestore.js";

  // 🔹 Firebase config (same as your form page)
  const firebaseConfig = {
    apiKey: "AIzaSyAiHTQQHFRVap6r5N8XWYXUH7DoigH6SmQ",
    authDomain: "thaaimaicare-donate-form.firebaseapp.com",
    projectId: "thaaimaicare-donate-form",
    storageBucket: "thaaimaicare-donate-form.firebasestorage.app",
    messagingSenderId: "632961605438",
    appId: "1:632961605438:web:0a4b32ca65b59aebfe966f"
  };

  // 🔹 Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  const donorContainer = document.getElementById("donorContainer");

   async function loadDonors() {
    const querySnapshot =  await getDocs(collection(db, "users"));

    donorContainer.innerHTML = "";

    querySnapshot.forEach((doc) => {
      const data = doc.data();
      console.log(data)

      const card = document.createElement("div");
      card.classList.add("donor-card");

      card.innerHTML = `
        <p>Donor Name: ${data.name}</p>
        <p>Location: ${data.location}</p>
        <p>Month: ${data.month}</p>
        <p>Phone: ${data.phone_number}</p>
      `;

      donorContainer.appendChild(card);
    });
    console.log(querySnapshot)
  }

  loadDonors();

 