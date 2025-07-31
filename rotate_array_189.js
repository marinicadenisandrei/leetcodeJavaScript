/* Leetcode - 189. Rotate Array (JavaScript language) - Medium */

const { default: chalk } = require("chalk");

console.log(chalk.yellow("Leetcode - 189. Rotate Array (JavaScript language) - Medium"));

function rotate(numsVar, kVar) {
    for (let i = 0; i < kVar; i++) {
        numsVar.unshift(numsVar[numsVar.length - 1]);
        numsVar.pop();
    }

    return numsVar;
}

let nums = [[1,2,3,4,5,6,7],[-1,-100,3,99]];
let k = [3,2];

for (let test = 0; test < nums.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), rotate(nums[test], k[test]), "|", chalk.green("Passed"));
}


