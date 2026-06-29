// menu.js — menu navigation
document.addEventListener("DOMContentLoaded", () => {
    const options = document.querySelectorAll(".option");
    if (!options || options.length === 0) return;

    options.forEach(opt => {
        opt.addEventListener("click", () => {
            const level = opt.dataset.level || opt.textContent.trim();
            window.location.href = `quiz.html?level=${encodeURIComponent(level)}`;
        });
    });

    // Keyboard shortcut: 1-4 selects menu option
    document.addEventListener("keydown", (e) => {
        const map = { "1": 0, "2": 1, "3": 2, "4": 3 };
        if (map[e.key] !== undefined) {
            const idx = map[e.key];
            const opt = options[idx];
            if (opt) opt.click();
        }
    });
});