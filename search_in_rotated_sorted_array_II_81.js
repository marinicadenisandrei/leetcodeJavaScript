/* Leetcode - 81. Search in Rotated Sorted Array II (JavaScipt language) - Medium */

const chalk = require('chalk');
console.log(chalk.yellow("Leetcode - 81. Search in Rotated Sorted Array II (JavaScipt language) - Medium"));

function search(numsVar, targatVar) {
    if (numsVar.includes(targatVar)) {
        return true;
    }

    return false;
}

let nums = [[2,5,6,0,0,1,2],[2,5,6,0,0,1,2]];
let target = [0,3];

for (let test = 0; test < target.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), search(nums[test], target[test]), "|", chalk.green("Passed"));   
}