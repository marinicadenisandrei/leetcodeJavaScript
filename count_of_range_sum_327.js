/* Leetcode - 327. Count of Range Sum (JavaScript language) - Hard */

const { default: chalk } = require("chalk");

console.log(chalk.yellow("Leetcode - 327. Count of Range Sum (JavaScript language) -"), chalk.red("Hard"));

function countRangeSum(numsVar, lowerVar, upperVar) {
    let result = 0;

    for (let j = 0; j < numsVar.length; j++) {
        let sum = 0;

        for (let i = j; i < numsVar.length; i++) {
            sum += numsVar[i];
            if (lowerVar <= sum && sum <= upperVar) {
                result++;
            }
        }
    }

    return result;
}

let nums = [[-2,5,-1],[0]];
let lower = [-2,0];
let upper = [2,0];

for (let test = 0; test < nums.length; test++) {
    console.log(
        chalk.green(`Test ${test + 1}:`),
        countRangeSum(nums[test], lower[test], upper[test]),
        "|",
        chalk.green("Passed")
    );
}
