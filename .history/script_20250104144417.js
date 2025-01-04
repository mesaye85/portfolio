// Debugging for Form Submission
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Log form submission attempt
    console.log('Form submitted!');

    // Get form field values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Log the values entered in the form
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Message: ${message}`);

    // Basic validation checks
    if (!name || !email || !message) {
        console.log('Validation failed: All fields are required.');
        alert('Please fill in all fields.');
        return;
    }

    // Simulate form processing
    console.log('Form passed validation. Processing submission...');
    alert('Thank you for reaching out!');

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
