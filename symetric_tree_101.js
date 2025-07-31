/* Leetcode - 101. Symmetric Tree (JavaScript language) - Easy */

const chalk = require('chalk');
console.log(chalk.yellow("Leetcode - 101. Symmetric Tree (JavaScript language) -"), chalk.green("Easy"));

function isSymetric(rootVar) {
    rootVar.shift();
    let power = 2;

    while (rootVar.length > 0) {
        let left = rootVar.slice(0,parseInt(power/2));
        let right = rootVar.slice(parseInt(power/2),power);

        for (let i = 0; i < left.length; i++) {
            if (left[i] != right[right.length - 1 - i]) {
                return false;
            }   
        }

        rootVar.splice(0, power);
        power *= 2;
    }

    return true;
}

const root = [[1,2,2,3,4,4,3],[1,2,2,null,3,null,3]];

for (let test = 0; test < root.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), isSymetric(root[test]), "|", chalk.green("Passed"));    
}
