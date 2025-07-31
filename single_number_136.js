/* Leetcode - 136. Single Number (JavaScript language) - Easy */

const chalk = require('chalk');
console.log(chalk.yellow("Leetcode - 136. Single Number (JavaScript language) -"), chalk.green("Easy"));

function singleNumber(numsVar) {
    for (let i = 0; i < numsVar.length; i++) {
        let count = 0;
        
        for (let j = 0; j < numsVar.length; j++) {
            if (i != j && numsVar[i] == numsVar[j]) {
                count++;
            }
        }

        if (count == 0) {
            return numsVar[i];
        }
    }
}

let nums = [[2,2,1],[4,1,2,1,2],[1]];

for (let test = 0; test < nums.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), singleNumber(nums[test]), "|", chalk.green("Passed"));    
}
