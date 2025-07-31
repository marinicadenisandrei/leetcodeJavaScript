/* Leetcode - 102. Binary Tree Level Order Traversal (JavaScript) - Medium */

const chalk = require('chalk');

console.log(chalk.yellow("Leetcode - 102. Binary Tree Level Order Traversal (JavaScript) - Medium"));

function levelOrder(rootVar) {
    let temp = [rootVar[0]];
    let output = [];
    output.push(temp);
    temp = [];

    for (let i = 0; i < rootVar.length; i++) {
        if (((i * 2) + 2) > rootVar.length) {
            break;
        }

        temp.push(rootVar[(i * 2) + 1]);
        temp.push(rootVar[(i * 2) + 2]);

        if (temp[0] != null && temp[1] != null) {
            output.push(temp);   
        }

        temp = [];
    }

    return output;
}

root = [[3,9,20,null,null,15,7],[1],[]];

for (let test = 0; test < root.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), levelOrder(root[test]), "|", chalk.green("Passed"));    
}
