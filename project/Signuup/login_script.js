const form = document.getElementById("login-form");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const submitButton = document.getElementById("submit-button");

// Listen for form submission
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Check if the entered username and password match the stored values
  const storedUsername = localStorage.getItem("userName");
  const storedPassword = localStorage.getItem("password");

  if (usernameInput.value === storedUsername && passwordInput.value === storedPassword) {
    // If the credentials match, redirect to the index.html page
    window.location.href = "index1.html";
  } else {
    // If the credentials don't match, display an error message
    alert("Invalid username or password");
  }
});

//redirecter
function redirecter(){
  window.location = "index.html";
}
