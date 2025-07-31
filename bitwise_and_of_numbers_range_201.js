/* Leetcode - 201. Bitwise AND of Numbers Range (JavaScript language) - Medium */

const { default: chalk } = require("chalk");

console.log(chalk.yellow("Leetcode - 201. Bitwise AND of Numbers Range (JavaScript language) - Medium"));

function rangeBitwiseAnd(left, right) {
    while (left < right) {
        right = right & (right - 1);  
    }

    return left & right;
}

let left = [5,0,1];
let right = [7,0,2147483647];

for (let test = 0; test < left.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), rangeBitwiseAnd(left[test], right[test]), "|", chalk.green("Passed"));
}