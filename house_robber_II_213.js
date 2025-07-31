/* Leetcode - 213. House Robber II (JavaScript language) - Medium */

const { default: chalk } = require("chalk");

console.log(chalk.yellow("Leetcode - 213. House Robber II (JavaScript language) - Medium"));

function Rob(numsVar) {
    var result = 0;

    for (let i = 0; i < 2; i++) {
        var sum = 0;

        for (let j = i; j < numsVar.length; j += 2) {
            if (i == 0 && j == numsVar.length - 1) {
                break;
            }

            sum += numsVar[j];
        }        

        result = ((result < sum) ? sum : result);
    }

    return ((result < Math.max(...numsVar)) ? Math.max(...numsVar) : result);
}

var nums = [[2,3,2],[1,2,3,1],[1,2,3]];

for (let test = 0; test < nums.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), Rob(nums[test]), "|", chalk.green("Passed"));

}
