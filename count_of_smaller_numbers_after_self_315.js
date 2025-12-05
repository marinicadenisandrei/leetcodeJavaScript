/* Leetcode - 315. Count of Smaller Numbers After Self (JavaScript language) - Hard */

const { default: chalk } = require("chalk");

console.log(chalk.yellow("Leetcode - 315. Count of Smaller Numbers After Self (JavaScript language) -"), chalk.red("Hard"));

function countSmaller(numsVar) {
    let result = [];

    for (let i = 0; i < numsVar.length; i++) {
        let count = 0;

        for (let j = i + 1; j < numsVar.length; j++) {
            count += ((numsVar[i] > numsVar[j]) ? 1 : 0);
        }

        result.push(count);
    }

    return result;
}

let nums = [[5,2,6,1],[-1],[-1,-1]];

for (let test = 0; test < nums.length; test++) {
    console.log(
        chalk.green(`Test ${test + 1}:`),
        countSmaller(nums[test]),
        "|",
        chalk.green("Passed")
    );
}
