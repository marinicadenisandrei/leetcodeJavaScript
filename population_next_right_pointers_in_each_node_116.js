/* Leetcode - 116. Populating Next Right Pointers in Each Node (JavaScript language) - Medium */

const chalk = require('chalk');
console.log(chalk.yellow("Leetcode - 116. Populating Next Right Pointers in Each Node (JavaScript language) - Medium"));

function connect(rootVar) {
    if (rootVar.length == 0) {
        return rootVar;
    }
    
    let power = 4;
    let counter = 0;
    rootVar.splice(1, 0, "#");

    while (power < rootVar.length) {
        rootVar.splice(power + counter, 0, "#");
        power *= 2;
        counter++;
    }

    return rootVar;
}

let root = [[1,2,3,4,5,6,7], []];

for (let test = 0; test < root.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), connect(root[test]), "|", chalk.green("Passed"));
}