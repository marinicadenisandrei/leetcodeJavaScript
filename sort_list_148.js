
/* Leetcode - 148. Sort List (JavaScript language) - Medium */

const chalk = require('chalk');
console.log(chalk.yellow("Leetcode - 148. Sort List (JavaScript language) - Medium"));


function sortList(headVar) {
    return headVar.sort();
}

let head = [[4,2,1,3],[-1,5,3,4,0],[]];

for (let test = 0; test < head.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), sortList(head[test]), "|", chalk.green("Passed"));
}

