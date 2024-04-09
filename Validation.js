// Get form element
const form = document.getElementById('signup-form');

// Add form submit event listener
form.addEventListener('submit', function(event) {
    // Get form fields
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    // Validate name (should not be empty)
    if (name.value.trim() === '') {
        alert('Please enter your name.');
        event.preventDefault();
    }

    // Validate email (should be a valid email format)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value.trim())) {
        alert('Please enter a valid email address.');
        event.preventDefault();
    }

    // Validate password (should be at least 6 characters)
    if (password.value.trim().length < 6) {
        alert('Password should be at least 6 characters.');
        event.preventDefault();
    }
});
