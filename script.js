const form = document.getElementById("formular");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const messageInput = document.getElementById("message");
const alerta = document.getElementById("alerta");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();
  const phoneValue = phoneInput.value.trim();
  const messageValue = messageInput.value.trim();

  if (nameValue === "" || emailValue === "" || phoneValue === "" || messageValue === "") {
    alerta.textContent = "All fields are required.";
 

    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailValue)) {
    alerta.textContent = "Please enter a valid email address!";
    return;
  }

  const phonePattern = /^\d{3}-?\d{3}-?\d{4}$/;
  if (!phonePattern.test(phoneValue)) {
    alerta.textContent = "Please enter a valid phone number (e.g., 123-456-7890 or 1234567890)!";
    return;
  }

  alerta.textContent = "Data submitted successfully!";

  // Log form data
  const formData = {
    name: nameValue,
    email: emailValue,
    phone: phoneValue,
    message: messageValue,
  };
  console.log("Form Data Submitted:", formData);
  form.reset();

  
}