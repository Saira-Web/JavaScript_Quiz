// script.js — login + menu handler
document.addEventListener("DOMContentLoaded", () => {

  // LOGIN PAGE
  const loginForm = document.getElementById("login-form");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const username = document.getElementById("username").value.trim();
      if (!username) {
        alert("Please enter your name to continue.");
        return;
      }
      sessionStorage.setItem("mm_user", username);
      window.location.href = "menu.html";
    });
  }

  // MENU PAGE
  const options = document.querySelectorAll(".option");
  if (options.length > 0) {
    options.forEach(option => {
      option.addEventListener("click", () => {
        const level = option.dataset.level || option.textContent.trim();
        window.location.href = `quiz.html?level=${encodeURIComponent(level)}`;
      });
    });

    // keyboard shortcut: 1-4 to choose
    document.addEventListener("keydown", (e) => {
      const map = { "1": 0, "2": 1, "3": 2, "4": 3 };
      if (map[e.key] !== undefined) {
        const idx = map[e.key];
        const opt = options[idx];
        if (opt) opt.click();
      }
    });
  }

});