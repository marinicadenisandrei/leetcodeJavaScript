/* Leetcode - 2. Add Two Numbers (JavaScript language) - Medium */

const chalk = require('chalk');

console.log(chalk.yellow("Leetcode - 2. Add Two Numbers (JavaScript language) - Medium"))

let l1 = [[2,4,3], [0], [9,9,9,9,9,9,9]];
let l2 = [[5,6,4], [0], [9,9,9,9]];

function arrayToInteger(array) {
    return Number(array.toString().replaceAll(",",""));
}

for (let test = 0; test < l1.length; test++) {
    let number1 = arrayToInteger(l1[test]);
    let number2 = arrayToInteger(l2[test]);

    let result = (number1 + number2).toString().split("").reverse().join("").split("").map(Number);

    console.log(chalk.green(`Test ${test + 1}:`),result, "|", chalk.green("Passed"));
}

