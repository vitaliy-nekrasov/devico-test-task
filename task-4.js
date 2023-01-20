// Create a similar element, when you click on any of the blocks it should change its color.
// Also each element should display the amount of times it has been clicked on it.
// IMPORTANT
// Imagine that your DOM has only a body node in it.
// All elements should be added from your js file.

const items = document.querySelectorAll("span");

items.forEach((item) => {
  const handler = onSectionClick();
  item.addEventListener("click", handler);
});

function onSectionClick() {
  let count = 0;

  return function (e) {
    count += 1;
    e.currentTarget.textContent = count;
  };
}
