/* Leetcode - 338. Counting Bits (JavaScript language) - Easy */

const { default: chalk } = require("chalk");

console.log(chalk.yellow("Leetcode - 338. Counting Bits (JavaScript language) -"), chalk.green("Easy"));

function countBits(nVar) {
    let result = [];

    for (let i = 0; i <= nVar; i++) {
        let binary = i.toString(2);
        let ones = binary.split("1").length - 1;
        result.push(ones);
    }

    return result;
}

let n = [2,5];

for (let test = 0; test < n.length; test++) {
    console.log(
        chalk.green(`Test ${test + 1}:`),
        countBits(n[test]),
        "|",
        chalk.green("Passed")
    );
}
