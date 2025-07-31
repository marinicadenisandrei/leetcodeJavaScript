/* Leetcode - 54. Spiral Matrix (JavaScript language) - Medium */

const chalk = require('chalk');
console.log(chalk.yellow("Leetcode - 54. Spiral Matrix (JavaScript language) - Medium"));

function spiralOrder(matrixVar) {
    let result = [];

    while (matrixVar.length > 0) {
        for (let i = 0; i < matrixVar[0].length; i++) {
            result.push(matrixVar[0][i]);
        }
    
        for (let i = 1; i < matrixVar.length - 1; i++) {
            result.push(matrixVar[i][matrixVar[i].length - 1]);
        }
    
        for (let i = matrixVar[matrixVar.length - 1].length - 1; i >= 0; i--) {
            result.push(matrixVar[matrixVar.length - 1][i])
        }
    
        for (let i = matrixVar.length - 2; i > 0; i--) {
            result.push(matrixVar[i][0]);
        }
    
        matrixVar = matrixVar.slice(1);
        matrixVar.pop();
    
        for (let i = 0; i < matrixVar.length; i++) {
            matrixVar[i] = matrixVar[i].slice(1);
            matrixVar[i].pop();
        }
    }

    result = [...new Set(result)];

    return result;
}

let matrix = [[[1,2,3],[4,5,6],[7,8,9]], [[1,2,3,4],[5,6,7,8],[9,10,11,12]]];

for (let test = 0; test < matrix.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), spiralOrder(matrix[test]), "|", chalk.green("Passed"));
}


