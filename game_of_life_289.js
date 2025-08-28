/* Leetcode - 289. Game of Life (JavaScript language) - Medium */

const { default: chalk } = require("chalk");

console.log(chalk.yellow("Leetcode - 289. Game of Life (JavaScript language) - Medium"));

function gameOfLife(boardVar) {
    let result = JSON.parse(JSON.stringify(boardVar));

    for (let i = 0; i < boardVar.length; i++) {
        for (let j = 0; j < boardVar[i].length; j++) {
            let up = -1;
            let left = -1;

            let right = -1;
            let down;

            let left_up = -1;
            let right_up = -1;

            let left_down = -1;
            let right_down = -1;

            try { up = boardVar[i - 1][j]; } catch (error) { up = -1 }
            try { down = boardVar[i + 1][j]; } catch (error) { down = -1 }
            try { left = boardVar[i][j - 1]; } catch (error) { left = -1 }
            try { right = boardVar[i][j + 1]; } catch (error) { right = -1 }
            try { left_up = boardVar[i - 1][j - 1]; } catch (error) { left_up = -1 }
            try { right_up = boardVar[i - 1][j + 1]; } catch (error) { right_up = -1 }
            try { left_down = boardVar[i + 1][j - 1]; } catch (error) { left_down = -1 }
            try { right_down = boardVar[i + 1][j + 1]; } catch (error) { right_down = -1 }

            let neighbors = [up, down, left, right, left_up, right_up, left_down, right_down];
            let live_neighbors = neighbors.filter(num => num === 1).length;

            if (boardVar[i][j] === 1 && live_neighbors < 2) {
                result[i][j] = 0;
            }
            else if (boardVar[i][j] === 1 && live_neighbors === 2 && live_neighbors === 3) {
                result[i][j] = 1;
            }
            else if (boardVar[i][j] === 1 && live_neighbors > 3) {
                result[i][j] = 0;
            }
            else if (boardVar[i][j] === 0 && live_neighbors === 3) {
                result[i][j] = 1;
            }
        }   
    }

    return result;
}

let board = [[[0,1,0],[0,0,1],[1,1,1],[0,0,0]],[[1,1],[1,0]]];

for (let test = 0; test < board.length; test++) {
    console.log(
        chalk.green(`Test ${test + 1}:`),
        gameOfLife(board[test]),
        "|",
        chalk.green("Passed")
    );
}
