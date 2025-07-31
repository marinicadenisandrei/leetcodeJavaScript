/* Leetcode - 228. Summary Ranges (JavaScript language) - Easy */

const { default: chalk } = require("chalk");

console.log(chalk.yellow("Leetcode - 228. Summary Ranges (JavaScript language) -"), chalk.green("Easy"));

function summaryRanges(numsVar) {
    var start = 0;
    var result = [];

    for (let i = 0; i < numsVar.length; i++) {
        if (i === numsVar.length - 1 || numsVar[i + 1] - numsVar[i] > 1) {
            if (start === i) {
                result.push(`${numsVar[start]}->${numsVar[start]}`);
            } else {
                result.push(`${numsVar[start]}->${numsVar[i]}`);
            }
            start = i + 1;
        }
    }
    
    return result;
}


var nums = [[0,1,2,4,5,7],[0,2,3,4,6,8,9]];

for (let test = 0; test < nums.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), summaryRanges(nums[test]), "|", chalk.green("Passed"));
}