const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();   

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let phone = document.getElementById("phone").value.trim();
  let location = document.getElementById("location").value.trim();
  let availability = document.getElementById("availability").value;

  if (name === "") {
    alert("Please enter your name");
    return;
  }
  if (email === "") {
    alert("Please enter your email");
    return;
  }
  if (!email.includes("@") || !email.includes(".")) {
    alert("Please enter a valid email address");
    return;
  }
  if (phone === "") {
    alert("Please enter your phone number");
    return;
  }
  if (phone.length !== 10 || isNaN(phone)) {
    alert("Phone number must be 10 digits");
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
  alert("Thank you for registering as a milk donor!");
  form.reset();
});
