/* Leetcode - 101. Symmetric Tree (JavaScript Language) */

const chalk = require('chalk');

console.log(chalk.yellow("Leetcode - 101. Symmetric Tree (JavaScript Language)"));

let state = chalk.green(`Passed`);

let root = [[3,9,20,null,null,15,7],[1,null,2]];

function binaryDepth(arrayRoot) {
    let power = 0;
    let arraySize = arrayRoot.length;

    while(arraySize > 0){
        arraySize -= Math.pow(2,power);
        power++;
    }

    return power;
}

for (let test = 0; test < root.length; test++) {
    text = chalk.green(`Test ${test+1}: `);
    console.log(`${text}${binaryDepth(root[test])} | ${state}`);    
}
