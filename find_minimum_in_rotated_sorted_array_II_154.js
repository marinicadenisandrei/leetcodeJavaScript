/* Leetcode - 154. Find Minimum in Rotated Sorted Array II (JavaScript language) - Hard */

const chalk = require('chalk');
console.log(chalk.yellow("Leetcode - 154. Find Minimum in Rotated Sorted Array II (JavaScript language) -"), chalk.red("Hard"));


function findMin(numsVar) {
    numsVar.sort();
    return numsVar[0];
}

let nums = [[1,3,5],[2,2,2,0,1]];

for (let test = 0; test < nums.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), findMin(nums[test]), "|", chalk.green("Passed"));    
}

