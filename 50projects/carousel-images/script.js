document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".carousel-slide img");
  const pagination = document.querySelector(".pagination");
  var index = 0;
  images.forEach((image, index) => {
    const button = document.createElement("button");
    if (index === 0) {
      image.classList.add("active");
      button.classList.add("active");
    }
    pagination.appendChild(button);
  });

  const buttons = document.querySelectorAll(".pagination button");

  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      images.forEach((image) => {
        image.classList.remove("active");
      });
      buttons.forEach((button) => {
        button.classList.remove("active");
      });
      images[index].classList.add("active");
      buttons[index].classList.add("active");
    });
  });
});
