/* Leetcode - 203. Remove Linked List Elements (JavaScript language) - Easy */

const { default: chalk } = require("chalk");

console.log(chalk.yellow("Leetcode - 203. Remove Linked List Elements (JavaScript language) -"), chalk.green("Easy"));

function removeElements(headVar, valVar) {
    return headVar.filter(num => num !== valVar);
}

head = [[1,2,6,3,4,5,6], [7,7,7,7]];
val = [6,7];

for (let test = 0; test < head.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), removeElements(head[test], val[test]), "|", chalk.green("Passed"));    
}


