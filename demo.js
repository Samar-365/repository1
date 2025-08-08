// demo.js

// Handle top menu buttons
document.getElementById("ml").addEventListener("click", () => {
    alert("Redirecting to Mail Management...");
});

document.getElementById("sl").addEventListener("click", () => {
    alert("Opening Social Media Integration...");
});

document.getElementById("sy").addEventListener("click", () => {
    alert("Starting Survey Creation...");
});

document.getElementById("ps").addEventListener("click", () => {
    alert("Viewing Product Catalog...");
});


// SIGN UP button
document.getElementById("SU").addEventListener("click", () => {
    const username = document.getElementById("Username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("pass").value.trim();
    const phone = document.getElementById("phno").value.trim();
    const policies = document.getElementById("mycheck").checked;

    if (!username || !email || !password || !phone) {
        alert("Please fill in all fields.");
        return;
    }

    if (!policies) {
        alert("Please agree to the policies before signing up.");
        return;
    }

    alert(`Sign up successful!\nWelcome, ${username}`);
    // Here you could send data to a backend server with fetch()
});


// SIGN IN button
document.getElementById("Signin").addEventListener("click", () => {
    const username = document.getElementById("Username").value.trim();
    const password = document.getElementById("pass").value.trim();

    if (!username || !password) {
        alert("Please enter both Username and Password.");
        return;
    }

    alert(`Sign in successful!\nWelcome back, ${username}`);
});
