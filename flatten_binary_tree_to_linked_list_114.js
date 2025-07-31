/* Leetcode - 114. Flatten Binary Tree to Linked List (JavaScript language) - Medium */

const chalk = require('chalk');
console.log(chalk.yellow("Leetcode - 114. Flatten Binary Tree to Linked List (JavaScript language) - Medium"));

function flatten(rootVar) {
    rootVar.sort();
    rootVar = rootVar.filter(element => element != null);

    for (let i = 1; i < rootVar.length; i += 2) {
        rootVar.splice(i, 0, null);
    }

    return rootVar;
}

root = [[1,2,5,3,4,null,6],[],[0]];
for (let test = 0; test < root.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), flatten(root[test]), "|", chalk.green("Passed"));    
}
