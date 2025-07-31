/* Leetcode - 82. Remove Duplicates from Sorted List II (JavaScript language) - Medium */

const chalk = require('chalk');

console.log(chalk.yellow("Leetcode - 82. Remove Duplicates from Sorted List II (JavaScript language) - Medium"));

function duplicateElementArray(arrayVar, element) {
    let counter = 0;
    
    for (let i = 0; i < arrayVar.length; i++) {
        if (arrayVar[i] == element) {
            counter++;
        }
        
        if (counter > 1) {
            return true;
        }
    }

    return false;
}

function deleteDuplicates(headVar) {
    let flag = true;

    while (flag) {
        flag = false;

        for (let i = 0; i < headVar.length; i++) {
            if (duplicateElementArray(headVar, headVar[i])) {
                headVar = headVar.filter(element => element != headVar[i]);
                flag = true;
                break;
            }
        }
    }

    return headVar;
}

let head = [[1,2,3,3,4,4,5],[1,1,1,2,3]];

for (let test = 0; test < head.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), deleteDuplicates(head[test], "|"), chalk.green("Passed"));    
}

