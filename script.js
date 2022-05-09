


// script.js
const hambergerButton = document.querySelector(".hambergerMenu");
const HambergerMenuSelector = document.querySelector(".hambergerNavContainer");
const hambergerUlSelector = document.querySelector(".hambergerUl");

const toggleVisi = () => {
  console.log("ive been clicked");
  HambergerMenuSelector.classList.toggle("hambergerNavToggle");
}

hambergerButton.addEventListener("click", toggleVisi);
HambergerMenuSelector.addEventListener("click", toggleVisi);
