new Swiper(".first-screen-slider", {
  loop: true,
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },
});

new Swiper(".our__productions__slider", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 4,
  breakpoints: {
    1620: {
      slidesPerView: 4,
    },
    1415: {
      slidesPerView: 3.25,
    },
    992: {
      slidesPerView: 2.15,
    },
    768: {
      slidesPerView: 1.5,
    },
    425: {
      slidesPerView: 1.25,
    },
    200: {
      slidesPerView: 1.15,
    },
  },
});

new Swiper(".partners__slider", {
  loop: true,
  slidesPerView: 4,
  breakpoints: {
    1415: {
      centeredSlides: false,
      slidesPerView: 4,
    },
    769: {
      centeredSlides: false,
      slidesPerView: 3,
    },
    576: {
      centeredSlides: false,
      slidesPerView: 2,
    },
    420: {
      centeredSlides: true,
      slidesPerView: 1.8,
    },
    300: {
      centeredSlides: true,
      slidesPerView: 1.5,
    },
  },
});

const menuON = document.querySelector("#btn-on");
const menuOff = document.querySelector("#btn-ex");
const body = document.querySelector("body");

menuON.addEventListener("click", () => {
  body.classList.add("true__menu");
  body.classList.remove("false__menu");
  menuON.classList.add("exit");
  menuOff.classList.remove("exit");
  menuOff.classList.add("ON");
});
menuOff.addEventListener("click", () => {
  body.classList.add("false__menu");
  body.classList.remove("true__menu");
  menuOff.classList.add("exit");
  menuON.classList.remove("exit");
  menuON.classList.add("ON");
});
