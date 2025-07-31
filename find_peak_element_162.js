/* Leetcode - 162. Find Peak Element (JavaScript language) - Medium */

const chalk = require('chalk');
console.log(chalk.yellow("Leetcode - 162. Find Peak Element (JavaScript language) - Medium"));

function findPeakElement(numsVar) {
    sortedNumsVar = [...numsVar].sort();
    return numsVar.indexOf(sortedNumsVar[sortedNumsVar.length - 1]);
}

let nums = [[1,2,3,1],[1,2,1,3,5,6,4]];

for (let test = 0; test < nums.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), findPeakElement(nums[test]), "|", chalk.green("Passed"));
}

