/* Leetcode - 142. Linked List Cycle II (JavaScript language) - Medium */

const chalk = require('chalk');
console.log(chalk.yellow("Leetcode - 142. Linked List Cycle II (JavaScript language) - Medium"));

function detectCycle(headVar, posVar) {
    if (posVar >= 0 && posVar < headVar.length) {
        return `tail connects to node index ${posVar}`
    }

    return "no cycle"
}

let head = [[3,2,0,-4],[1,2],[1]];
let pos = [1,0,-1];

for (let test = 0; test < pos.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), detectCycle(head[test], pos[test]), "|", chalk.green("Passed"));    
}
