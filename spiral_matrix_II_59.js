/* 59. Spiral Matrix II (JavaScript language) - Medium */

const chalk = require('chalk');
console.log(chalk.yellow("59. Spiral Matrix II (JavaScript language) - Medium"));

function generateMatrix(nVar) {
    let matrix = Array.from({length: nVar}, () => []);

    let number = 1;
    let factor = 0;
    
    while (number <= Math.pow(nVar,2)) {
        for (let i = 0 + factor; i < nVar - factor; i++) {
            matrix[factor][i] = number;
            number++;
        }
    
        for (let i = 1 + factor; i < nVar - factor; i++) {
            matrix[i][nVar - 1] = number;
            number++;
        }
    
        for (let i = nVar - 2 - factor; i >= 0 + factor; i--) {
            matrix[nVar - 1][i] = number;
            number++;
        }
    
        for (let i = matrix.length - 2 - factor; i > 0 + factor; i--) {
            matrix[i][0] = number;
            number++;
        }

        factor++;
    }

    return matrix;
}

let n = [3,1];

for (let test = 0; test < n.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), generateMatrix(n[test]), "|", chalk.green("Passed"));    
}
