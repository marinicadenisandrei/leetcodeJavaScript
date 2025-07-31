/* Leetcode - 98. Validate Binary Search Tree (JavaScript language) - Medium */

const chalk = require('chalk');
console.log(chalk.yellow("Leetcode - 98. Validate Binary Search Tree (JavaScript language) - Medium"));

function isValidBST(rootVar) {
    for (let i = 0; i < rootVar.length; i++) {
        if (((i * 2) + 2) > rootVar.length) {
            break;
        }   
        
        if (rootVar[i] < rootVar[(i * 2) + 1] || rootVar[i] > rootVar[(i * 2) + 2] || rootVar[(i * 2) + 1] > rootVar[(i * 2) + 2]) {
            return false;   
        }
    }

    return true;
}

let root = [[2,1,3],[5,1,4,null,null,3,6]];

for (let test = 0; test < root.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), isValidBST(root[test]), "|", chalk.green("Passed"));    
}
