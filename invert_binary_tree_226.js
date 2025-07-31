/* Leetcode - 226. Invert Binary Tree (JavaScript language) - Easy */

const { default: chalk } = require("chalk");

console.log(chalk.yellow("Leetcode - 226. Invert Binary Tree (JavaScript language) - "), chalk.green("Easy"));

function invertTree(rootVar) {
    var result = [];
    var powVar = 1

    while (rootVar.length > 0) {
        var subarray = rootVar.slice(0, powVar);
        subarray.reverse();

        result.push(...subarray);

        rootVar.splice(0, powVar);
        powVar *= 2;
    }

    return result;
}

var root = [[4,2,7,1,3,6,9],[2,1,3],[]];

for (let test = 0; test < root.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), invertTree(root[test]), "|", chalk.green("Passed"));
}
