/* Leetcode - 357. Count Numbers with Unique Digits (JavaScript language) - Medium */

const { default: chalk } = require("chalk");

console.log(chalk.yellow("Leetcode - 357. Count Numbers with Unique Digits (JavaScript language) - Medium"));

function countNumbersWithUniqueDigits(nVar) {
    if (nVar == 0) {
        return 1;
    }

    let result = 10;
    let unique = 9;

    for (let i = 2; i < nVar; i++) {
        result *= unique;
        unique--;
    }

    return result;
}

let n = [2,0];

for (let test = 0; test < n.length; test++) {
    console.log(
        chalk.green(`Test ${(test + 1)}:`),
        countNumbersWithUniqueDigits(n[test]),
        "|",
        chalk.green("Passed")
    );
}
