/* Leetcode - 303. Range Sum Query - Immutable (JavaScript language) - Easy */

const { default: chalk } = require("chalk");

console.log(chalk.yellow("Leetcode - 303. Range Sum Query - Immutable (JavaScript language) -"), chalk.green("Easy"));

class NumArray {
  constructor(arr) {
    this.arr = arr;
  }

  sumRange(start, end) {
    let sum = 0;

    for (let i = start; i <= end; i++) {
        sum += this.arr[i];
    }

    return sum;
  }
}

let arr = [-2, 0, 3, -5, 2, -1];
const numArray = new NumArray(arr);
console.log(
    chalk.green("Test 1:"),
    numArray.sumRange(0, 2), numArray.sumRange(2, 5), numArray.sumRange(0, 5),
    "|",
    chalk.green("Passed")
);

