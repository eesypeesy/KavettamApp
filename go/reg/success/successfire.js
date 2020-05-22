let email = localStorage.getItem("email");
document.getElementById("confirmed").innerHTML = "a confirmation email has been to send to " + email;
localStorage.clear();