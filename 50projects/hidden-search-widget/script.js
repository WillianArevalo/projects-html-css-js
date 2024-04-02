document.addEventListener("DOMContentLoaded", () => {
  const icon = document.getElementById("icon");
  const search = document.getElementById("search");

  icon.addEventListener("click", () => {
    if (search.classList.contains("active")) {
      search.classList.remove("active");
    } else {
      search.classList.add("active");
    }
  });
});
