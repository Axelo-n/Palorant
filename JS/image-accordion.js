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
        stopAutoScroll();
        intervalId = setInterval(() => {
            currentIndex = (currentIndex + 1) % panels.length;
            setActivePanel(currentIndex);
        }, 3000);
    }

    function stopAutoScroll() {
        clearInterval(intervalId);
    }

    setActivePanel(currentIndex);
    startAutoScroll();

    panels.forEach((panel, index) => {
        panel.addEventListener("mouseenter", () => {
            stopAutoScroll();
            setActivePanel(index);
            currentIndex = index;
        });
    });

    container.addEventListener("mouseleave", () => {
        startAutoScroll();
    });
});
