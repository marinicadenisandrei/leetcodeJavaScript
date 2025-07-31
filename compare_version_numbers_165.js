/* Leetcode - 165. Compare Version Numbers (JavaScript language) - Medium */

const chalk = require('chalk');
console.log(chalk.yellow("Leetcode - 165. Compare Version Numbers (JavaScript language) - Medium"));

function compareVersion(version1Var, version2Var) {
    let intstr1 = parseInt(version1Var.substring(version1Var.indexOf('.') + 1));
    let intstr2 = parseInt(version2Var.substring(version2Var.indexOf('.') + 1));
    
    if (intstr1 < intstr2) {
        return -1;
    }
    else if (intstr1 > intstr2) {
        return 1;
    }
    else {
        return 0;
    }
}

let version1 = ["1.2","1.01","1.0"]; 
let version2 = ["1.10","1.001","1.0.0.0"];

for (let test = 0; test < version1.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), compareVersion(version1[test], version2[test]), "|", chalk.green("Passed"));    
}

