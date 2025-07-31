/* Leetcode - 36. Valid Sudoku (JavaScript language) - Medium */

const chalk = require('chalk');

console.log(chalk.yellow("Leetcode - 36. Valid Sudoku (JavaScript language) - Medium"));

function occurenceInArray(arrayVar, element) {
    let counter = 0;
    for (let i = 0; i < arrayVar.length; i++) counter += ((arrayVar[i] == element) ? 1 : 0);

    return counter;
}

let boardTest = 
[[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]],

[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]]

let sudokuSquares = 
    [[0,3,0,3],
    [0,3,3,6],
    [0,3,6,9],
    [3,6,0,3],
    [3,6,3,6],
    [3,6,6,9],
    [6,9,0,3],
    [6,9,3,6],
    [6,9,6,9]];

for (let test = 0; test < boardTest.length; test++) {
    let board = boardTest[test];

    let squares = [];
    let verticalLines = []

    for (let k = 0; k < sudokuSquares.length; k++) {

        let temp = [];

        for (let i = sudokuSquares[k][0]; i < sudokuSquares[k][1]; i++) {
            for (let j = sudokuSquares[k][2]; j < sudokuSquares[k][3]; j++) {
                temp.push(board[i][j])
            }
        }

        squares.push([...temp]);
        temp = [];
    }

    for (let i = 0; i < board.length; i++) {
        let temp = [];

        for (let j = 0; j < board.length; j++) {
            temp.push(board[j][i]);
        }

        verticalLines.push([...temp]);
        temp = [];
    }

    let counter = 0;
    let index = 0;

    let bigCounter = 0;
    let indexFactor = 0

    let flag = true;

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board.length; j++) {
            if (board[i][j] != ".") {
                if (occurenceInArray(board[i], board[i][j]) > 1 || occurenceInArray(verticalLines[j], board[i][j]) > 1 || occurenceInArray(squares[index + indexFactor], board[i][j]) > 1) {
                    flag = false;
                    break;
                }
            }

            counter += 1;

            if (counter == 3) {
                counter = 0;
                index += 1;
            }
        }

        if (flag == false) {
            break;
        }
        
        bigCounter++;
        counter = 0;
        index = 0

        if (bigCounter == 3) {
            bigCounter = 0;
            indexFactor += 3;
        }
    }

    console.log(chalk.green(`Test ${test + 1}:`), flag, "|", chalk.green("Passed"));
}


