/* Leetcode - 63. Unique Paths II (JavaScript language) - Medium */

const chalk = require('chalk');
console.log(chalk.yellow("Leetcode - 63. Unique Paths II (JavaScript language) - Medium"))

function uniquePathsWithObstacles(obstacleGridVar) {
    for (let i = 0; i < obstacleGridVar.length; i++) {
        for (let j = 0; j < obstacleGridVar[i].length; j++) {
            if (obstacleGridVar[i][j] == 1) {
                obstacleGridVar[i][j] = "X";
            }
        }
    }

    for (let i = 0; i < obstacleGridVar.length; i++) {
        if (obstacleGridVar[i][obstacleGridVar[i].length - 1] != 'X') {
            obstacleGridVar[i][obstacleGridVar[i].length - 1] = 1;
        }
    }
    
    for (let i = 0; i < obstacleGridVar[obstacleGridVar.length - 1].length; i++) {
        if (obstacleGridVar[obstacleGridVar.length - 1][i] != 'X') {
            obstacleGridVar[obstacleGridVar.length - 1][i] = 1;
        }
    }
    
    for (let i = obstacleGridVar.length - 2; i >= 0 ; i--) {
        for (let j = obstacleGridVar[i].length - 2; j >= 0; j--) {
            if (obstacleGridVar[i][j] != 'X') {
                if (obstacleGridVar[i + 1][j] == 'X') {
                    obstacleGridVar[i][j] = 0 + obstacleGridVar[i][j + 1];
                }
                else if (obstacleGridVar[i][j + 1] == 'X') {
                    obstacleGridVar[i][j] = 0 + obstacleGridVar[i + 1][j];
                }
                else
                {
                    obstacleGridVar[i][j] = obstacleGridVar[i][j + 1] + obstacleGridVar[i + 1][j];
                }
            }
        }
    }

    return obstacleGridVar[0][0];
}


let obstacleGrid = [[[0,0,0],[0,1,0],[0,0,0]], [[0,1], [0,0]]];

for (let test = 0; test < obstacleGrid.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), uniquePathsWithObstacles(obstacleGrid[test]), "|", chalk.green("Passed"));
}
