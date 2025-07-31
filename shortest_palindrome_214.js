/* Leetcode - 214. Shortest Palindrome (JavaScript language) - Hard */

const { default: chalk } = require("chalk");

console.log(chalk.yellow("Leetcode - 214. Shortest Palindrome (JavaScript language) -"), chalk.red("Hard"));

function ShortestPalindrome(sVar) {
    for (let i = 0; i < sVar.length / 2; i++) {
        if (sVar[i] != sVar[sVar.length - 1 - i]) {
            sVar = sVar.slice(0, i) + sVar[sVar.length - 1 - i] + sVar.slice(i);
        }
    }

    return sVar;
}

var s = ["aacecaaa","abcd"];

for (let test = 0; test < s.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), ShortestPalindrome(s[test]), "|", chalk.green("Passed"));
}



