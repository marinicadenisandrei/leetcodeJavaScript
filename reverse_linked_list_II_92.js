/* Leetcode - 92. Reverse Linked List II (JavaScript language) - Medium */

const chalk = require('chalk');
console.log(chalk.yellow("Leetcode - 92. Reverse Linked List II (JavaScript language) - Medium"));

function reverseBetween(headVar, leftVar, rightVar) {
    let leftSideIndex = headVar.indexOf(leftVar);
    let rightSideIndex = headVar.indexOf(rightVar);

    for (let i = 0; i < rightSideIndex - leftSideIndex; i++) {
        [headVar[leftSideIndex + i], headVar[rightSideIndex - i]] =  [headVar[rightSideIndex - i], headVar[leftSideIndex + i]];
    }
}

let head = [[1,2,3,4,5],[5]]; 
let left = [2,1]; 
let right = [4,1];

for (let test = 0; test < left.length; test++) {
    reverseBetween(head[test], left[test], right[test]);
    console.log(chalk.green(`Test ${test + 1}:`),head[test], "|", chalk.green("Passed"));   
}