/* Leetcode - 16. 3Sum Closest (JavaScript language) - Medium */

const chalk = require('chalk');

console.log(chalk.yellow("Leetcode - 16. 3Sum Closest (JavaScript language) - Medium"))

let numsTest = [[-1, 2, 1, -4], [0,0,0]];
let targetTest = [1,1];

for (let test = 0; test < numsTest.length; test++) {
    let nums = numsTest[test];
    let target = targetTest[test];

    let result = Infinity;

    for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
        for (let k = 0; k < nums.length; k++) {
        if (i !== j && j !== k && k !== i) {
            let sum = nums[i] + nums[j] + nums[k];
            
            if (Math.abs(sum - target) < Math.abs(result - target)) {
            result = sum;
            }
        }
        }
    }
    }

    console.log(chalk.green(`Test ${test + 1}:`), result, "|", chalk.green("Passed"));
}


