/* Leetcode - 7. Reverse Integer (JavaScript language) - Medium */

const chalk = require('chalk');

console.log(chalk.yellow("Leetcode - 7. Reverse Integer (JavaScript language) - Medium"));

let xTest = [123, -123, 120];

for (let test = 0; test < xTest.length; test++) {
    let x = xTest[test];
    let sign = 1;

    (x < 0) ? sign = -1 : sign;
    (x < 0) ? x = x * -1 : x;

    x = x.toString();
    x = x.split("").reverse().join("") * sign;

    console.log(chalk.green(`Test ${test + 1}:`), x, "|", chalk.green("Passed"));
}

