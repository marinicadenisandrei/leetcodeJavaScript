/* Leetcode - 239. Sliding Window Maximum (JavaScript) - Hard */

const { default: chalk } = require("chalk");

console.log(chalk.yellow("Leetcode - 239. Sliding Window Maximum (JavaScript) -"), chalk.red("Hard"));

function maxSlidingWindow(numsVar, kVar) {
    var result = [];

    for (let i = 0; i <= numsVar.length - kVar; i++) {
        var maxVar = 0;

        for (let j = i; j < i + kVar; j++) {
            maxVar = ((maxVar < numsVar[j]) ? numsVar[j] : maxVar);
        }

        result.push(maxVar);
    }    

    return result;
}

var nums = [[1,3,-1,-3,5,3,6,7],[1]];
var k = [3,1];

for (let test = 0; test < nums.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), maxSlidingWindow(nums[test], k[test]), "|", chalk.green("Passed"));
}
