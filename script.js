"use strict";

const allSections = document.querySelectorAll("section");
const header = document.querySelector("header");
const discordBtn = document.querySelector("#discordBtn");
const mask = document.querySelector(".mask");
const discordDetails = document.querySelector(".discord--details");
const projectsContainer = document.querySelector(".projects-container");
///////////////////////////////////////////////////////////

const observer = new IntersectionObserver(
  (entries) => {
    const [entry] = entries;

    entry.target.classList.toggle("scroll", entry.isIntersecting);

    observer.unobserve(entry.target);
  },
  { threshold: 0.3 }
);

allSections.forEach((s) => {
  observer.observe(s);
});

discordBtn.addEventListener("click", () => {
  mask.style.display = "block";
  discordDetails.style.display = "flex";
  document.documentElement.style.overflow = "hidden";
});

mask.addEventListener("click", () => {
  mask.style.display = "none";
  discordDetails.style.display = "none";
  document.documentElement.style.overflow = "visible";
});
