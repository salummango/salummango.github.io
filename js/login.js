//LOGIN SCRIPT
let loginForm = document.getElementById("login-form");
loginForm.addEventListener("submit", function(event) {
    event.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if (username === "admin" && password === "password") {
        var contacts = JSON.parse(localStorage.getItem("contacts")) || [];
        var contactInfo = "";
        for (var i = 0; i < contacts.length; i++) {
            contactInfo += "<h2>Contact #" + (i + 1) + "</h2>";
            contactInfo += "<p><strong>Name:</strong> " + contacts[i].name + "</p>";
            contactInfo += "<p><strong>Address:</strong> " + contacts[i].address + "</p>";
            contactInfo += "<p><strong>Email:</strong> " + contacts[i].email + "</p>";
            contactInfo += "<p><strong>Comments:</strong> " + contacts[i].comments + "</p>";
        }
        document.getElementById("contact-info").innerHTML = contactInfo;
    } else {
        alert("Invalid username or password.");
    }
    loginForm.reset();
});