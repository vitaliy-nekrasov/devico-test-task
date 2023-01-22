"use strict";
// Write a function that replaces all ones with zeros and vice versa for the object

const d = {
  left: {
    left: { left: 1, right: { left: 0, right: 1 } },
    right: {
      left: 0,
      right: 1,
    },
  },
  right: 1,
};

function foo(obj) {
  // iterate over an object
  for (const key in obj) {
    // if the value of the key is a number, convert it to a boolean,
    // change the value, and convert it back to a number (this method is possible
    //  only if the numbers in the object equal to 0 or 1)
    if (typeof obj[key] === "number") {
      obj[key] = Number(!Boolean(obj[key]));
      // if the value of the key is an object, then apply the same function to it
    } else {
      foo(obj[key]);
    }
  }
}

// testing
foo(d);
console.log(d);

/*
{
left: { left: {
left: 0, right: {
left: 1,
right: 0, },
}, right: {
left: 1,
right: 0, },
},
right: 0, }
*/
