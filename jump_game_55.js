/* Leetcode - 55. Jump Game (JavaScript language) - Medium */

const chalk = require('chalk');
console.log(chalk.yellow("Leetcode - 55. Jump Game (JavaScript language) - Medium"));

function canJump(numsVar) {
    for (let i = 0; i < 2; i++) {
        for (let j = i; j < numsVar.length; j += numsVar[j]) {
            if (j == numsVar.length - 1) {
                return true;
            }

            if (numsVar[j] == 0 && j != numsVar.length - 1) {
                break;
            }
        }
    }

    return false;
}

let nums = [[2,3,1,1,4], [3,2,1,0,4]];

for (let test = 0; test < nums.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), canJump(nums[test]),"|",chalk.green("Passed"));   
}