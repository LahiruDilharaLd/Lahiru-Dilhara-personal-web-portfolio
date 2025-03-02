// Function to open the email client with the message
function sendEmail() {
    let message = document.getElementById("message").value;
    let email = "ldilhare@gmail.com"; // Replace with your email
    let subject = "Inquiry from Website"; // Default subject

    if (message.trim() !== "") {
        // Open default mail client with subject and body
        window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    }
}

// Event listener for pressing Enter
document.getElementById("message").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Prevent form submission
        sendEmail();
    }
});

// Event listener for clicking the "Email" button
document.getElementById("emailButton").addEventListener("click", function() {
    sendEmail();
});
