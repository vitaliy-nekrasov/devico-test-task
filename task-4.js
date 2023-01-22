// Create a similar element, when you click on any of the blocks it should change its color.
// Also each element should display the amount of times it has been clicked on it.
// IMPORTANT
// Imagine that your DOM has only a body node in it.
// All elements should be added from your js file.

// create a markup and add it to index.html
const markup = `<div class="container">
      <span class="grid__item grid__item--01">0</span>
      <div class="grid">
        ${new Array(5).fill('<span class="grid__item">0</span>').join("")}
      </div>
    </div>`;

const bodyEl = document.querySelector("body");
bodyEl.insertAdjacentHTML("afterbegin", markup);

// generate color function
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// a function for background color changes and countering clicks
function onSectionClick() {
  let count = 0;
  return function (e) {
    count += 1;
    e.currentTarget.style.backgroundColor = getRandomHexColor();
    e.currentTarget.textContent = count;
  };
}

// select an array of items elements and apply for each separately
// a background color and a click event listener
const itemsEl = document.querySelectorAll("span");
itemsEl.forEach((item) => {
  item.style.backgroundColor = getRandomHexColor();
  const handler = onSectionClick();
  item.addEventListener("click", handler);
});
