const d = document;

export default function slider() {
  const $nextBtns = d.querySelectorAll(".slider-btns .next");
  const $prevBtns = d.querySelectorAll(".slider-btns .prev");
  const $slides = d.querySelectorAll(".slider-slide");

  console.log($nextBtns);

  d.addEventListener("click", (e) => {
    if (e.target === $prevBtns || e.target.matches(".prev-rows")) {
      e.preventDefault();

      if ($slides) {
        let slidesSlider = d.querySelectorAll(
          `.slider-slide[data-slider='${e.target.dataset.slider}']`
        );

        let activeSlide;

        slidesSlider.forEach((slide) => {
          if (slide.classList.contains("active")) {
            activeSlide = slide;
            slide.classList.remove("active");
          }
        });

        let actualSlide = parseInt(activeSlide.dataset.slide);

        actualSlide--;

        if (actualSlide < 0) {
          actualSlide = slidesSlider.length - 1;
        }

        slidesSlider[actualSlide].classList.add("active");
      }
    }
    if (e.target === $nextBtns || e.target.matches(".next-rows")) {
      e.preventDefault();

      if ($slides) {
        let slidesSlider = d.querySelectorAll(
          `.slider-slide[data-slider='${e.target.dataset.slider}']`
        );

        let activeSlide;

        slidesSlider.forEach((slide) => {
          if (slide.classList.contains("active")) {
            activeSlide = slide;
            slide.classList.remove("active");
          }
        });

        let actualSlide = parseInt(activeSlide.dataset.slide);

        actualSlide++;

        if (actualSlide >= slidesSlider.length) {
          actualSlide = 0;
        }

        slidesSlider[actualSlide].classList.add("active");
      }
    }
  });
}
