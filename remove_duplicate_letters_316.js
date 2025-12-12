/* Leetcode - 316. Remove Duplicate Letters (JavaScript language) - Medium */

const { default: chalk } = require("chalk");

console.log(chalk.yellow("Leetcode - 316. Remove Duplicate Letters (JavaScript language) - Medium"));

function removeDuplicateLetters(sVar) {
    let result = "";

    for (let i = 0; i < sVar.length; i++) {
        result += ((result.includes(sVar[i])) ? "" : sVar[i]);
    }

    return result.split("").sort().join("");
}

let s = ["bcabc","cbacdcbc"];

for (let test = 0; test < s.length; test++) {
    console.log(
        chalk.green(`Test ${test + 1}:`),
        removeDuplicateLetters(s[test]),
        "|",
        chalk.green("Passed")
    );
}
