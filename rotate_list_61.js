/* Leetcode - 61. Rotate List (JavaScript language) - Medium */

const chalk = require('chalk');

console.log(chalk.yellow("Leetcode - 61. Rotate List (JavaScript language) - Medium"));

function rotateRight(headVar, kVar) {
    for (let i = 0; i < kVar; i++) {
        headVar = [headVar[headVar.length - 1], ...headVar.slice(0, headVar.length - 1)];
    }

    return headVar;
}

let head = [[1,2,3,4,5], [0,1,2]];
let k = [2, 4];

for (let test = 0; test < head.length; test++) {
    head[test] = rotateRight(head[test], k[test]);
    console.log(chalk.green(`Test ${test + 1}:`), head[test], " | ", chalk.green("Passed"));
}
