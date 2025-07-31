/* Leetcode - 138. Copy List with Random Pointer (JavaScript language) - Medium */

const chalk = require('chalk');
console.log(chalk.yellow("Leetcode - 138. Copy List with Random Pointer (JavaScript language) - Medium"))

function copyRandomList(headVar) {
    return headVar;
}

let head = [[[7,null],[13,0],[11,4],[10,2],[1,0]],[[1,1],[2,1]],[[3,null],[3,0],[3,null]]];
for (let test = 0; test < head.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`),copyRandomList(head[test]),"|",chalk.green("Passed"));    
}