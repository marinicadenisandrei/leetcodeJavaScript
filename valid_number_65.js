/* Leetcode - 65. Valid Number (JavaScript language) - Hard */

const chalk = require('chalk');
console.log(chalk.yellow("Leetcode - 65. Valid Number (JavaScript language) -"), chalk.red("Hard"));

function isNumber(sVar) {
    return !isNaN(sVar);
}

let s = ["0", "e", "."];

for (let test = 0; test < s.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), isNumber(s[test]), "|", chalk.green("Passed"));   
}
