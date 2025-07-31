/* Leetcode - 79. Word Search (JavaScript language) - Medium */

const chalk = require('chalk');

console.log(chalk.yellow("Leetcode - 79. Word Search (JavaScript language) - Medium"));

function exist(boardVar, wordVar) {
    let indexVar = [];
    let noDuplicatesStr = Array.from(new Set(wordVar.split('')))

    for (let i = 0; i < noDuplicatesStr.length; i++) {
        let tempOcc = wordVar.split(noDuplicatesStr[i]).length - 1;
        let tempBoardOcc = 0;

        for (let j = 0; j < boardVar.length; j++) {
            for (let k = 0; k < boardVar[j].length; k++) {
                if (boardVar[j][k] == noDuplicatesStr[i]) {
                    tempBoardOcc++;
                }
            }
        }

        if (tempBoardOcc < tempOcc) {
            return false;
        }
    }

    for (let i = 0; i < wordVar.length; i++) {
        indexVar.push([])

        for (let j = 0; j < boardVar.length; j++) {
            for (let k = 0; k < boardVar[j].length; k++) {
                if (boardVar[j][k] == wordVar[i]) {
                    indexVar[indexVar.length - 1].push([j,k]);
                }
            }
        }
    }

    let counter = 0;
    let last = [-1,-1];

    for (let i = 1; i < indexVar.length; i++) {
        let flag = false;

        for (let j = 0; j < indexVar[i - 1].length; j++) {
            for (let k = 0; k < indexVar[i].length; k++) {
                if (Math.abs(indexVar[i - 1][j][0] - indexVar[i][k][0]) == 0 && Math.abs(indexVar[i - 1][j][1] - indexVar[i][k][1]) == 0) {
                    continue;
                }

                if (Math.abs(indexVar[i - 1][j][0] - indexVar[i][k][0]) < 2 && Math.abs(indexVar[i - 1][j][1] - indexVar[i][k][1]) < 2 && last[0] <= indexVar[i - 1][j][0]) {
                    if (last[0] == indexVar[i - 1][j][0] && last[1] == indexVar[i - 1][j][1]) {
                        continue;
                    }

                    counter++;
                    last = indexVar[i - 1][j];
                    flag = true;
                    break;
                }
            }

            if (flag) {
                break;
            }
        }   
    }

    for (let i = 0; i < indexVar[indexVar.length - 1].length; i++) {
        if (Math.abs(indexVar[indexVar.length - 1][i][0] - last[0]) < 2 && Math.abs(indexVar[indexVar.length - 1][i][1] - last[1]) < 2 && indexVar[indexVar.length - 1][i][0] >= last[0]) {
            counter++; 
            break;
        }
    }
    
    if (counter == indexVar.length) {
        return true;
    }
    else
    {
        return false;
    }
}

let board = [[["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]]; 
let word = ["ABCCED", "SEE", "ABCB"];

for (let test = 0; test < board.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), exist(board[test], word[test]), "|", chalk.green("Passed"));    
}

