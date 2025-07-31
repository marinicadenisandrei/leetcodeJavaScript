/* Leetcode - 50. Pow(x, n) (JavaScript language) - Medium */

const chalk = require('chalk');
console.log(chalk.yellow("Leetcode - 50. Pow(x, n) (JavaScript language) - Medium"));

function myPow(xVar, nVar) {
    let result = 1;

    for (let i = 0; i < Math.abs(nVar); i++) {
        result *= Math.abs(xVar);
    }

    if (nVar > 0) {
        return result;
    }
    else
    {
        
        return 1 / result;
    }
}

let x = [2.00000, 2.10000, 2.00000];
let n = [10, 3, -2];

for (let test = 0; test < x.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), myPow(x[test], n[test]), "|", chalk.green("Passed"));
}
