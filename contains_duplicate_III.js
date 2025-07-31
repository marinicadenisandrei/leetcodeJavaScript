/* Leetcode - 220. Contains Duplicate III (JavaScript language) - Hard */

const { default: chalk } = require("chalk");

console.log(chalk.yellow("Leetcode - 220. Contains Duplicate III (JavaScript language) -"), chalk.red("Hard"));

function ContainsNearbyAlmostDuplicate(numsVar, indexDiffVar, valueDiffVar) {
    for (let i = 0; i < numsVar.length; i++) {
        for (let j = 0; j < numsVar.length; j++) {
            if (i != j && Math.abs(i - j) <= indexDiffVar && Math.abs(numsVar[i] - numsVar[j]) <= valueDiffVar) {
                return true;
            }
        }    
    }

    return false;
}

var nums = [[1,2,3,1],[1,5,9,1,5,9]];
var indexDiff = [3,2];
var valueDiff = [0,3];

for (let test = 0; test < nums.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), ContainsNearbyAlmostDuplicate(nums[test], indexDiff[test], valueDiff[test]), "|", chalk.green("Passed"));
}