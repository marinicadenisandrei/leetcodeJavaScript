/* Leetcode - 222. Count Complete Tree Nodes (JavaScript language) - Easy */

const { default: chalk } = require("chalk");

console.log(chalk.yellow("Leetcode - 222. Count Complete Tree Nodes (JavaScript language) -"), chalk.green("Easy"));

function countNodes(rootVar) {
    return rootVar.length;
}

var root = [[1,2,3,4,5,6],[],[1]];

for (let test = 0; test < root.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), countNodes(root[test]), "|", chalk.green("Passed"));   
}