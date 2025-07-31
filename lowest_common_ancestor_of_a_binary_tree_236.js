/* Leetcode - 236. Lowest Common Ancestor of a Binary Search Tree (JavaScript language) - Medium */

const { default: chalk } = require("chalk");

console.log(chalk.yellow("Leetcode - 236. Lowest Common Ancestor of a Binary Search Tree (JavaScript language) - Medium"));

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

    if (rootVar.includes(pVar) && rootVar.includes(qVar)) {
        var index = ((rootVar.indexOf(pVar) > rootVar.indexOf(qVar)) ? rootVar.indexOf(qVar) : rootVar.indexOf(pVar));

        return rootVar[index];
    }

    return -1;
}

var root = [[3,5,1,6,2,0,8,null,null,7,4],[3,5,1,6,2,0,8,null,null,7,4],[1,2]]; 
var p = [5,5,1]; 
var q = [1,4,2];

for (let test = 0; test < root.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), lowestCommonAncestor(root[test], p[test], q[test]), "|", chalk.green("Passed"));
}
