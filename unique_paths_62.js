/* Leetcode - 62. Unique Paths (JavaScript language) - Medium */

const chalk = require('chalk');
console.log(chalk.yellow("Leetcode - 62. Unique Paths (JavaScript language) - Medium"));

function uniquePaths(mVar, nVar) {
    let table = [];

    for (let i = 0; i < mVar; i++) {
        table.push([]);
        for (let j = 0; j < nVar; j++) {
            table[i].push(0);
        }
    }
    
    for (let i = 0; i < mVar; i++) {
        table[i][nVar - 1] = 1;
    }

    for (let i = 0; i < nVar; i++) {
        table[mVar - 1][i] = 1;
    }

    for (let i = mVar - 2; i >= 0; i--) {
        for (let j = nVar - 2; j >= 0; j--) {
            table[i][j] = table[i][j + 1] + table[i + 1][j];
        }
    }

    return table[0][0];
}

let m = [3, 3];
let n = [7, 2];

for (let test = 0; test < m.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), uniquePaths(m[test], n[test]), "|", chalk.green("Passed"));   
}