/* Leetcode - 124. Binary Tree Maximum Path Sum (JavaSceipt language) - Hard */

const chalk = require('chalk');
console.log(chalk.yellow("Leetcode - 124. Binary Tree Maximum Path Sum (JavaSceipt language) -"), chalk.red("Hard"));

function maxPathSum(rootVar) {
    let result = 0;

    for (let i = 0; i < rootVar.length; i++) {
        if (((i * 2) + 2) > rootVar.length - 1) {
            break;
        }

        let sum = rootVar[i] + rootVar[(i * 2) + 1] + rootVar[(i * 2) + 2];
        result = ((sum > result) ? sum : result);
    }

    return result;
}

let root = [[1,2,3],[-10,9,20,null,null,15,7]];

for (let test = 0; test < root.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), maxPathSum(root[test]), "|", chalk.green("Passed"));    
}
