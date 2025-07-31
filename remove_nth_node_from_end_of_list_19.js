/* Leetcode - 19. Remove Nth Node From End of List (JavaScript language) - Medium */ 

const chalk = require('chalk');

console.log(chalk.yellow("Leetcode - 19. Remove Nth Node From End of List (JavaScript language) - Medium"))

let headTest = [[1,2,3,4,5], [1], [1,2]];
let nTest = [2, 1, 1];


for (let test = 0; test < headTest.length; test++) {
    let head = headTest[test];
    let n = nTest[test];

    head.splice(head.length - n,1);
    console.log(chalk.green(`Test ${test + 1}:`), head, "|", chalk.green("Passed")); 
}

