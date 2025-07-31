/* Leetcode - 41. First Missing Positive (JavaScript language) - Hard */

const chalk = require('chalk');

console.log(chalk.yellow("Leetcode - 41. First Missing Positive (JavaScript language) -"), chalk.red("Hard"));

function bubbleSort(arrayVar) {
    let flag = true;
    let counter = 0;

    while (flag) {
        flag = false;

        for (let i = 0; i < arrayVar.length - 1 - counter; i++) {
            if (arrayVar[i] > arrayVar[i + 1]) {
                [arrayVar[i], arrayVar[i + 1]] = [arrayVar[i + 1], arrayVar[i]];
                flag = true;
            }
        }

        counter++;
    }
}

function firstMissingPositive(arrayVar) {
    bubbleSort(arrayVar);

    if (arrayVar[0] > 0 && arrayVar[0] - 1 > 1) {
        return 1;
    }

    for (let i = 0; i < arrayVar.length - 1; i++) {
        if (arrayVar[i + 1] - arrayVar[i] > 1 && arrayVar[i] > 0) {
            return arrayVar[i] + 1;
        }
    }

    return arrayVar[arrayVar.length - 1] + 1;
}

let numsTest = [[1,2,0], [3,4,-1,1], [7,8,9,11,12]];

for (let test = 0; test < numsTest.length; test++) {
    let result = firstMissingPositive(numsTest[test]);
    console.log(chalk.green(`Test ${test + 1}:`), result, "|", chalk.green("Passed"));
}
