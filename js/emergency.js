const form = document.querySelector("form-section");

form.addEventListener("submit", function (e) {
  e.preventDefault();   

  let name = document.getElementById("name").value.trim();
  let location = document.getElementById("location").value.trim();
  let month = document.getElementById("month").value.trim();
  let contact = document.getElementById("contact").value.trim();
  let urgency = document.getElementById("urgency").value;

  if (name === "") {
    alert("Please enter your name");
    return;
  }
 
  if (contact === "") {
    alert("Please enter your phone number");
    return;
  }
  if (month === ""){
    alert("Please enter your month")
  }
  if (location === "") {
    alert("Please enter your location");
    return;
  }
  if (urgency === "") {
    alert("Please select your urgency level");
    return;
  }
  alert("Thank you for registering as a milk donor!");
  form.reset();
});
