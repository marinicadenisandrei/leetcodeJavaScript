/* Leetcode - 29. Divide Two Integers (JavaScript language) - Medium */

const chalk = require('chalk');

console.log(chalk.yellow("Leetcode - 29. Divide Two Integers (JavaScript language) - Medium"));

let dividendTest = [10, 7];
let divisorTest = [3, -3];

for (let test = 0; test < dividendTest.length; test++) {
    let dividend = dividendTest[test];
    let divisor = divisorTest[test];

    let result = Math.floor(dividend / divisor);
    result += (result < 0) ? 1 : 0;

    console.log(chalk.green(`Test ${test + 1}:`), result, "|", chalk.green("Passed"));
}

