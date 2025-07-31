/* Leetcode - 86. Partition List (JavaScript language) - Medium */

const chalk = require('chalk');
console.log(chalk.yellow("Leetcode - 86. Partition List (JavaScript language) - Medium"));

function partition(headVar, xVar) {
    let lessThan = [];
    let greaterThan = [];

    for (let i = 0; i < headVar.length; i++) {
        if (headVar[i] < xVar) {
            lessThan.push(headVar[i])
        }
        else if (headVar[i] > xVar)
        {
            greaterThan.push(headVar[i]);
        }
    }

    lessThan.push(xVar);
    lessThan = [...lessThan, ...greaterThan];
    return lessThan;
}

let head = [[1,4,3,2,5,2], [2,1]];
let x = [3,2];

for (let test = 0; test < head.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), partition(head[test], x[test]), "|", chalk.green("Passed"));    
}
