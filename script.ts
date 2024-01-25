const d: Document = document;

const $hamburgerBtn: Element | null = d.querySelector(".hamburger-btn >*");
const $menu: Element | null = d.querySelector(".menu");

d.addEventListener("click", (e: Event) => {
  e.stopPropagation();
  if (e.target === $hamburgerBtn) {
    console.log("ok");
    if ($menu) {
      $menu.classList.toggle("is-active");
    }
  }
});
