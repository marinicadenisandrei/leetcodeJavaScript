/* Leetcode - 237. Delete Node in a Linked List (JavaScript language) - Medium */

const { default: chalk } = require("chalk");

console.log(chalk.yellow("Leetcode - 237. Delete Node in a Linked List (JavaScript language) - Medium"));

function deleteNode(headVar, nodeVar) {
    headVar = headVar.filter(item => item !== nodeVar);

    return headVar;
}

var head = [[4,5,1,9],[4,5,1,9]]; 
var node = [5,1];

for (let test = 0; test < head.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), deleteNode(head[test], node[test]), "|", chalk.green("Passed"));
}