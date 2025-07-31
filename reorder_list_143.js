/* Leetcode - 143. Reorder List (JavaScript language) - Medium */

const chalk = require('chalk');
console.log(chalk.yellow("Leetcode - 143. Reorder List (JavaScript language) - Medium"));

function reorderList(headVar) {
    let result = [];

    for (let i = 0; i < (headVar.length / 2); i++) {
        result.push(headVar[i]);
        result.push(headVar[headVar.length - 1 - i]);    
    }

    if (((headVar.length % 2 == 0) ? false : true)) {
        result.pop();
    }

    return result;
}

let head = [[1,2,3,4],[1,2,3,4,5]];

for (let test = 0; test < head.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), reorderList(head[test]), "|", chalk.green("Passed"));    
}
