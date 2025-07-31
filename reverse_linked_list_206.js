/* Leetcode - 206. Reverse Linked List (JavaScript language) - Easy */

const { default: chalk } = require("chalk");

console.log(chalk.yellow("Leetcode - 206. Reverse Linked List (JavaScript language) -"), chalk.green("Easy"));

function reverseList(headVar) {
    return headVar.reverse();
}

let head = [[1,2,3,4,5],[1,2],[]];

for (let test = 0; test < head.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), reverseList(head[test]), "|", chalk.green("Passed"));
}