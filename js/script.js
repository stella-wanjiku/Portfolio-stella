const readMoreBtn = document.getElementById("read-more-btn");
const homeExtension = document.getElementById("home-extension");

readMoreBtn.addEventListener("click", () => {
  if (homeExtension.style.display === "none") {
    homeExtension.style.display = "block";
    readMoreBtn.textContent = "Read Less";
  } else {
    homeExtension.style.display = "none";
    readMoreBtn.textContent = "Read More";
  }
});

document.getElementById('newsletter-form').addEventListener('submit', function(event) {
    event.preventDefault(); // To prevent the default form submission

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const errorMessage = document.getElementById('error-message');


    // Basic validation 
    if (name === '') {
        errorMessage.textContent = 'Please enter your name.';
        nameInput.focus();
        return;
    }
     if (!isValidEmail(email)) {
        errorMessage.textContent = 'Please enter a valid email address.';
        emailInput.focus();
        return;
    }

    errorMessage.textContent = ''; // Clear any previous error message

    // to show a successful submission  
    console.log('Name:', name);
    console.log('Email:', email);
    alert('Thank you for subscribing to our newsletter!'); 

    // to clear the form
    nameInput.value = '';
    emailInput.value = '';

});

function isValidEmail(email) {
  // Basic email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
