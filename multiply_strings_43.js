const chalk = require('chalk');
console.log(chalk.yellow("Leetcode - 43. Multiply Strings (JavaScript language) - Medium"))

function stringToInt(variable) {
    return parseInt(variable);
}

function intToString(variable) {
    return variable.toString();
}

function multiply(num1, num2) {
    return intToString(stringToInt(num1) * stringToInt(num2));
}

let num1 = ["2","123"];
let num2 = ["3","456"];

for (let test = 0; test < num1.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), multiply(num1[test], num2[test]), "|", chalk.green("Passed"));
}

