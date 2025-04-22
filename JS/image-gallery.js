document.addEventListener("DOMContentLoaded", () => {
    const mainImage = document.getElementById("mainDisplay");
    const thumbnails = document.querySelectorAll(".thumb");
    const thumbnailBar = document.getElementById("thumbnailBar");
    const btnLeft = document.querySelector(".thumb-nav.left");
    const btnRight = document.querySelector(".thumb-nav.right");

    thumbnails.forEach(thumb => {
        thumb.addEventListener("click", () => {
            thumbnails.forEach(t => t.classList.remove("active"));
            thumb.classList.add("active");
            mainImage.src = thumb.dataset.full;
        });
    });

    btnLeft.addEventListener("click", () => {
        thumbnailBar.scrollBy({ left: -200, behavior: 'smooth' });
    });

    btnRight.addEventListener("click", () => {
        thumbnailBar.scrollBy({ left: 200, behavior: 'smooth' });
    });
});