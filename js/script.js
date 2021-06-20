new Swiper(".first-screen-slider", {
  loop: true,
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },
});

new Swiper(".our__productions__slider", {
  loop: true,
  slidesPerView: 4,
  breakpoints: {
    1415: {
      slidesPerView: 4,
    },
    767: {
      slidesPerView: 2,
    },
    300: {
      slidesPerView: 1,
    },
  },
});

new Swiper(".partners__slider", {
  loop: true,
  slidesPerView: 4,
  breakpoints: {
    1415: {
      slidesPerView: 4,
    },
    767: {
      slidesPerView: 3,
    },
    300: {
      slidesPerView: 2,
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
