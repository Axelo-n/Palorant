document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".image-accordion");
    const panels = document.querySelectorAll(".panel");
    let currentIndex = 0;
    let intervalId;

    function setActivePanel(index) {
        panels.forEach((panel, i) => {
            panel.classList.toggle("active", i === index);
        });
    }

    function startAutoScroll() {
        stopAutoScroll(); // jaga-jaga biar ga dobel interval
        intervalId = setInterval(() => {
            currentIndex = (currentIndex + 1) % panels.length;
            setActivePanel(currentIndex);
        }, 3000);
    }

    function stopAutoScroll() {
        clearInterval(intervalId);
    }

    // Setup awal
    setActivePanel(currentIndex);
    startAutoScroll();

    // Hover panel
    panels.forEach((panel, index) => {
        panel.addEventListener("mouseenter", () => {
            stopAutoScroll();
            setActivePanel(index);
            currentIndex = index; // update index ke yang dihover
        });
    });

    // Mouse keluar dari container
    container.addEventListener("mouseleave", () => {
        startAutoScroll();
    });
});
