/* Leetcode - 100. Same Tree (JavaScript language) - Easy */

const chalk = require('chalk')
console.log(chalk.yellow("Leetcode - 100. Same Tree (JavaScript language) -"), chalk.green("Easy"));

function isSameTree(pVar, qVar) {
    if (pVar.length != qVar.length) {
        return false;
    }

    for (let i = 0; i < pVar.length; i++) {
        if (pVar[i] != qVar[i]) {
            return false;
        }
    }

    return true;
}

const p = [[1,2,3],[1,2],[1,2,1]]; 
const q = [[1,2,3],[1,null,2],[1,1,2]];

for (let test = 0; test < p.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), isSameTree(p[test], q[test]), "|", chalk.green("Passed"));    
}
