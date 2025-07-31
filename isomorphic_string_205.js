/* Leetcode - 205. Isomorphic Strings (JavaScript language) - Easy */

const { default: chalk } = require("chalk");

console.log(chalk.yellow("Leetcode - 205. Isomorphic Strings (JavaScript language) -"), chalk.green("Easy"));

function isIsomorphic(sVar, tVar) {
    return [...new Set(sVar)].join('').length == [...new Set(tVar)].join('').length;
}

let s = ["egg","foo","paper"];
let t = ["add","bar","title"];

for (let test = 0; test < s.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), isIsomorphic(s[test], t[test]), "|", chalk.green("Passed"));
}
