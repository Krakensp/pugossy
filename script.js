var d = document;
var $hamburgerBtn = d.querySelector(".hamburger-btn >*");
var $menu = d.querySelector(".menu");

function scrollSpy() {
  const $sections = d.querySelectorAll("section[data-scroll]");
  const cb = (entries) => {
    entries.forEach((entry) => {
      let id = entry.target.getAttribute("id");
      if (entry.isIntersecting) {
        d.querySelector(`a[data-scroll][href="#${id}"]`).classList.add(
          "active-section"
        );
      } else {
        d.querySelector(`a[data-scroll][href="#${id}"]`).classList.remove(
          "active-section"
        );
      }
    });
  };

  const observer = new IntersectionObserver(cb, {
    threshold: [0.5],
  });

  $sections.forEach((el) => observer.observe(el));
}

d.addEventListener("DOMContentLoaded", (e) => {
  scrollSpy();
});

d.addEventListener("click", function (e) {
  e.stopPropagation();
  if (e.target === $hamburgerBtn) {
    console.log("ok");
    if ($menu) {
      $menu.classList.toggle("is-active");
    }
  }
});
