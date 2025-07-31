/* Leetcode - 268. Missing Number (JavaScript language) - Easy */

const { default: chalk } = require("chalk");

console.log(chalk.yellow("Leetcode - 268. Missing Number (JavaScript language) -"), chalk.green("Easy"));

function missingNumber(numsVar) {
    numsVar.sort();
    
    for (let i = 0; i < numsVar.length - 1; i++) {
        if (numsVar[i + 1] - numsVar[i] > 1) {
            return numsVar[i] + 1;
        }
    }

    return numsVar[numsVar.length - 1] + 1;
}

let nums = [[3,0,1],[0,1],[9,6,4,2,3,5,7,0,1]];

for (let test = 0; test < nums.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), missingNumber(nums[test]), "|", chalk.green("Passed"));
}
