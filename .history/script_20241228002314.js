
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
});
