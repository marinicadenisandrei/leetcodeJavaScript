/* Leetcode - 240. Search a 2D Matrix II (JavaScript language) - Medium */

const { default: chalk } = require("chalk");

console.log(chalk.yellow("Leetcode - 240. Search a 2D Matrix II (JavaScript language) - Medium"));

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

matrix = [[[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]],[[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]]]; 
target = [5,20];

for (let test = 0; test < matrix.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), searchMatrix(matrix[test], target[test]), "|", chalk.green("Passed"));    
}
