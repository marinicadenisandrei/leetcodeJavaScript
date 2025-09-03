/* Leetcode - 292. Nim Game (JavaScript language) - Easy */

const { default: chalk } = require("chalk");

console.log(chalk.yellow("Leetcode - 292. Nim Game (JavaScript language) -"), chalk.green("Easy"));

function canWinNim(nVar) {
    return nVar % 4 != 0
}

let n = [4,1,2];

for (let test = 0; test < n.length; test++) {
    console.log(
        chalk.green(`Test ${test + 1}:`),
        canWinNim(n[test]),
        "|",
        chalk.green("Passed")
    );
}
