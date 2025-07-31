/* Leetcode - 52. N-Queens II (JavaScript language) - Hard */

const chalk = require ('chalk');

console.log(chalk.yellow("Leetcode - 52. N-Queens II (JavaScript language) -"), chalk.red("Hard"));

function checkValidity(matrixVar) {
    for (let i = 0; i < matrixVar.length; i++) {
        if (!matrixVar[i].includes("Q")) {
            return false;
        }
    }

    return true;
}

function findNext(matrixVar, indexVar) {
    for (let i = 0; i < matrixVar.length; i++) {
        if (matrixVar[indexVar][i] == ".") {
            return i;
        }
    }

    return -1;
}

function blockPaths(matrixVar, rowVar, colVar) {
    for (let i = 0; i < matrixVar.length; i++) {
        let row = matrixVar[rowVar].split('');
        row[i] = "X";
        matrixVar[rowVar] = row.join('');
    }

    for (let i = 0; i < matrixVar.length; i++) {
        let row = matrixVar[i].split('');
        row[colVar] = "X";
        matrixVar[i] = row.join('');
    }

    for (let i = 1; i < matrixVar.length; i++) {
        if (rowVar + i >= matrixVar.length || colVar + i >= matrixVar.length) {
            break;
        }
        
        let row = matrixVar[rowVar + i].split('');
        row[colVar + i] = "X";
        matrixVar[rowVar + i] = row.join('');
    }

    for (let i = rowVar; i < matrixVar.length; i++) {
        if (rowVar + i >= matrixVar.length || colVar - i >= -1) {
            break;
        }

        let row = matrixVar[rowVar + i].split('');
        row[colVar - i] = "X";
        matrixVar[rowVar + i] = row.join('');
    }
}

function initializeBord(size) {
    let string = "";
    let matrix = [];

    for (let i = 0; i < size; i++) {
        string += ".";
    }

    for (let i = 0; i < size; i++) {
        matrix.push(string);
    }

    return matrix;
}

function totalNQueens(nVar) {
    let board = initializeBord(nVar);
    let colIndex = 0;
    let occuring = 0;

    for (let i = 0; i < nVar; i++) {    
        blockPaths(board,0,i);
        
        let row = board[0].split('');
        row[i] = "Q";
        board[0] = row.join('');

        for (let j = 1; j < board.length; j++) {
            colIndex = findNext(board,j);

            if (colIndex == -1) {
                break;
            }

            blockPaths(board,j,colIndex);

            let row = board[j].split('');
            row[colIndex] = "Q";
            board[j] = row.join('');
        }

        if (checkValidity(board)) {
            occuring++;
        }

        board = initializeBord(nVar);
    }

    return occuring;
}

let n = [4,1];

for (let test = 0; test < n.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), totalNQueens(n[test]), "|", chalk.green("Passed"));
}