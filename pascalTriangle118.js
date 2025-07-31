/* Leetcode - 118. Pascal's Triangle (JavaScript language) - Easy */

const chalk = require('chalk');

console.log(chalk.yellow("Leetcode - 118. Pascal's Triangle (JavaScript language) -"),chalk.green("Easy"));

let testNumRows = [1,5];

for (let test = 0; test < testNumRows.length; test++) {
    let numRows = testNumRows[test];

    let output = [[1],[1,1]];

    if (numRows > 2) {
        numRows -= 2;

        for (let i = 0; i < numRows; i++) {
            
            let lastElement = output.length - 1;
            let temp = [1]

            for (let j = 0; j < output[lastElement].length; j++) {
                temp.push(Number.isNaN(output[lastElement][j] + output[lastElement][j+1]) ? 1 : output[lastElement][j] + output[lastElement][j+1]);
            }

            output.push(temp);
        }
    }
    else {
        output = [output[numRows-1]];
    }

    console.log(`${chalk.green(`Test ${test + 1}: `)}`, output, "|", chalk.green("Passed"));
}



