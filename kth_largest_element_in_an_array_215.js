/* Leetcode - 215. Kth Largest Element in an Array (JavaScript language) - Medium */

const { default: chalk } = require("chalk");

console.log(chalk.yellow("Leetcode - 215. Kth Largest Element in an Array (JavaScript language) - Medium"));

function FindKthLargest(numsVar, kVar) {   
    return numsVar.sort((a, b) => b - a)[kVar - 1];
}

var nums = [[3,2,1,5,6,4],[3,2,3,1,2,4,5,5,6]]; 
var k = [2,4];

for (let test = 0; test < nums.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), FindKthLargest(nums[test], k[test]), "|", chalk.green("Passed"));
}
