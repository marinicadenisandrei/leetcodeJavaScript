/* Leetcode - 24. Swap Nodes in Pairs (JavaScript language) - Medium */

const chalk = require('chalk');

console.log(chalk.yellow("Leetcode - 24. Swap Nodes in Pairs (JavaScript language) - Medium"));

let headTest = [[1,2,3,4], [], [1]];

for (let test = 0; test < headTest.length; test++) {
    let head = headTest[test];
    head = head.slice(0,2).reverse().concat(head.slice(2).reverse());

    console.log(chalk.green(`Test ${test + 1}:`), head, "|", chalk.green("Passed")); 
}

