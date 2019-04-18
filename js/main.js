console.log("Hello main.js");

const sectionEl = document.querySelector(".article__section");

console.log("sectionEL", sectionEl);

const footerEl = document.querySelector(".article__footer");

console.log("I found the footer footerEL", footerEl);

const smallTextEl = document.querySelector(".smallText");
smallTextEl.classList.remove("smallText");
smallTextEl.classList.add("largeText");

const sectionAll = document.querySelectorAll(".article__section");
console.log("sectionAll", sectionAll);
console.log("first element", sectionAll[1]);

