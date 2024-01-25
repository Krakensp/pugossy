var d = document;
var $hamburgerBtn = d.querySelector(".hamburger-btn >*");
var $menu = d.querySelector(".menu");
d.addEventListener("click", function (e) {
    e.stopPropagation();
    if (e.target === $hamburgerBtn) {
        console.log("ok");
        if ($menu) {
            $menu.classList.toggle("is-active");
        }
    }
});
