const darkMode = document.querySelector(".moon-svg");
const headerText = document.querySelectorAll(".header-text");
const sectionElement = document.querySelector("section");
const listElement = document.querySelectorAll("li");
const parentSlider = document.querySelectorAll(".parent-slider");
const sliderTitle = document.querySelectorAll(".slider-title");
const more = document.querySelectorAll(".more");
const guideP = document.querySelectorAll(".guide p");
const guide = document.querySelector(".guide");
const sort = document.querySelector(".sort");
const blur = document.querySelector(".overlay-blur");
const modules = document.querySelectorAll(".module");
const links = document.querySelectorAll(".wf-link");

darkMode.addEventListener("click", () => {
  document.body.classList.toggle("background-color-black");
  headerText.forEach((a) => {
    a.classList.toggle("color-white");
  });
  sectionElement.classList.toggle("background-color-black");
  parentSlider.forEach((slider) => {
    slider.classList.toggle("bkgrnd-prpl");
  });
  listElement.forEach((el) => {
    el.classList.toggle("color-white");
  });
  sliderTitle.forEach((style) => {
    style.classList.toggle("color-green");
  });
  more.forEach((el) => {
    el.classList.toggle("color-white");
  });
  guideP.forEach((p) => p.classList.toggle("color-white"));
  guide.classList.toggle("borders-top-bot");
  sort.classList.toggle("color-white");

  console.log("click");
});

const sliders = document.querySelectorAll(".slider.trending");
const dots = document.querySelectorAll(".dot.trending");

const goToSlide = (slideNo) => {
  sliders.forEach((slider, index) => {
    slider.style.transform = `translateX(${(index - slideNo) * 100}%)`;
  });
};

const activeDot = (slideNo) => {
  dots.forEach((dot) => {
    dot.classList.remove("active");
  });
  const activeDot = document.querySelector(
    `.dot.trending[data-slide="${slideNo}"]`
  );
  activeDot?.classList.add("active");
};

let currentSlide = 0;

const nextSlide = setInterval(function () {
  if (currentSlide === sliders.length - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  goToSlide(currentSlide);
  activeDot(currentSlide);
}, 3000);

const show = (str) => {
  blur.classList.remove("hidden");
  modules.forEach((module) => {
    if (module.classList.contains(`${str}`)) {
      module.classList.remove("hidden");
    }
  });
};

links.forEach((link) => {
  link.addEventListener("click", function () {
    if (this.classList.contains("wt")) {
      show("watches-tracked");
    } else if (this.classList.contains("et")) {
      show("exh-tracked");
    }
  });
});

blur.addEventListener("click", () => {
  blur.classList.add("hidden");
  modules.forEach((module) => {
    module.classList.add("hidden");
  });
});
