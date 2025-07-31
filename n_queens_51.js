/* Leetcode - 51. N-Queens (JavaScript) - Hard */

const chalk = require('chalk');

console.log(chalk.yellow("Leetcode - 51. N-Queens (JavaScript) -"), chalk.red("Hard"));

function blockSpaces(matrix, row, col) {
    for (let i = 0; i < matrix.length; i++) {
        let indexVar = matrix[row].split('');
        indexVar[i] = "X";
        matrix[row] = indexVar.join('');      
    }

    for (let i = 0; i < matrix.length; i++) {
        let indexVar = matrix[i].split('');
        indexVar[col] = "X";
        matrix[i] = indexVar.join('');      
    }

    for (let i = 0; i < matrix.length; i++) {
        if (row + i == matrix.length || col + i == matrix.length) {
            break;
        }

        let indexVar = matrix[row + i].split('');
        indexVar[col + i] = "X";
        matrix[row + i] = indexVar.join('');
    }

    for (let i = 0; i < matrix.length; i++) {
        if (row + i == matrix.length || col - i == 0) {
            break;
        }

        let indexVar = matrix[row + i].split('');
        indexVar[col - i] = "X";
        matrix[row + i] = indexVar.join('');
    }
}

function generateMatrix(nVar) {
    let table = [];

    for (let i = 0; i < nVar; i++) {
        let string = "";

        for (let i = 0; i < nVar; i++) {
            string += ".";
        }

        table.push(string);
        string = "";
    }

    return table;
}

function checkNext(matrixVar, offset)
{
    for (let i = 0; i < matrixVar.length; i++) {
        if (matrixVar[offset][i] == ".") {
            return i;
        }
    }

    return -1;
}

function resetMatrix(matrixVar) {
    let string = "";

    for (let i = 0; i < matrixVar.length; i++) {
        string += ".";
    }

    for (let i = 0; i < matrixVar.length; i++) {
        matrixVar[i] = string;
    }
}

function finalMatrix(matrixVar)
{
    for (let i = 0; i < matrixVar.length; i++) {
        for (let j = 0; j < matrixVar.length; j++) {
            if (matrixVar[i][j] != "Q") {
                let row = matrixVar[i].split('');
                row[j] = ".";
                matrixVar[i] = row.join('');
            }
        }
    }
}

function solveNQueens(nVar) {
    let matrix = generateMatrix(nVar);
    
    let starter = 0;

    while (true) {
        let rowIndex = 0;
        let colIndex = 0;

        blockSpaces(matrix, rowIndex, starter);
        
        let row = matrix[0].split('');
        row[starter] = "Q";
        matrix[0] = row.join('');

        for (let i = 0; i < matrix.length - 1; i++) {
            rowIndex++;
            colIndex = checkNext(matrix, rowIndex);

            if (colIndex == -1) {
                resetMatrix(matrix);
                break;
            }
            
            blockSpaces(matrix, rowIndex, colIndex);

            let row = matrix[rowIndex].split('');
            row[colIndex] = "Q";
            matrix[rowIndex] = row.join('');
        }

        starter++;

        if (matrix[0][0] != ".") {
            finalMatrix(matrix);
            break;
        }
    }

    return matrix;
}


let n = [4,1];

for (let test = 0; test < n.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), solveNQueens(n[test]), "|", chalk.green("Passed"));
}




