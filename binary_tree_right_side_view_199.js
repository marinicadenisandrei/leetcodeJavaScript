/* Leetcode - 199. Binary Tree Right Side View (JavaScript) - Medium */

const { default: chalk } = require("chalk");

console.log(chalk.yellow("Leetcode - 199. Binary Tree Right Side View (JavaScript) - Medium"));

function rightSideView(rootVar) {
    let sliceVar = 1;
    let result = [];

    while (rootVar.length > 0) {
        let tempSlice = rootVar.slice(0, sliceVar).filter(element => element !== 0);
        result.push(tempSlice[tempSlice.length - 1]);
        rootVar = rootVar.slice(sliceVar);
        sliceVar *= 2;
    }

    return result;
}

let root = [[1,2,3,0,5,0,4],[1,2,3,4,0,0,0,5],[1,0,3]];

for (let test = 0; test < root.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), rightSideView(root[test]), "|", chalk.green("Passed"));
}
