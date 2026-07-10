/* Leetcode - 342. Power of Four (JavaScript language) - Easy */

const { default: chalk } = require("chalk");

console.log(chalk.yellow("Leetcode - 342. Power of Four (JavaScript language) -"), chalk.green("Easy"));

function isPowerOfFour(nVar) {
    while (nVar > 1) {
        nVar /= 4;
    }

    return nVar === 1;
}

let n = [16,5,1];

for (let test = 0; test < n.length; test++) {
    console.log(
        chalk.green(`Test ${test + 1}:`),
        isPowerOfFour(n[test]),
        "|",
        chalk.green("Passed")
    );
}
