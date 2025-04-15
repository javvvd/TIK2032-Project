// Word counter untuk contact.html
document.addEventListener("DOMContentLoaded", () => {
    const messageBox = document.getElementById("message");
    const wordCountEl = document.getElementById("wordCount");

    if (messageBox && wordCountEl) {
        messageBox.addEventListener("input", () => {
            const words = messageBox.value.trim().split(/\s+/).filter(Boolean);
            wordCountEl.textContent = words.length;
        });
    }
});

// Tambahkan ke script.js
setInterval(() => {
    const clock = document.getElementById("clock");
    if (clock) {
        const now = new Date();
        clock.textContent = now.toLocaleTimeString('id-ID');
    }
}, 1000);
