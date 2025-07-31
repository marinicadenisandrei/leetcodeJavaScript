/* Leetcode - 164. Maximum Gap (JavaScript language) - Medium */

const chalk = require('chalk');
console.log(chalk.yellow("Leetcode - 164. Maximum Gap (JavaScript language) - Medium"));


function maximumGap(numsVar) {
    let maxGap = 0;
    numsVar.sort();
    
    for (let i = 0; i < numsVar.length - 1; i++) {
        maxGap = ((maxGap < numsVar[i + 1] - numsVar[i]) ? numsVar[i + 1] - numsVar[i] : maxGap);
    }

    return maxGap;
}

let nums = [[3,6,9,1],[10]];

for (let test = 0; test < nums.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), maximumGap(nums[test]), "|", chalk.green("Passed"));    
}

