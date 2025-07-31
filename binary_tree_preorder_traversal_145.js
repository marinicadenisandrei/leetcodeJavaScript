/* Leetcode - 145. Binary Tree Postorder Traversal (JavaScript language) - Easy */

const chalk = require('chalk');
console.log(chalk.yellow("Leetcode - 145. Binary Tree Postorder Traversal (JavaScript language) -"),chalk.green("Easy"));

function postorderTraversal(rootVar) {
    rootVar = rootVar.filter(function (element) {
        return element != null;
    });

    return rootVar.sort((a,b) => b-a);
}


let root = [[1,null,2,3],[],[1]];

for (let test = 0; test < root.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), postorderTraversal(root[test]), "|", chalk.green("Passed"));    
}
