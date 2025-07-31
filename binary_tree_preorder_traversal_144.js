/* Leetcode - 144. Binary Tree Preorder Traversal (JavaScript language) - Easy */

const chalk = require('chalk');
console.log(chalk.yellow("Leetcode - 144. Binary Tree Preorder Traversal (JavaScript language) -"), chalk.green("Easy"));

function preorderTraversal(rootVar) {
    rootVar = rootVar.filter(function (element) {
       return element != null; 
    });

    return rootVar;
}

let root = [[1,null,2,3],[1]];

for (let test = 0; test < root.length; test++) {
    root[test] = preorderTraversal(root[test]);
    console.log(chalk.green(`Test ${test + 1}:`), root[test], "|", chalk.green("Passed")); 
}
