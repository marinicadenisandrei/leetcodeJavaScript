/* Leetcode - 64. Minimum Path Sum (JavaScript language) - Medium */

const chalk = require('chalk');
console.log(chalk.yellow("Leetcode - 64. Minimum Path Sum (JavaScript language) - Medium"));

function minPathSum(gridVar) {
    let row = gridVar.length - 1;
    let col = gridVar[0].length - 1;
    let sum = gridVar[row][col]; 

    while (row > 0 && col > 0) {
        let compare = [gridVar[row][col - 1], gridVar[row - 1][col]];
        let minTemp = Math.min(compare[0], compare[1]);

        if (minTemp == gridVar[row][col - 1]) {
            sum += gridVar[row][col - 1];
            col--;
        }
        else
        {
            sum += gridVar[row - 1][col];
            row--;
        }
    }

    for (let i = gridVar[row].length - 2; i >= 0; i--) {
        sum += gridVar[row][i];
    }

    return sum;
}

let grid = [[[1,3,1], [1,5,1], [4,2,1]], [[1,2,3], [4,5,6]]];

for (let test = 0; test < grid.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), minPathSum(grid[test]), "|", chalk.green("Passed"));  
}
