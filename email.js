// email.js

// Obfuscated email address
var user = 'rz';
var domain = 'ryleyziegler.com';
var email = user + '@' + domain;

// Create the mailto link
var mailtoLink = 'mailto:' + email;

// Function to create the email link and set it
function createMailtoLink() {
    var mailIcon = document.getElementById('toggleForm');
    if (mailIcon) {
        mailIcon.parentNode.href = mailtoLink;
    }
}

// Call the function to set the mailto link on page load
document.addEventListener('DOMContentLoaded', createMailtoLink);