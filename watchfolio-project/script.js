/*for dark mode, handling modal clicks, and automating sliders. ~五百二十赫兹 */

const darkMode = document.querySelector(".moon-svg");
const headerText = document.querySelectorAll(".header-text");
const sectionElement = document.querySelector("section");
const listElement = document.querySelectorAll("li");
const parentSlider = document.querySelectorAll(".parent-slider");
const sliderTitle = document.querySelectorAll(".slider-title");
const more = document.querySelectorAll(".more");
const guideP = document.querySelectorAll(".guide p");
const sort = document.querySelector(".sort");
const blur = document.querySelector(".overlay-blur");
const modules = document.querySelectorAll(".module");
const links = document.querySelectorAll(".wf-link");
const signup = document.querySelector(".sign-up");


darkMode.addEventListener("click", darkModeToggle);

function darkModeToggle(){
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
  sort.classList.toggle("color-white");
};

darkModeToggle();

const trendingSliders = document.querySelectorAll(".slider.trending");
const trendingDots = document.querySelectorAll(".dot.trending")
const gainerSliders = document.querySelectorAll(".slider.gainers");
const gainerDots = document.querySelectorAll(".dot.gainer")

const dots = document.querySelectorAll(".dot");

const goToSlide = (slideNo, specificSlider) => {
  specificSlider.forEach((slider, index) => {
    slider.style.transform = `translateX(${(index - slideNo) * 100}%)`;
  });
};

const activeDot = (slideNo,specificDots) =>{
  specificDots.forEach((dot) => {
    dot.classList.remove("active");
  });
  //const activeDot = document.querySelector(`.dot[data-slide="${slideNo}"]`);
  const activeDot = specificDots[slideNo]
  activeDot?.classList.add("active");
};

const nextSlide = (seconds, specificSlider,specificDots) => {
  let currentSlide = 0;
  setTimeout(() => {
    setInterval(function () {
      if (currentSlide === specificSlider.length - 1) {
        currentSlide = 0;
      } else {
        currentSlide++;
      }
      goToSlide(currentSlide, specificSlider);
      activeDot(currentSlide,specificDots);
    }, 3000);
  }, seconds * 1000);
};

nextSlide(0, trendingSliders, trendingDots);
nextSlide(1.5, gainerSliders, gainerDots);


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

signup.addEventListener("click", () => {
  show("welcome");
});
