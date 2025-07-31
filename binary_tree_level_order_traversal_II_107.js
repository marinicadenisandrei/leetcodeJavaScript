/* Leetcode - 107. Binary Tree Level Order Traversal II (JavaScript language) - Medium */

const chalk = require('chalk');
console.log(chalk.yellow("Leetcode - 107. Binary Tree Level Order Traversal II (JavaScript language) - Medium"));

function levelOrderBottom(rootVar) {
    let output = [rootVar[0]];
    let power = 2;
    rootVar = rootVar.slice(1);

    while (rootVar.length > 0) {
        let elements = rootVar.slice(0,power);
        
        if (elements.includes(null)) {
            elements = elements.filter(Boolean);
        }

        output.push(elements);
        rootVar = rootVar.slice(power);
        power *= 2;
    }

    output.reverse();

    return output;
}

let root = [[3,9,20,null,null,15,7],[1],[]];

for (let test = 0; test < root.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), levelOrderBottom(root[test]), "|", chalk.green("Passed"));
}


