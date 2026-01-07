const form = document.querySelector("form");
const btn = document.getElementById("form_button");
const parent = document.getElementById("parent");


form.addEventListener("submit", function (e) {
  e.preventDefault();   

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let phone = document.getElementById("phone").value.trim();
  let location = document.getElementById("location").value.trim();
  let availability = document.getElementById("availability").value;

  if (name === "") {
    alert("Please enter your name");
  } 
  else if (!namePattern.test(name)) {
    alert("Name should contain only letters");
  }
  else if (email === "") {
    alert("Please enter your email");
  }
  else if (!emailPattern.test(email)) {
    alert("Please enter a valid email address");
  }
  else if (phone === "") {
    alert("Please enter your phone number");
  }
  else if (!phonePattern.test(phone)) {
    alert("Phone number must be 10 digits");
  }
  else if (location === "") {
    alert("Please enter your location");
  }
  else if (availability === "") {
    alert("Please select your availability");
  }
  else {
    alert("Thank you for registering as a milk donor!");
    form.reset();
  }
});
