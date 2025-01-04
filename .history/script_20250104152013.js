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

class TypeWriter {
    constructor(element, text, speed = 50) {
        this.element = element;
        this.text = text;
        this.speed = speed;
        this.isDeleting = false;
        this.currentIndex = 0;
        this.type();
    }

    type() {
        if (!this.element) {
            console.error('Target element not found');
            return;
        }

        const current = this.currentIndex % this.text.length;
        const fullText = this.text[current];

        if (this.isDeleting) {
            this.element.textContent = fullText.substring(0, this.element.textContent.length - 1);
        } else {
            this.element.textContent = fullText.substring(0, this.element.textContent.length + 1);
        }

        let typeSpeed = this.speed;

        if (this.isDeleting) {
            typeSpeed /= 2;
        }

        if (!this.isDeleting && this.element.textContent === fullText) {
            typeSpeed = this.speed * 5;
            this.isDeleting = true;
        } else if (this.isDeleting && this.element.textContent === '') {
            this.isDeleting = false;
            this.currentIndex++;
            typeSpeed = this.speed;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}
});
