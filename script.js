// Intro animation
document.addEventListener("DOMContentLoaded", () => {
    const overlay = document.getElementById("introOverlay");

    setTimeout(() => {
        overlay.classList.add("hidden");
    }, 2500);
});

// Mobile menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

if (hamburger) {
    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });
}
