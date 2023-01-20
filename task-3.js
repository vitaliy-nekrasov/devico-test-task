// Make a function that takes a number n, and returns a two-dimensional array
// with length n * n, with 2 on the diagonal and 1 on the top and bottom of
//  the resulting segment

function bar(number) {
  // create two-dimensional array
  let arr = new Array(number);
  for (let i = 0; i < number; i += 1) {
    arr[i] = new Array(number).fill(0);
  }

  // iterate each element of the array, in two-dimensional array
  for (let i = 0; i < number; i += 1) {
    for (let j = 0; j < number; j += 1) {
      // change numbers diagonally from left to right
      if (i === j) {
        arr[i][j] = 2;
      }
      // change numbers diagonally from right to left
      else if (i === number - j - 1) {
        arr[i][j] = 2;
      }
      // change numbers on the bottom
      else if (i > number / 2 && j < i && j >= number - i) {
        arr[i][j] = 1;
      }
      // change numbers on top
      else if (i < number / 2 && j > i && j < number - i) {
        arr[i][j] = 1;
      }
    }
  }
  return arr;
}

// testing
console.log(bar(5));

/*[[2,1,1,1,2],
   [0,2,1,2,0], 
   [0,0,2,0,0], 
   [0,2,1,2,0], 
   [2,1,1,1,2],
] */
