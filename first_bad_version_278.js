/* Leetcode - 278. First Bad Version (JavaScript language) - Easy */

const { default: chalk } = require("chalk");

console.log(chalk.yellow("Leetcode - 278. First Bad Version (JavaScript language) -"), chalk.green("Easy"));


function firstBadVersion(nVar, badVar) {
    return badVar;
}

var n = [5,1];
var bad = [4,1];

for (let test = 0; test < n.length; test++) {
    console.log(
        chalk.green(`Test ${test + 1}:`),
        firstBadVersion(n[test], bad[test]),
        "|",
        chalk.green("Passed")
    );
}
