document.addEventListener("DOMContentLoaded", function () {
  const buttonInc = document.querySelector(".product-info-quantity-increase");
  const buttonDec = document.querySelector(".product-info-quantity-decrease");
  const quantity = document.getElementById("quantity");

  if (buttonInc && buttonDec && quantity) {
    buttonInc.addEventListener("click", function () {
      quantity.value = parseInt(quantity.value) + 1;
    });

    buttonDec.addEventListener("click", function () {
      if (parseInt(quantity.value) > 1) {
        quantity.value = parseInt(quantity.value) - 1;
      }
    });
  }

  const body = document.querySelector("body");
  const mainImage = document.getElementById("image-main");
  const imageList = document.querySelectorAll(
    ".product-images-list .image img"
  );
  const btnClose = document.getElementById("btnClose");
  const modalImage = document.getElementById("modal-image");
  const overlay = document.getElementById("overlay");
  const mainImageModal = document.getElementById("image-main-modal");
  const imageListModal = document.querySelectorAll(".modal-image");
  var currentIndex = 0;
  if (mainImage && btnClose && modalImage && overlay) {
    mainImage.addEventListener("click", function () {
      modalImage.classList.add("active");
      body.classList.add("no-scroll");
      overlay.style.display = "block";
      const numImage = mainImage.getAttribute("data-id");
      mainImageModal.setAttribute("src", mainImage.getAttribute("src"));
      mainImageModal.setAttribute("data-id", numImage);
      imageListModal.forEach((img) => {
        img.classList.remove("active");
        if (img.id == numImage) {
          img.classList.add("active");
        }
      });
      currentIndex = parseInt(numImage);
    });

    btnClose.addEventListener("click", function () {
      modalImage.classList.remove("active");
      overlay.style.display = "none";
      body.classList.remove("no-scroll");
    });
  }

  if (imageList) {
    imageList.forEach((img) => {
      const parent = img.parentElement;
      img.addEventListener("mouseenter", function () {
        imageList.forEach((img) => {
          img.parentElement.classList.remove("active");
        });
        parent.classList.add("active");
        const numImage = img.getAttribute("data-id");
        const src = img.getAttribute("src");
        mainImage.setAttribute("src", src);
        mainImage.setAttribute("data-id", numImage);
      });
    });
  }

  document.getElementById("btnPrev").addEventListener("click", function () {
    currentIndex--;
    if (currentIndex < 1) {
      currentIndex = imageList.length;
    }

    imageListModal.forEach((img) => {
      img.classList.remove("active");
    });
    imageListModal.forEach((img, index) => {
      if (img.id == currentIndex) {
        img.classList.add("active");
        mainImageModal.setAttribute(
          "src",
          img.querySelector("img").getAttribute("src")
        );
      }
    });
  });

  document.getElementById("btnNext").addEventListener("click", function () {
    currentIndex++;
    if (currentIndex > imageList.length) {
      currentIndex = 1;
    }

    imageListModal.forEach((img) => {
      img.classList.remove("active");
    });

    imageListModal.forEach((img, index) => {
      if (img.id == currentIndex) {
        img.classList.add("active");
        mainImageModal.setAttribute(
          "src",
          img.querySelector("img").getAttribute("src")
        );
      }
    });
  });

  const user = document.getElementById("cart-user");
  const cart = document.querySelector(".cart");
  if (user && cart) {
    user.addEventListener("click", function () {
      cart.classList.toggle("active");
      body.classList.toggle("no-scroll");
    });
  }

  const removeCart = document.querySelectorAll(".cart-item-remove button");
  removeCart.forEach((btn) => {
    btn.addEventListener("click", function () {
      const cartItem = btn.closest(".cart-item");
      cartItem.remove();

      const cartItems = document.querySelectorAll(".cart-item");
      if (cartItems.length == 0) {
        document.querySelector(".cart-footer").style.display = "none";
        document.querySelector(".message-empty-cart").style.display = "block";
      }
    });
  });

  const btnHamburger = document.querySelector(".btn-hamburger");
  const btnCloseMenu = document.querySelector(".nav-mobile button");
  const menu = document.querySelector(".nav-mobile");
  if (btnHamburger) {
    btnHamburger.addEventListener("click", function () {
      menu.classList.add("active");
      body.classList.add("no-scroll");
    });

    btnCloseMenu.addEventListener("click", function () {
      menu.classList.remove("active");
      body.classList.remove("no-scroll");
    });
  }

  const btnPrevMain = document.getElementById("btnPrevMain");
  const btnNextMain = document.getElementById("btnNextMain");
  const images = document.querySelectorAll(".product-images-list .image img");

  let currentIndexMain = 1;

  btnPrevMain.addEventListener("click", function () {
    currentIndexMain--;

    if (currentIndexMain < 1) {
      currentIndexMain = images.length;
    }

    images.forEach((img) => {
      if (img.getAttribute("data-id") == currentIndexMain) {
        mainImage.setAttribute("src", img.getAttribute("src"));
      }
    });
  });

  btnNextMain.addEventListener("click", function () {
    currentIndexMain++;

    if (currentIndexMain > images.length) {
      currentIndexMain = 1;
    }

    images.forEach((img) => {
      if (img.getAttribute("data-id") == currentIndexMain) {
        mainImage.setAttribute("src", img.getAttribute("src"));
      }
    });
  });
});
