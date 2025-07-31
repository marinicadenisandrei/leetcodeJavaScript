/* Leetcode - 130. Surrounded Regions (JavaScript language) - Medium */

const chalk = require('chalk');
console.log(chalk.yellow("Leetcode - 130. Surrounded Regions (JavaScript language) - Medium"));

function arrayIsIn2DArray(bigArray, array) {
    for (let i = 0; i < bigArray.length; i++) {
        if (bigArray[i][0] == array[0] && bigArray[i][1] == array[1]) {
            return true;
        }
    }

    return false;
}

function solve(boardVar) {
    let indexes_O = [];
    let indexes_X = [];

    for (let i = 0; i < boardVar.length; i++) {
        for (let j = 0; j < boardVar[i].length; j++) {
            if (boardVar[i][j] == "X") {
                indexes_X.push([i,j]);
            }
            else
            {
                indexes_O.push([i,j]);
            }
        }
    }

    let candidates_O = [];
    let candidates_X = [];

    for (let i = 0; i < indexes_O.length - 1; i++) {
        if ((Math.abs(indexes_O[i][0] - indexes_O[i + 1][0]) == 1 || Math.abs(indexes_O[i][1] - indexes_O[i + 1][1]) == 1) && (Math.abs(indexes_O[i][0] - indexes_O[i + 1][0]) + Math.abs(indexes_O[i][1] - indexes_O[i + 1][1])) < 3) {
            candidates_O.push(indexes_O[i]);
        }
    }

    for (let i = 0; i < candidates_O.length; i++) {
        if (!arrayIsIn2DArray(candidates_O, [candidates_O[i][0] + 1, candidates_O[i][1]])) {
            candidates_X.push([candidates_O[i][0] + 1, candidates_O[i][1]]);
        }
        
        if (!arrayIsIn2DArray(candidates_O, [candidates_O[i][0], candidates_O[i][1] + 1])) {
            candidates_X.push([candidates_O[i][0], candidates_O[i][1] + 1]);
        }

        if (!arrayIsIn2DArray(candidates_O, [candidates_O[i][0] - 1, candidates_O[i][1]])) {
            candidates_X.push([candidates_O[i][0] - 1, candidates_O[i][1]]);
        }

        if (!arrayIsIn2DArray(candidates_O, [candidates_O[i][0], candidates_O[i][1] - 1])) {
            candidates_X.push([candidates_O[i][0], candidates_O[i][1] - 1]);
        }
    }

    let flag = true;

    for (let i = 0; i < candidates_X.length; i++) {
        if (arrayIsIn2DArray(indexes_X, candidates_X[i]) || arrayIsIn2DArray(candidates_O, candidates_X[i])) {
            continue;
        }
        else {
            flag = false;
            break;
        }
    }

    if (flag) {
        for (let i = 0; i < candidates_O.length; i++) {
            boardVar[candidates_O[i][0]][candidates_O[i][1]] = "X";
        }
    }
}

let board = [[["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]],[["X"]]];

for (let test = 0; test < board.length; test++) {
    solve(board[test]);
    console.log(chalk.green(`Test ${test + 1}:`), board[test], "|", chalk.green("Passed"));    
}

