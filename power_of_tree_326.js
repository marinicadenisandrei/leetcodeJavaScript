/* Leetcode - 326. Power of Three (JavaScript languag) - Easy */

const { default: chalk } = require("chalk");

console.log(chalk.yellow("Leetcode - 326. Power of Three (JavaScript languag) -", chalk.green('Easy')));

function isPowerOfThree(nVar) {
    while (nVar > 1) {
        nVar /= 3
    }

    return nVar == 1;
}

let n = [27,0,-1];

for (let test = 0; test < n.length; test++) {
    console.log(
        chalk.green(`Test ${test + 1}:`),
        isPowerOfThree(n[test]),
        "|",
        chalk.green("Passed")
    );
}
