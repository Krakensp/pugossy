const d = document;

const $hamburgerBtn = d.querySelector(".hamburger-btn >*");
const $menu = d.querySelector(".menu");

d.addEventListener("click", (e) => {
  if (e.target === $hamburgerBtn) {
    console.log("ok");
    $menu.classList.toggle("is-active");
  }
});
