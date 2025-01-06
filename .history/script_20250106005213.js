document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    // Enhanced validation
    if (!isValidName(name) || !isValidEmail(email) || !isValidMessage(message)) {
        return;
    }
    alert("JavaScript is running!");

    // Add CSRF token
    const csrfToken = document.querySelector('meta[name="csrf-token"]').content;
    
    // Use fetch API with proper error handling
    fetch('/api/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRF-Token': csrfToken
        },
        body: JSON.stringify({ name, email, message })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            showSuccess('Message sent successfully!');
            resetForm();
        } else {
            showError('Failed to send message. Please try again.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        showError('An error occurred. Please try again later.');
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showError('Please enter a valid email address.');
        return false;
    }
    return true;
}

function isValidName(name) {
    if (name.length < 2 || name.length > 50) {
        showError('Name must be between 2 and 50 characters.');
        return false;
    }
    return true;
}

function isValidMessage(message) {
    if (message.length < 10 || message.length > 1000) {
        showError('Message must be between 10 and 1000 characters.');
        return false;
    }
    return true;
}
document.querySelectorAll('.skill-box p').forEach((text) => {
    const parent = text.parentElement;
    const parentHeight = parent.offsetHeight;

    if (text.scrollHeight > parentHeight) {
        text.style.fontSize = '0.8em'; // Reduce font size if text overflows
        text.style.lineHeight = '1.2'; // Adjust line height for better fit
    }
});

});


