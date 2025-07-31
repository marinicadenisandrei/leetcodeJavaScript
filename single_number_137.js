const chalk = require('chalk');
console.log(chalk.yellow("Leetcode - 137. Single Number II (JavaScript language) - Medium"));

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

    return -1;
}

let nums = [[2,2,3,2],[0,1,0,1,0,1,99]];
for (let test = 0; test < nums.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), singleNumber(nums[test]), "|", chalk.green("Passed"));    
}
