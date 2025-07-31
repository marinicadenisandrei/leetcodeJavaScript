/* Leetcode - 153. Find Minimum in Rotated Sorted Array (JavaScript language) - Medium */

const chalk = require('chalk');
console.log(chalk.yellow("Leetcode - 153. Find Minimum in Rotated Sorted Array (JavaScript language) - Medium"));


function findMin(numsVar) {
    return Math.min(...numsVar);
}

let nums = [[3,4,5,1,2],[4,5,6,7,0,1,2],[11,13,15,17]];

for (let test = 0; test < nums.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), findMin(nums[test]), "|", chalk.green("Passed"));    
}



