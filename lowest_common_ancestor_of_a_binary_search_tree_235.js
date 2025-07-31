/* Leetcode - 235. Lowest Common Ancestor of a Binary Search Tree (JavaScript language) - Medium */

const { default: chalk } = require("chalk");

console.log(chalk.yellow("Leetcode - 235. Lowest Common Ancestor of a Binary Search Tree (JavaScript language) - Medium"));

function lowestCommonAncestor(rootVar, pVar, qVar) {
    for (let i = 0; i < rootVar.length; i++) {
        if ((i * 2) + 1 > rootVar.length) {
            break;
        }

        var temp = [rootVar[i], rootVar[(i * 2) + 1], rootVar[(i * 2) + 2]];
        
        if (temp.includes(pVar) && temp.includes(qVar)) {
            return temp[0];
        }
    }

    return -1;
}

var root = [[6,2,8,0,4,7,9,null,null,3,5],[6,2,8,0,4,7,9,null,null,3,5],[2,1]]; 
var p = [2,2,2]; 
var q = [8,4,1];

for (let test = 0; test < root.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), lowestCommonAncestor(root[test], p[test], q[test]), "|", chalk.green("Passed"));
}
