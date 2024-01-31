import slider from "./carrousel.js";
import scrollSpy from "./scroll_spy.js";

var d = document;
var $hamburgerBtn = d.querySelector(".hamburger-btn >*");
var $menu = d.querySelector(".menu");

d.addEventListener("DOMContentLoaded", (e) => {
  scrollSpy();
  slider();
});

d.addEventListener("click", function (e) {
  // e.stopPropagation();
  if (e.target === $hamburgerBtn || e.target.matches(".line")) {
    if ($menu) {
      $menu.classList.toggle("is-active");
    }
  }
});
