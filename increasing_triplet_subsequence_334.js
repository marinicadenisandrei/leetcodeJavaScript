/* Leetcode - 334. Increasing Triplet Subsequence (JavaScript language) - Medium */

const { default: chalk } = require("chalk");

console.log(chalk.yellow("Leetcode - 334. Increasing Triplet Subsequence (JavaScript language) - Medium"));

function increasingTriplet(numsVar) {
    for (let i = 0; i < numsVar.length - 2; i++) {
        let candidate = numsVar[i];
        let counter = 0;

        for (let j = i + 1; j < numsVar.length; j++) {
            if (candidate < numsVar[j]) {
                candidate++;
            }

            if (candidate == 2) {
                return true;
            }
        }        
    }

    return false;
}

let nums = [[1,2,3,4,5],[5,4,3,2,1],[2,1,5,0,4,6]];

for (let test = 0; test < nums.length; test++) {
    console.log(
        chalk.green(`Test ${test + 1}:`),
        increasingTriplet(nums[test]),
        "|",
        chalk.green("Passed")
    );
}
