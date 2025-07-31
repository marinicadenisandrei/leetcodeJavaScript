/* Leetcode - Pascal's Triangle II (JavaScript language) - Easy */

const chalk = require('chalk');

console.log(chalk.yellow("Leetcode - Pascal's Triangle II (JavaScript language) -"), chalk.green("Easy"));

let rowIndexTest = [3,0,1];

for (let test = 0; test < rowIndexTest.length; test++) {
    let rowIndex = rowIndexTest[test];
    let numRows = rowIndex + 1;

    let output = [[1],[1,1]];
    let temp = [];

    console.log();

    if (rowIndex < 2) {
        console.log(chalk.green(`Test ${test + 1}: `),output[rowIndex],chalk.green(" | "),chalk.green("Passed"))
    }
    else{
        for (let i = 1; i < numRows - 1; i++) {
            temp.push(1);
            for (let j = 0; j < output[i].length - 1; j++) {
                temp.push(output[i][j] + output[i][j+1])
            }
            temp.push(1);
            output.push(temp);
            temp = [];
        }
        
        console.log(chalk.green(`Test ${test + 1}: `),output[rowIndex],chalk.green(" | "),chalk.green("Passed"));
    }
}




