/* Leetcode - 111. Minimum Depth of Binary Tree (JavaScript language) - Easy */

const chalk = require('chalk');

console.log(chalk.yellow("Leetcode - 111. Minimum Depth of Binary Tree (JavaScript language) - "), chalk.green("Easy"));

let state = chalk.green("Passed");

let rootTest = [[3,9,20,0,0,15,7], [2,0,3,0,4,0,5,0,6]];

for (let test = 0; test < rootTest.length; test++) {
    let root = rootTest[test];

    let output = [[root[0]]];
    let temp = [];

    let index = 1;
    let counterZero = 0;

    let flagStop = false;

    temp = [];

    for (let i = 0; index <= root.length - 1; i++) {
        for (let j = 0; j < output[i].length; j++) {
            if (output[i][j] == 0) {
                temp.push(0);
                temp.push(0);
                counterZero += 2;
            }
            else
            {
                temp.push(root[index]);
                temp.push(root[index+1]);
                index += 2;
            }

            if (output[i][j] != 0 && root[index] == 0 && root[index+1] == 0) {
                flagStop = true;
            }
        }

        output.push(temp);
        temp = [];

        if (flagStop == true) {
            break;
        }
    }

    text = chalk.green(`Test ${test + 1}: `);
    console.log(`${text}${output.length} | ${state}`);
    
    output = [];
    temp = [];
}

