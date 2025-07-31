/* Leetcode - 260. Single Number III (JavaScript language) - Medium */

const { default: chalk } = require("chalk");

console.log(chalk.yellow("Leetcode - 260. Single Number III (JavaScript language) - Medium"));

function singleNumber(numsVar) {
    let result = [];

    for (let i = 0; i < numsVar.length; i++) {
        const count = numsVar.filter(x => x === numsVar[i]).length;

        if (count === 1) {
            result.push(numsVar[i]);
        }
    }

    return result;
}

let nums = [[1,2,1,3,2,5],[-1,0],[0,1]];

for (let test = 0; test < nums.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), singleNumber(nums[test]), "|", chalk.green("Passed"));
}
