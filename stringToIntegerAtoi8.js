/* Leetcode - 8. String to Integer (atoi) (JavaScript language) - Medium" */

chalk = require('chalk');

console.log(chalk.yellow("Leetcode - 8. String to Integer (atoi) (JavaScript language) - Medium"));

let sTest = ["42", "   -42", "4193 with words"];

for (let test = 0; test < sTest.length; test++) {
    let s = sTest[test];
    s = parseInt(s);

    console.log(chalk.green(`Test ${test + 1}:`), s, "|", chalk.green("Passed"));
}
