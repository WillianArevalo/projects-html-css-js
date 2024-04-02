document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    card.addEventListener("click", function () {
      cards.forEach((card) => {
        card.classList.remove("active");
      });

      card.classList.add("active");
    });
  });
});
