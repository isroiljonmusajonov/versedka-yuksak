const menuBtn = document.querySelector(".menu-btn");
const nav = document.getElementById("nav");
const toTop = document.querySelector(".to-top");
const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");
const cards2 = document.getElementById("Вопрос2");
const cards1 = document.getElementById("Вопрос1");
const cards3 = document.getElementById("Вопрос3");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});
let menuOpen = false;
menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    menuOpen = false;
  }
});
menuBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
});
box2.addEventListener("click", () => {
  cards2.classList.toggle("active");
});
box1.addEventListener("click", () => {
  cards1.classList.toggle("active");
});
box3.addEventListener("click", () => {
  cards3.classList.toggle("active");
});
