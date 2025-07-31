/* Leetcode - 195. Tenth Line (JavaScript language) - Easy */

const { default: chalk } = require("chalk");

console.log(chalk.yellow("Leetcode - 195. Tenth Line (JavaScript language) -"), chalk.green("Easy"));

function tenthLine(fileVar) {
    fileVar = fileVar.split("\n");
    return fileVar[9];
}

let file = "Line 1\nLine 2\nLine3\nLine 4\nLine 5\nLine 6\nLine 7\nLine 8\nLine 9\nLine 10";
console.log(chalk.green("Test 1:"), tenthLine(file), "|", chalk.green("Passed"));
