// Wait until the entire HTML document is loaded and ready
document.addEventListener('DOMContentLoaded', function() {

    // Get the button and the display paragraph from the HTML by their IDs
    const contactButton = document.getElementById('contact-btn');
    const emailDisplay = document.getElementById('email-display');

    // Add a 'click' event listener to the button
    contactButton.addEventListener('click', function() {
        // When the button is clicked, reveal the email address
        // This is the corrected line:
        emailDisplay.textContent = 'Email: williamsdwight3@gmail.com';
        
        // Optional: Hide the button after it's clicked
        contactButton.style.display = 'none';
    });

});