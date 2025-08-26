/* Leetcode - 287. Find the Duplicate Number (JavaScript language) - Medium */

const { default: chalk } = require("chalk");

console.log(chalk.yellow("Leetcode - 287. Find the Duplicate Number (JavaScript language) - Medium"));

function findDuplicate(numsVar) {
    for (let i = 0; i < numsVar.length; i++) {
        let count = numsVar.filter(n => n === numsVar[i]).length;
        
        if (count > 1) {
            return numsVar[i];
        }
    }

    return -1;
}

nums = [[1,3,4,2,2],[3,1,3,4,2],[3,3,3,3,3]];

for (let test = 0; test < nums.length; test++) {
    console.log(
        chalk.green(`Test ${test + 1}:`),
        findDuplicate(nums[test]),
        "|",
        chalk.green("Passed")
    );
}
