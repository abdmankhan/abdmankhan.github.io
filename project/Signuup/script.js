const form = document.getElementById("signup-form");
const nameInput = document.getElementById("name");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");
const emailInput = document.getElementById("email");
// Validate name length

nameInput.addEventListener("input", () => {
    if (nameInput.value.length < 5) {
      nameInput.setCustomValidity("Name must be at least 5 characters long.");
        
    } else {  
      nameInput.setCustomValidity("");
      localStorage.setItem( "name" , nameInput.value);
    }
  });
// Generate username based on name
// Add a new event listener for the name input
nameInput.addEventListener("input", () => {
    if (nameInput.value.length >= 5) {
      // Generate a username based on the provided format
      const name = nameInput.value.toLowerCase(); //ashish
      const username = name.substring(0, 5) + "_2024";
      if (username.length >= 5) {
        usernameInput.value = username;
      }
      localStorage.setItem( "userName" , username);
    }
  });

// Validate password strength
passwordInput.addEventListener("input", () => {
  const password = passwordInput.value;
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasDigit = /\d/.test(password);
  const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  const isLongEnough = password.length >= 5;

  if (hasUppercase && hasLowercase && hasDigit && hasSymbol && isLongEnough) {
    passwordInput.setCustomValidity("");
    localStorage.setItem( "password" , password);
  } else {
    passwordInput.setCustomValidity(
      "Password must have at least one uppercase, one lowercase, one digit, one symbol, and be at least 5 characters long."
    );
  }
});

// Validate confirm password
confirmPasswordInput.addEventListener("input", () => {
  if (passwordInput.value !== confirmPasswordInput.value) {
    confirmPasswordInput.setCustomValidity("Passwords do not match.");
  } else {
    confirmPasswordInput.setCustomValidity("");
  }
});

// Validate form submission
form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (form.checkValidity()) {
    // Form is valid, submit it
    alert("Form submitted successfully!");
    // window.location.href = "www.google.com";
    // form.onsubmit= function(){ window.location = 'login.html'; };
    window.location.href = "index1.html";
    
  } else {
    // Form is invalid, prevent submission
    alert("Invalid");
  }
});

//redirecter
function redirecter(){
  window.location = "login.html";
}

function redirecter2(){
  window.location = "login.html";
}
// function func(){
//   alert('Hahahhahahh');
// }
