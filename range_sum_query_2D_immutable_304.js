/* Leetcode - 304. Range Sum Query 2D - Immutable (JavaScript language) - Medium */

const { default: chalk } = require("chalk");

console.log(chalk.yellow("Leetcode - 304. Range Sum Query 2D - Immutable (JavaScript language) - Medium"));

class NumMatrix {
    constructor(matrix) {
        this.matrix = matrix;
    }

    sumRegion(row1, col1, row2, col2) {
        let sum = 0;
        
        for (let i = row1; i <= row2; i++) {
            for (let j = col1; j <= col2; j++) {
                sum += this.matrix[i][j];
            }
        }

        return sum;
    }
}

let matrix = [[3, 0, 1, 4, 2], [5, 6, 3, 2, 1], [1, 2, 0, 1, 5], [4, 1, 0, 1, 7], [1, 0, 3, 0, 5]];
const numMatrix  = new NumMatrix(matrix);
console.log(
    chalk.green("Test 1:"),
    numMatrix.sumRegion(2, 1, 4, 3),
    numMatrix.sumRegion(1, 1, 2, 2),
    numMatrix.sumRegion(1, 2, 2, 4),
    "|",
    chalk.green("Passed")
);
 
 

