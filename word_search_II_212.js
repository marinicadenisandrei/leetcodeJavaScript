/* Leetcode - 212. Word Search II (JavaScript language) - Hard */

const { default: chalk } = require("chalk");

console.log(chalk.yellow("Leetcode - 212. Word Search II (JavaScript language) -"), chalk.red("Hard"));

function FindWords(boardVar, wordsVar) {
    var result = [];

    for (let i = 0; i < wordsVar.length; i++) {
        let row = -1;
        let col = -1;
        let flag = true;

        for (let k = 0; k < boardVar.length; k++) {
            for (let l = 0; l < boardVar[k].length; l++) {
                if (boardVar[k][l] == wordsVar[i][0]) {
                    row = k;
                    col = l;
                    
                    for (let j = 1; j < wordsVar[i].length; j++) {
                        if (row + 1 < boardVar.length && boardVar[row + 1][col] == wordsVar[i][j]) {
                            row++;
                        } else if (col + 1 < boardVar[0].length && boardVar[row][col + 1] == wordsVar[i][j]) {
                            col++;
                        } else if (col - 1 >= 0 && boardVar[row][col - 1] == wordsVar[i][j]) {
                            col--;
                        } else {
                            flag = false;
                            break;
                        }
                    }
                }

                if (flag) {
                    break;
                }
            }
            
            if (flag) {
                break;
            }
        }

        if (flag) {
            result.push(wordsVar[i]);
        }
    }

    return result;
}

var board = [[["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]],[["a","b"],["c","d"]]];
var words = [["oath","eat"],["abcd"]];

for (let test = 0; test < words.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), FindWords(board[test], words[test]), "|", chalk.green("Passed"));
}

