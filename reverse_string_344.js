/* Leetcode - 344. Reverse String (JavaScript language) - Easy */

const { default: chalk } = require("chalk");

console.log(chalk.yellow("Leetcode - 344. Reverse String (JavaScript language) -"), chalk.green("Easy"));

function reverseString(sVar) {
    sVar.reverse();
    return sVar;
}

s = [["h","e","l","l","o"],["H","a","n","n","a","h"]];

for (let test = 0; test < s.length; test++) {
    console.log(
        chalk.green(`Test ${test + 1}:`),
        reverseString(s[test]),
        "|",
        chalk.green("Passed")
    );
    
}