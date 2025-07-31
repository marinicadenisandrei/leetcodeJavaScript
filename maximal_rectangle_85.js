/* Leetcode - 85. Maximal Rectangle (JavaScript) - Hard */

const chalk = require('chalk');
console.log(chalk.yellow("Leetcode - 85. Maximal Rectangle (JavaScript) -"), chalk.red("Hard"));

function checkOnes(matrix, row, depth_row, column, depth_column) {
    let counter = 0;

    for (let i = row; i < depth_row; i++) {
        for (let j = column; j < depth_column; j++) {
            if (matrix[i][j] == "1") {
                counter++;
            }
            else
            {
                return -1;
            }
        }
    }

    return counter;
}

function maximalRectangle(matrixVar) {
    let maxVar = 0;

    for (let i = 0; i < matrixVar.length; i++) {
        for (let j = 0; j < matrixVar[i].length; j++) {
            if (matrixVar[i][j] == "1") {
                let counter1 = 0;
                let counter2 = 0;

                for (let k = j; k < matrixVar[i].length; k++) {
                    if (matrixVar[i][k] == "1") {
                        counter1++;
                    }
                    else
                    {
                        break;
                    }
                }

                for (let k = i; k < matrixVar.length; k++) {
                    if (matrixVar[k][j] == "1") {
                        counter2++;
                    }
                    else
                    {
                        break;
                    }
                }

                let temp = checkOnes(matrixVar, i, i + counter2, j, j + counter1)
                
                maxVar = ((maxVar <  temp) ? temp : maxVar);
            }   
        }
    }

    return maxVar;
}
    
let matrix = [[["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]], [["0"]], [["1"]]];

for (let test = 0; test < matrix.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), maximalRectangle(matrix[test]), "|", chalk.green("Passed"));
}



