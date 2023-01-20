// Create a function that will accumulate in itself and log the result of
// performing calculations that depend on the current accumulated value, as well
// as the new number and operator that were passed to the function.

function createCalc() {
  // variable for accumulating result
  let result = 0;

  // return the anonymous function
  return (value, operator) => {
    //   make calculations using switch
    switch (operator) {
      case "+":
        result += value;
        break;
      case "-":
        result -= value;
        break;
      case "*":
        result *= value;
        break;
      case "/":
        result /= value;
        break;
      default:
        return console.log("Please enter a valid value");
    }
    console.log(result);
  };
}

// assign a function to a variable
const calc = createCalc();

// testing
calc(5, "+"); // 5
calc(2, "*"); // 10
calc(3, "-"); // 7
calc(2, "*"); // 14
calc(7, "/"); // 2
