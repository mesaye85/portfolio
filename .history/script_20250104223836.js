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
document.addEventListener("DOMContentLoaded", () => {
    const text = "I am a passionate cybersecurity professional focused on threat hunting, forensics, cloud security, and AI/ML integration. This portfolio showcases my projects, certifications, and skills relevant to advanced cybersecurity roles.";
    const target = document.getElementById("typewriter-text");
    const speed = 50; // Typing speed in milliseconds

    let i = text.length - 1; // Start from the end for right-to-left effect
    target.style.direction = "rtl"; // Ensure typing starts from right

    function type() {
        if (i >= 0) {
            target.textContent = text.charAt(i) + target.textContent; // Prepend each character
            i--;
            setTimeout(type, speed);
        } else {
            setTimeout(() => target.classList.add("cursor-hidden"), 1000); // Hide the cursor 1 second after typing ends
        }
    }

    type();
});


