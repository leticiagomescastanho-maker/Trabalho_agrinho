// Mensagem no console
console.log("Agro Forte, Futuro Sustentável");

// Animação ao carregar a página
window.addEventListener("load", () => {
    document.body.style.opacity = "1";
});

// Efeito ao clicar nos cards
const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("click", () => {
        card.style.transform = "scale(1.03)";

        setTimeout(() => {
            card.style.transform = "";
        }, 200);
    });
});
