/* Leetcode - 217. Contains Duplicate (Java language) - Easy */

const { default: chalk } = require("chalk");

console.log(chalk.yellow("Leetcode - 217. Contains Duplicate (Java language) -"), chalk.green("Easy"));

function ContainsDuplicate(numsVar) {
    return new Set(numsVar).size !== numsVar.length;
}

var nums = [[1,2,3,1],[1,2,3,4],[1,1,1,3,3,4,3,2,4,2]];
for (let test = 0; test < nums.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), ContainsDuplicate(nums[test]), "|", chalk.green("Passed"));
}