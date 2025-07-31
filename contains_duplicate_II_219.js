/* Leetcode - 219. Contains Duplicate II (JavaScript language) - Easy */

const { default: chalk } = require("chalk");

console.log(chalk.yellow("Leetcode - 219. Contains Duplicate II (JavaScript language) -"), chalk.green("Easy"));

function ContainsNearbyDuplicate(numsVar, kVar) {
    for (let i = 0; i < numsVar.length; i++) {
        for (let j = 0; j < numsVar.length; j++) {
            if (i != j && numsVar[i] == numsVar[j] && Math.abs(i - j) <= kVar) {
                return true;
            }
        }
    }

    return false;
}

var nums = [[1,2,3,1],[1,0,1,1],[1,2,3,1,2,3]];
var k = [3,1,2];

for (let test = 0; test < k.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), ContainsNearbyDuplicate(nums[test], k[test]), "|", chalk.green("Passed"));
}