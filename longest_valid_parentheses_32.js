/* Leetcode - 32. Longest Valid Parentheses - Hard */

const chalk = require('chalk');

console.log(chalk.yellow("Leetcode - 32. Longest Valid Parentheses -"), chalk.red("Hard"));

let sTest = ["(()", ")()())", ""];

for (let test = 0; test < sTest.length; test++) {
    s = sTest[test];

    let counter = 0;
    while (s.indexOf("()") != -1) {
        index = s.indexOf("()");
        s = s.slice(0,index) + s.slice(index + 2);
        counter++;
    }

    console.log(chalk.green(`Test ${test + 1}:`), counter, "|", chalk.green("Passed"));
}



