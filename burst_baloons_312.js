/* Leetcode - 312. Burst Balloons (JavaScript language) - Hard */

const { default: chalk } = require("chalk");

console.log(chalk.yellow("Leetcode - 312. Burst Balloons (JavaScript language) -"), chalk.red("Hard"));

function maxCoins(numsVar) {
    let result = 0;

    while (numsVar.length >= 3) {
        result = numsVar[0] * numsVar[1] * numsVar[2];
        numsVar.splice(1,1);
    }

    result += numsVar[0] * numsVar[1] * 2;
    
    return result;
}

let nums = [[3,1,5,8],[1,5]];

for (let test = 0; test < nums.length; test++) {
    console.log(
        chalk.green(`Test ${test + 1}:`),
        maxCoins(nums[test]),
        "|",
        chalk.green("Passed")
    );
}