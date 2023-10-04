const hamburguer = document.getElementById("hamburguer");
const navMenu = document.querySelector(".nav__menu");
const total = document.querySelector(".total")

hamburguer.addEventListener("click", () => {
  hamburguer.classList.toggle("active");
  navMenu.classList.toggle("active");
  total.classList.toggle("active");
});