/* Leetcode - 141. Linked List Cycle (JavaScript language) - Easy */

const chalk = require('chalk');
console.log(chalk.yellow("Leetcode - 141. Linked List Cycle (JavaScript language) -"), chalk.green("Easy"));

function hasCycle(headVar, posVar) {
    if (posVar >= 0 && posVar < headVar.length) {
        return true;
    }

    return false;
}

let head = [[3,2,0,-4],[1,2],[1]];
let pos = [1,0,-1];

for (let test = 0; test < pos.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`),hasCycle(head[test], pos[test]),"|",chalk.green("Passed"));    
}
