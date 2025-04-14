document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".image-accordion");
    const panels = document.querySelectorAll(".panel");
    let currentIndex = 0;
    let interval;

    function setActivePanel(index) {
        panels.forEach((panel, i) => {
            panel.classList.toggle("active", i === index);
        });
    }

    function startAutoScroll() {
        interval = setInterval(() => {
            setActivePanel(currentIndex);
            currentIndex = (currentIndex + 1) % panels.length;
        }, 3000);
    }

    function stopAutoScroll() {
        clearInterval(interval);
    }

    // Mulai scroll otomatis pertama kali
    setActivePanel(currentIndex);
    startAutoScroll();

    // Saat hover panel -> stop scroll & kasih aktif ke yang dihover
    panels.forEach((panel, i) => {
        panel.addEventListener("mouseenter", () => {
            stopAutoScroll();
            currentIndex = i;
            setActivePanel(i);
        });

        panel.addEventListener("mouseleave", () => {
            // tunggu sampai mouse keluar dari container buat lanjut scroll lagi
            // (biar nggak flicker pas geser dari panel ke panel)
        });
    });

    // Kalau mouse keluar dari container -> jalanin scroll lagi
    container.addEventListener("mouseleave", () => {
        startAutoScroll();
    });



    const cards = document.querySelectorAll(".agents-card");

        cards.forEach(card => {
            card.addEventListener("mouseenter", () => {
                cards.forEach(c => {
                    if (c !== card) c.classList.add("dimmed");
                });
            });

            card.addEventListener("mouseleave", () => {
                cards.forEach(c => c.classList.remove("dimmed"));
            });
        });
});
