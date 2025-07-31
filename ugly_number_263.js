/* Leetcode - 263. Ugly Number (JavaScript language) - Easy */

const { default: chalk } = require("chalk");

console.log(chalk.yellow("Leetcode - 263. Ugly Number (JavaScript language) -"), chalk.green("Easy"));

function isUgly(nVar) {
    if (nVar <= 0) return false;

    for (const p of [2,3,5]) {

        while (nVar % p == 0) {
            nVar /= p;
        }
    }

    return nVar === 1;
}

var n = [6,1,14];

for (let test = 0; test < n.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), isUgly(n[test]), "|", chalk.green("Passed"));
}