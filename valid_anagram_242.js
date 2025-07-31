/* Leetcode - 242. Valid Anagram (JavaScript language) - Easy */

const { default: chalk } = require("chalk");

console.log(chalk.yellow("Leetcode - 242. Valid Anagram (JavaScript language) -"), chalk.green("Easy"));

function isAnagram(sVar, tVar)
{
    return sVar.split('').sort().join('') === tVar.split('').sort().join('');
}

var s = ["anagram","rat"];
var t = ["nagaram","car"];

for (let test = 0; test < s.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), isAnagram(s[test], t[test]), "|", chalk.green("Passed"));
}
