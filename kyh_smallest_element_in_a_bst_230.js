/* Leetcode - 230. Kth Smallest Element in a BST (JavaScript language) - Medium */

const { default: chalk } = require("chalk");

console.log(chalk.yellow("Leetcode - 230. Kth Smallest Element in a BST (JavaScript language) - Medium"));

function kthSmallest(rootVar, kVar) {
    rootVar = rootVar.filter(num => num !== null);
    rootVar = rootVar.sort();

    return rootVar[kVar - 1];
}

var root = [[3,1,4,null,2],[5,3,6,2,4,null,null,1]];
var k = [1,3];

for (let test = 0; test < k.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), kthSmallest(root[test], k[test]), "|", chalk.green("Passed"));
}

