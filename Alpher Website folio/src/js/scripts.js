//contact us scripts
var message = document.getElementById(message).value().trim();
var nameuser = document.getElementById(nameuser).value().trim();
const email = document.getElementById(email).value().trim();

function sendMail() {
    if (!message || !nameuser || !email) {
        sendMail.onClick(PopStateEvent("Mail sent successfully, We'll respond as soon as possible"))
    } else {
        alert("All fields are require")
    }
}