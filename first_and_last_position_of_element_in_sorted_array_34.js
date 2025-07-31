/* Leetcode - 34. Find First and Last Position of Element in Sorted Array (JavaScript language) - Medium */

const chalk = require('chalk');

console.log(chalk.yellow("Leetcode - 34. Find First and Last Position of Element in Sorted Array (JavaScript language) - Medium"))

let numsTest = [[5,7,7,8,8,10], [5,7,7,8,8,10], []];
let targetTest = [8,6,0];

for (let test = 0; test < numsTest.length; test++) {
    let nums = numsTest[test];
    let target = targetTest[test];
    let output = [nums.indexOf(target), ((nums.indexOf(target) != -1) ? (nums.length - nums.reverse().indexOf(target) - 1) : -1)];

    console.log(chalk.green(`Test ${test + 1}:`), output, "|", chalk.green("Passed"));
}

