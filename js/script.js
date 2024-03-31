"use strict";

const section = document.querySelector(".section");
const button = section.querySelector(".button-box button");

button.addEventListener("click", () => {
    section.classList.toggle("active");
});