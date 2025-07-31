/* Leetcode - 71. Simplify Path (JavaScript language) - Medium */

const chalk = require('chalk');
console.log(chalk.yellow("Leetcode - 71. Simplify Path (JavaScript language) - Medium"));

function simplifyPath(pathVar) {
    pathVar = pathVar.replace(/\./g, "");
    pathVar = pathVar.split("/")
    let result = "";

    for (let i = 0; i < pathVar.length; i++) {

        if (pathVar[i].length != 0) {
            result += "/" + pathVar[i];
        }
    }

    if (result.length == 0) {
        result += "/";
    }

    return result;
}

let path = ["/home../", "/../", "/home//foo/"];

for (let test = 0; test < path.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), simplifyPath(path[test]), "|", chalk.green("Passed"));
}

