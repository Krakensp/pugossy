const d = document;

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

export default scrollSpy;
