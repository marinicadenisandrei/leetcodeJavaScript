/* Leetcode - 223. Rectangle Area (JavaScript language) - Medium */

const { default: chalk } = require("chalk");

console.log(chalk.yellow("Leetcode - 223. Rectangle Area (JavaScript language) - Medium"));

function computeArea(ax1Var, ay1Var, ax2Var, ay2Var, bx1Var, by1Var, bx2Var, by2Var) {
    var result = 0;

    var rec1 = (Math.abs(ay2Var) + Math.abs(ay1Var)) * (Math.abs(ax1Var) + Math.abs(ax2Var));
    var rec2 = (Math.abs(by2Var) + Math.abs(by1Var)) * (Math.abs(bx1Var) + Math.abs(bx2Var));

    var cy = ((by2Var > ay1Var && by2Var < ay2Var) ? by2Var : 0);
    var cx = ((ax2Var > bx1Var && ax2Var < bx2Var) ? ax2Var : 0);
    var minus = cy * cx;
    
    result = rec1 + rec2 - minus;

    if (ax1Var == ay1Var && ax2Var == ay2Var && ax2Var == bx2Var && ay2Var == by2Var)
    {
        result /= 2;
    }

    return result;
}

var ax1 = [-3,-2];
var ay1 = [0,-2];
var ax2 = [3,2];
var ay2 = [4,2];
var bx1 = [0,-2];
var by1 = [-1,2];
var bx2 = [9,2];
var by2 = [2,2];

for (let test = 0; test < ax1.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), computeArea(ax1[test], ay1[test], ax2[test], ay2[test], bx1[test], by1[test], bx2[test], by2[test]), "|", chalk.green("Passed"));
}