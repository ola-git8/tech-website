document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;
    const darkModeToggle = document.getElementById("dark-mode-toggle");

    // Check localStorage for dark mode preference
    if (localStorage.getItem("dark-mode") === "enabled") {
      body.classList.add("dark-mode")
    }

    darkModeToggle.addEventListener("click", function () {
      body.classList.toggle("dark-mode");
      
      // Store preference in localStorage
      if (body.classList.contains("dark-mode")) {
        localStorage.setItem("dark-mode", "enabled");
      } else {
        localStorage.setItem("dark-mode", "disabled");
      }
    });
  });

  document.getElementById("myform").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents form submission

    let isValid = true; // Tracks form validity

    // Clear previous error messages
    document.getElementById("error-message").innerHTML = "";
    document.getElementById("error-message2").innerHTML = "";

    // Get form values
    let firstName = document.getElementById("firstName").value.trim();
    let lastName = document.getElementById("lastName").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    // Validation checks
    if (firstName === "") {
        document.getElementById("error-message").innerHTML = "First Name is required.";
        isValid = false;
    }
    if (lastName === "") {
        document.getElementById("error-message2").innerHTML = "Last Name is required.";
        isValid = false;
    }
    if (email === "") {
        document.getElementById("error-message3").innerHTML += "<br>Email is required.";
        isValid = false;
    } else if (!email.match(/^\S+@\S+\.\S+$/)) {
        document.getElementById("error-message3").innerHTML += "<br>Enter a valid email address.";
        isValid = false;
    }
    if (password === "") {
        document.getElementById("error-message4").innerHTML += "<br>Password is required.";
        isValid = false;
    } else if (password.length < 6) {
        document.getElementById("error-message4").innerHTML += "<br>Password must be at least 6 characters.";
        isValid = false;
    }

    // Submit form if valid
    if (isValid) {
        alert("Form submitted successfully!"); // Replace with actual submission logic
    }
});
