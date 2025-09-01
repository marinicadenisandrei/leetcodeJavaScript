/* Leetcode - 290. Word Pattern (JavaScript language) - Easy */

const { default: chalk } = require("chalk");

console.log(chalk.yellow("Leetcode - 290. Word Pattern (JavaScript language) -"), chalk.green("Easy"));

function wordPattern(patternVar, sVar) {
    splitSVar = sVar.split(" ");
    let check = {};

    if (patternVar.length !== splitSVar.length) return false

    for (let i = 0; i < patternVar.length; i++) {
        if (!(patternVar[i] in check)) {
            check[patternVar[i]] = splitSVar[i];
        }
        else
        {
            if (check[patternVar[i]] != splitSVar[i]) {
                return false;
            }
        }
    }

    return true;
}

pattern = ["abba","abba","aaaa"];
s = ["dog cat cat dog","dog cat cat fish","dog cat cat dog"];

for (let test = 0; test < pattern.length; test++) {
    console.log(
        chalk.green(`Test ${test + 1}:`),
        wordPattern(pattern[test], s[test]),
        "|",
        chalk.green("Passed")
    );
}
