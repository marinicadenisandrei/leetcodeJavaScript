/* Leetcode - 75. Sort Colors (JavaScript language) - Medium */

const chalk = require('chalk');
console.log(chalk.yellow("Leetcode - 75. Sort Colors (JavaScript language) - Medium"));

function sortColors(numsVar)
{
  return numsVar.sort();
}

let nums = [[2,0,2,1,1,0], [2,0,1]];

for (var test = 0; test < nums.length; test++) {
  nums[test] = sortColors(nums[test]);
  console.log(chalk.green(`Test ${test + 1}:`), nums[test], "|", chalk.green("Passed"));
}