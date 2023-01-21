// Create a similar element, when you click on any of the blocks it should change its color.
// Also each element should display the amount of times it has been clicked on it.
// IMPORTANT
// Imagine that your DOM has only a body node in it.
// All elements should be added from your js file.

// create markup and add it to index.html
const markup = `<div class="container">
      <span class="grid__item grid__item--01">0</span>
      <div class="grid">
        <span class="grid__item">0</span>
        <span class="grid__item">0</span>
        <span class="grid__item">0</span>
        <span class="grid__item">0</span>
        <span class="grid__item">0</span>
      </div>
    </div>`;

const bodyEl = document.querySelector("body");
bodyEl.insertAdjacentHTML("afterbegin", markup);

// select an array of items elements and for each separately apply
// a background color and a click event listener
const itemsEl = document.querySelectorAll("span");
itemsEl.forEach((item) => {
  item.style.backgroundColor = getRandomHexColor();
  const handler = onSectionClick();
  item.addEventListener("click", handler);
});

// a function that, when clicked, changes the background color and the click counter
function onSectionClick() {
  let count = 0;
  return function (e) {
    count += 1;
    e.currentTarget.style.backgroundColor = getRandomHexColor();
    e.currentTarget.textContent = count;
  };
}

// generate color function
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
