function validateEmail() {
    // Get the email input value
    var emailInput = document.getElementById("email").value;
    
    // Regular expression pattern to validate email format
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Check if the email is empty or doesn't match the pattern
    if (emailInput === '' || !emailPattern.test(emailInput)) {
      alert("Please enter a valid email address.");
      return false;
    }
    
    // If the email is valid, perform the subscribe action
    subscribe();
  }
  
  function subscribe() {
    // Perform the subscribe action here
    // ...
  }  