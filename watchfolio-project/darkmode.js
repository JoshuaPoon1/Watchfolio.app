/*for dark mode only. it is not ready for deployment yet. */

const darkMode = document.querySelector(".moon-svg");
const headerText = document.querySelectorAll(".header-text");
const sectionElement = document.querySelector("section");
const listElement = document.querySelectorAll("li");
const parentSlider = document.querySelectorAll(".parent-slider");
const sliderTitle = document.querySelectorAll(".slider-title");
const more = document.querySelectorAll(".more");
const guideP = document.querySelectorAll(".guide p");
const sort = document.querySelector(".sort");
const th = document.querySelectorAll("th");
const td = document.querySelectorAll("td");
const author = document.querySelector(".author");
const filterBy = document.querySelector(".select-filter");
const blur = document.querySelector(".overlay-blur");
const modules = document.querySelectorAll(".module");
const links = document.querySelectorAll(".wf-link");
const signup = document.querySelector(".sign-up");

let isDarkmode = false;

darkMode.addEventListener("click", darkModeToggle);

function darkModeToggle() {
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
  th.forEach((th) => {
    th.classList.toggle("color-white");
  });
  td.forEach((td) => {
    td.classList.toggle("color-white");
  });
  author.classList.toggle("color-white");

  guideP.forEach((p) => p.classList.toggle("color-white"));
  sort.classList.toggle("color-white");
  isDarkmode = !isDarkmode;
}
darkModeToggle();
