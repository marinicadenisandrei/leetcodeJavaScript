/* Leetcode - 209. Minimum Size Subarray Sum (JavaScript) - Medium */

const { default: chalk } = require("chalk");

console.log(chalk.yellow("Leetcode - 209. Minimum Size Subarray Sum (JavaScript) - Medium"));

function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}

function minSubArrayLen(targetVar, numsVar) {
    let result = numsVar.length;
    let finder = false;

    for (let i = 0; i <= numsVar.length; i++) {
        for (let j = 0; j <= numsVar.length; j++) {
            let slicedArray = numsVar.slice(i,j);

            if (sumArray(slicedArray) == targetVar && result > slicedArray.length && slicedArray.length > 0) {
                result = slicedArray.length;
                finder = true;
            }            
        }
    }

    return ((finder) ? result : 0);
}


let target = [7,4,11];
let nums = [[2,3,1,2,4,3],[1,4,4],[1,1,1,1,1,1,1,1]];

for (let test = 0; test < target.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), minSubArrayLen(target[test], nums[test]), "|", chalk.green("Passed"));
}