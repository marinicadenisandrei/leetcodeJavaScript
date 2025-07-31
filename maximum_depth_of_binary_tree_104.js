/* Leetcode - 104. Maximum Depth of Binary Tree (JavaScript language) - Easy */

const chalk = require('chalk');
console.log(chalk.yellow("Leetcode - 104. Maximum Depth of Binary Tree (JavaScript language) -"), chalk.green("Easy"));

function maxDepth(rootVar) {
    let size = rootVar.length;
    let power = 1;
    let counter = 0;

    while (size > 0) {
        size -= power;
        power *= 2  
        counter++;  
    }

    return counter;
}

let root = [[3,9,20,null,null,15,7],[1,null,2]];

for (let test = 0; test < root.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`),maxDepth(root[test]), "|", chalk.green("Passed"));    
}
