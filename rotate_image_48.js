/* Leetcode - 48. Rotate Image (JavaScript language) - Medium */

const chalk = require('chalk')
console.log(chalk.yellow("Leetcode - 48. Rotate Image (JavaScript language) - Medium"));

function rotate(matrix) {
    let output = [];

    for (let i = 0; i < matrix.length; i++) {
        output.push([]);

        for (let j = matrix[0].length - 1; j >= 0; j--) {
            output[output.length - 1].push(matrix[j][i]);
        }
    }

    return output;
}

matrix = [[[1,2,3],[4,5,6],[7,8,9]], [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]];

for (let test = 0; test < matrix.length; test++) {
    matrix[test] = rotate(matrix[test]);
    console.log(chalk.green(`Test ${test + 1}:`), matrix[test], "|", chalk.green("Passed"));    
}
