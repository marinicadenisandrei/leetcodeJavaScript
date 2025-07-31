/* Leetcode - 198. House Robber (JavaScript language) - Medium */

const { default: chalk } = require("chalk");

console.log(chalk.yellow("Leetcode - 198. House Robber (JavaScript language) - Medium"));

function rob(numsVar) {
    let result = 0;

    for (let i = 0; i < 2; i++) {
        let temp = 0;

        for (let j = i; j < numsVar.length; j += 2) {
            temp += numsVar[j];
        }
        
        result = (temp > result) ? temp : result;
    }

    return result
}

nums = [[1,2,3,1],[2,7,9,3,1]];

for (let test = 0; test < nums.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), rob(nums[test]), "|", chalk.green("Passed"));
}




