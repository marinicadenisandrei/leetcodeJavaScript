/* Leetcode - 147. Insertion Sort List (Java language) - Medium */

const chalk = require('chalk');
console.log(chalk.yellow("Leetcode - 147. Insertion Sort List (Java language) - Medium"));

function insertionSortList(headVar) {
    for (let i = 1; i < headVar.length; i++) {
        for (let j = i - 1; j >= 0; j--) {
            if (headVar[i] < headVar[j] && headVar[i] > headVar[j - 1]) {
                headVar.splice(j, 0, headVar[i]);
                headVar.splice(i + 1, 1);
                break;
            }
            else if (headVar[i] < headVar[j] && j - 1 < 0)
            {
                headVar.splice(0,0,headVar[i]);
                headVar.splice(i + 1, 1);
                break;
            }
        }
    }

    return headVar;
}

let head = [[4,2,1,3],[-1,5,3,4,0]];

for (let test = 0; test < head.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), insertionSortList(head[test]), "|", chalk.green("Passed"));    
}
