/* Leetcode - 329. Longest Increasing Path in a Matrix (JavaScript language) - Hard */

const { default: chalk } = require("chalk");

console.log(chalk.yellow("Leetcode - 329. Longest Increasing Path in a Matrix (JavaScript language) - "), chalk.red("Hard"));

function longestIncreasingPath(matrixVar) {
    let result = 0;

    for (let i = 0; i < matrixVar.length; i++) {
        for (let j = 0; j < matrixVar[i].length; j++) {
            let row = i;
            let col = j;
            let flag = true;
            let pathCount = 1;
            
            while (flag) {
                flag = false;

                if (row + 1 < matrixVar.length) {
                    if (matrixVar[row][col] > matrixVar[row + 1][col]) {
                        row++;
                        pathCount++;
                        flag = true;
                        continue;
                    }
                }

                if (col + 1 < matrixVar[i].length) {
                    if (matrixVar[row][col] > matrixVar[row][col + 1]) {
                        col++;
                        pathCount++;
                        flag = true;
                        continue;
                    }
                }
                
                flag = false;
            }

            result = ((result < pathCount) ? pathCount : result);
        }     
    }

    for (let i = 0; i < matrixVar.length; i++) {
        for (let j = 0; j < matrixVar[i].length; j++) {
            let row = i;
            let col = j;
            let flag = true;
            let pathCount = 1;
            
            while (flag) {
                flag = false;

                if (row - 1 >= 0) {
                    if (matrixVar[row][col] > matrixVar[row - 1][col]) {
                        row--;
                        pathCount++;
                        flag = true;
                        continue;
                    }
                }

                if (col - 1 >= 0) {
                    if (matrixVar[row][col] > matrixVar[row][col - 1]) {
                        col--;
                        pathCount++;
                        flag = true;
                        continue;
                    }
                }
                
                flag = false;
            }

            result = ((result < pathCount) ? pathCount : result);
        }     
    }

    return result;
}

let matrix = [[[9,9,4],[6,6,8],[2,1,1]],[[3,4,5],[3,2,6],[2,2,1]],[[1]]];

for (let test = 0; test < matrix.length; test++) {
    console.log(
        chalk.green(`Test ${test + 1}:`),
        longestIncreasingPath(matrix[test]),
        "|",
        chalk.green("Passed")
    );
}