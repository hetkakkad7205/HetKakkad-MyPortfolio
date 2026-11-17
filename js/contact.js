
// =====================================
// CONTACT FORM
// =====================================

// IMPORTANT:
// Replace this with your actual email address.
const portfolioEmail = "YOUR_EMAIL@example.com";

const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const senderEmail = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        // Check empty fields
        if (!name || !senderEmail || !subject || !message) {

            formStatus.textContent = "Please complete all fields.";
            return;

        }

        // Check email format
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(senderEmail)) {

            formStatus.textContent = "Please enter a valid email address.";
            return;

        }

        // Check whether your real email has been added
        if (
            portfolioEmail === "YOUR_EMAIL@example.com" ||
            !emailPattern.test(portfolioEmail)
        ) {

            formStatus.textContent =
                "Please add your actual email address in js/contact.js first.";

            return;

        }

        // Prepare email subject and body
        const emailSubject = encodeURIComponent(subject);

        const emailBody = encodeURIComponent(
            "Name: " + name + "\n" +
            "Sender Email: " + senderEmail + "\n\n" +
            "Message:\n" + message
        );

        // Open the visitor's default email application
        const mailtoLink =
            "mailto:" + portfolioEmail +
            "?subject=" + emailSubject +
            "&body=" + emailBody;

        window.location.href = mailtoLink;

        formStatus.textContent =
            "Your email application should open with the message prepared.";

    });

}
