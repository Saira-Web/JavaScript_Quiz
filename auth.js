// auth.js — login with password validation
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("login-form");
    if (!form) return;

    form.addEventListener("submit", (ev) => {
        ev.preventDefault();

        const username = document.getElementById("username")?.value.trim();
        const password = document.getElementById("password")?.value;

        if (!username) {
            alert("Please enter your name.");
            return;
        }
        if (!password) {
            alert("Please enter a password.");
            return;
        }

        // Load existing users from localStorage
        const users = JSON.parse(localStorage.getItem("mm_users") || "{}");

        // If user exists, validate password
        if (users[username]) {
            if (users[username] !== password) {
                alert("Incorrect password. Please try again.");
                return;
            }
        } else {
            // If new user, save username + password
            users[username] = password;
            localStorage.setItem("mm_users", JSON.stringify(users));
            alert("Registration successful! Logging in...");
        }

        // Save current user in sessionStorage
        sessionStorage.setItem("mm_user", username);

        // Redirect to menu page
        window.location.href = "menu.html";
    });
});