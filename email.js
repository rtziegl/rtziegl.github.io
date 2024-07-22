document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    fetch('https://my-flask-mailer-4fc6e1c7adda.herokuapp.com/send_mail', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, subject, message }),
    })
        .then(response => response.json())
        .then(data => {
            if (data.message === "Email sent successfully") {
                alert("Email sent successfully!");
            } else {
                alert("Failed to send email.");
            }
        })
        .catch((error) => {
            console.error('Error:', error);
            alert("An error occurred. Please try again.");
        });
});

