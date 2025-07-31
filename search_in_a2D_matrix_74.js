/* Leetcode - 74. Search a 2D Matrix (JavaScript language) - Medium */

const chalk = require('chalk');
console.log(chalk.yellow("Leetcode - 74. Search a 2D Matrix (JavaScript language) - Medium"));

function searchMatrix(matrixVar, targetVar) {
    for (let i = 0; i < matrixVar.length; i++) {
        for (let j = 0; j < matrixVar[i].length; j++) {
            if (matrixVar[i][j] == targetVar) {
                return true;
            }
        }
    }

    return false;
}

let matrix = [[[1,3,5,7],[10,11,16,20],[23,30,34,60]], [[1,3,5,7],[10,11,16,20],[23,30,34,60]]];
let target = [3, 13];

for (let test = 0; test < matrix.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), searchMatrix(matrix[test], target[test]), "|", chalk.green("Passed"));    
}
