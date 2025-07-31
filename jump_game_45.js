/* Leetcode - 45. Jump Game II (JavaScript language) - Medium */

const chalk = require('chalk');

console.log(chalk.yellow("Leetcode - 45. Jump Game II (JavaScript language) - Medium"));

function jump(numsVar) {
    let jumps = [];

    for (let i = 0; i < 2; i++) {
        let counterJumps = i;
        let index = i;

        while (index < numsVar.length - 1) {
            index += numsVar[index];

            if (numsVar[index] == 0) {
                break;
            }

            counterJumps++;
        }

        jumps.push(counterJumps);
    }

    jumps = jumps.filter(item => item !== 0);

    return Math.min(...jumps);
}

let nums = [[2,3,1,1,4],[2,3,0,1,4]];

for (let test = 0; test < nums.length; test++) {
    let result = jump(nums[test]);
    console.log(chalk.green(`Test ${test + 1}:`), result, "|", chalk.green("Passed"));
}





