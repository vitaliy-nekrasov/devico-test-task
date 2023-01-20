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

function foo(obj) {}

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
