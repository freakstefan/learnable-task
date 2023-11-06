"use script";

const menuBtn = document.querySelector(".menu");
const openNavBtn = document.querySelector(".open");
const closeNavBtn = document.querySelector(".close");
const nav = document.querySelector(".div-left");

const openNav = function () {
  nav.classList.add("nav-open");
  closeNavBtn.classList.remove("hidden");
  openNavBtn.classList.add("hidden");
};

const closeNav = function () {
  nav.classList.remove("nav-open");
  closeNavBtn.classList.add("hidden");
  openNavBtn.classList.remove("hidden");
};

menuBtn.addEventListener("click", function () {
  if (closeNavBtn.classList.contains("hidden")) {
    openNav();
  } else {
    closeNav();
  }
});
