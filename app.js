document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".recipe-card");

    cards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.style.transform = "rotateY(360deg)";
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "rotateY(0deg)";
        });
    });
});