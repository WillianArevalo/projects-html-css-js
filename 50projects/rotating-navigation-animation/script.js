document.addEventListener("DOMContentLoaded", function () {
  const open = document.getElementById("open");
  const close = document.getElementById("close");
  const container = document.getElementById("container");
  const circle = document.getElementById("circle");

  open.addEventListener("click", () => {
    circle.classList.add("rotate");
    container.classList.add("show-nav");
  });

  close.addEventListener("click", function () {
    circle.classList.remove("rotate");
    container.classList.remove("show-nav");
  });
});
