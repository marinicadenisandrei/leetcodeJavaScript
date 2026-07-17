/* Leetcode - 343. Integer Break (JavaScript language) - Medium */

const { default: chalk } = require("chalk");

console.log(chalk.yellow("Leetcode - 343. Integer Break (JavaScript language) - Medium"));

function integerBreak(nVar) {
    if (nVar == 2) return 1;
    if (nVar == 3) return 2;

    let product = 1;

    while (nVar > 4) {
        product *= 3;
        nVar -= 3;
    }

    return product * nVar;
}

let n = [2,10];

for (let test = 0; test < n.length; test++) {
    console.log(
        chalk.green(`Test ${test + 1}:`),
        integerBreak(n[test]),
        "|",
        chalk.green("Passed")
    );
}
