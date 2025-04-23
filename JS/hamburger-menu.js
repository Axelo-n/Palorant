document.addEventListener("DOMContentLoaded", () => {
        const hamburgerBtn = document.getElementById('hamburger-btn');
        const nav = document.querySelector('.nav');

        hamburgerBtn.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
});