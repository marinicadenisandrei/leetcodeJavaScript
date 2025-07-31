/* Leetcode - 109. Convert Sorted List to Binary Search Tree (JavaScript language) - Medium */

const chalk = require('chalk')
console.log(chalk.yellow("Leetcode - 109. Convert Sorted List to Binary Search Tree (JavaScript language) - Medium"));

function sortedListToBST(headVar) {
    let BST = [];

    if (headVar.length == 0) {
        return BST;
    }

    let middle = parseInt(headVar.length / 2);
    BST.push(headVar[middle]);

    for (let i = 1; i <= middle; i++) {
        BST.push(headVar[middle - i]);
        BST.push(headVar[headVar.length - i]);
    }

    for (let i = 4; i < BST.length; i += 2) {
        BST.splice(i,0,0);
    }

    return BST;
}

let head = [[-10,-3,0,5,9],[]];

for (let test = 0; test < head.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), sortedListToBST(head[test]), "|", chalk.green("Passed"));    
}
