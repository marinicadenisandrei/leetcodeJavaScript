/* Leetcode - 128. Longest Consecutive Sequence (JavaScript language) - Medium */

const chalk = require('chalk');
console.log(chalk.yellow("Leetcode - 128. Longest Consecutive Sequence (JavaScript language) - Medium"));

function longestConsecutive(numsVar) {
    numsVar.sort((a,b) => a-b)
    let max = 0;
    let count = 1;

    for (let i = 0; i < numsVar.length - 1; i++) {
        if ((numsVar[i + 1] - numsVar[i] == 1)) {
            count++;
        }
        else
        {
            max = ((count > max) ? count : max);
            count = 1;
        }
    }
    
    max = ((count > max) ? count : max);

    return max;
}

let nums = [[100,4,200,1,3,2],[0,3,7,2,5,8,4,6,0,1]];

for (let test = 0; test < nums.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), longestConsecutive(nums[test]), "|", chalk.green("Passed"));    
}
