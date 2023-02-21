const toggleMenu = document.querySelector(".toggle__menu");
const header__nav = document.querySelector(".header__nav");
toggleMenu.addEventListener("click", () => {
  toggleMenu.classList.toggle("open");
  header__nav.classList.toggle("open");
});
