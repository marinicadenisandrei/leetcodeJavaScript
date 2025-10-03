/* Leetcode - 307. Range Sum Query - Mutable (JavaScript language) - Medium */

const { default: chalk } = require("chalk");

console.log(chalk.yellow("Leetcode - 307. Range Sum Query - Mutable (JavaScript language) - Medium"));

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

    update(idx, x) {
        this.arr[idx] = x;
    }
}

const numArray = new NumArray([1,3,5]);
console.log(
    chalk.green("Test 1:"),
    numArray.sumRange(0, 2),
    numArray.update(1, 2),
    numArray.sumRange(0, 2),
    "|",
    chalk.green("Passed")
);

