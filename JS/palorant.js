document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".agents-card");
    const bestAgent = document.querySelector(".best-agent");

    cards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            // Tambahin dimmed ke semua card kecuali yang di-hover
            cards.forEach(c => {
                if (c !== card) c.classList.add("dimmed");
            });

            // Kalau yang di-hover BUKAN chamber, kasih dimmed ke .best-agent
            if (card.id !== "chamber") {
                bestAgent.classList.add("dimmed");
            }
        });

        card.addEventListener("mouseleave", () => {
            // Reset semua
            cards.forEach(c => c.classList.remove("dimmed"));
            bestAgent.classList.remove("dimmed");
        });
    });

});
