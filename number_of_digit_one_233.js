/* Leetcode - 233. Number of Digit One (JavaScript language) - Hard */

const { default: chalk } = require("chalk");

console.log(chalk.yellow("Leetcode - 233. Number of Digit One (JavaScript language) -"), chalk.red("Hard"));

function countDigitOne(nVar) {
    var result = 0;

    for (let i = 1; i <= nVar; i++) {
        result += (i).toString().split('1').length - 1;
    }

    return result;
}

var n = [13,0];

for (let test = 0; test < n.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), countDigitOne(n[test]), "|", chalk.green("Passed"));    
}
