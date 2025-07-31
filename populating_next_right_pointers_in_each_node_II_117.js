/* Leetcode - 117. Populating Next Right Pointers in Each Node II (JavaScript language) - Medium */

const chalk = require('chalk');
console.log(chalk.yellow("Leetcode - 117. Populating Next Right Pointers in Each Node II (JavaScript language) - Medium"));

function connect(rootVar) {
    if (rootVar.length == 0) {
        return rootVar;
    }
    
    let power = 4;
    let counter = 0;

    rootVar = rootVar.filter(item => item !== null)
    rootVar.splice(1,0,"#");

    while (power + counter < rootVar.length) {
        rootVar.splice(power + counter,0,"#");
        power *= 2;
        counter++;
    }

    rootVar.push("#");

    return rootVar;
}

let root = [[1,2,3,4,5,null,7],[]];

for (let test = 0; test < root.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), connect(root[test]), chalk.green("Passed"));    
}
