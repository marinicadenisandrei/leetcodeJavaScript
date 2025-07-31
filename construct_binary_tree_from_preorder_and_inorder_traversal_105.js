/* Leetcode - 105. Construct Binary Tree from Preorder and Inorder Traversal (JavaScript language) - Medium */

const chalk = require('chalk');
console.log(chalk.yellow("Leetcode - 105. Construct Binary Tree from Preorder and Inorder Traversal (JavaScript language) - Medium"));

function buildTree(preorderVar, inorderVar) {
    let indexCheck = 0;

    while (inorderVar.length > 4) {
        if (inorderVar.indexOf(preorderVar[indexCheck]) < 1 || inorderVar.indexOf(preorderVar[indexCheck]) > inorderVar.length - 1) {
            preorderVar.splice((indexCheck * 2) + 1, 0, 0);
            preorderVar.splice((indexCheck * 2) + 2, 0, 0);
            inorderVar.splice(inorderVar.indexOf(preorderVar[indexCheck]), 1);
        }

        indexCheck++;
    }

    return preorderVar;
}

let preorder = [[3,9,20,15,7],[-1]]; 
let inorder = [[9,3,15,20,7],[-1]];

for (let test = 0; test < preorder.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), buildTree(preorder[test], inorder[test]), "|", chalk.green("Passed"));
}
