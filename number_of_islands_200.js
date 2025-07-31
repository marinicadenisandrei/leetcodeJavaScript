/* Leetcode - 200. Number of Islands (JavaScript language) - Medium */

const { default: chalk } = require("chalk");

console.log(chalk.yellow("Leetcode - 200. Number of Islands (JavaScript language) - Medium"));

function numIslands(gridVar) {
    islandCounter = 0;

    for (let i = 0; i < gridVar.length; i++) {
        for (let j = 0; j < gridVar[i].length; j++) {
            if (gridVar[i][j] == "1") {
                
                let new_i = 0;
                let new_j = 0;

                for (let k = i; k < gridVar.length; k++) {
                    if (gridVar[k][j] == "0")  {
                        new_i = k;
                        break;
                    }   
                }

                for (let k = j; k < gridVar[i].length; k++) {
                    if (gridVar[i][k] == "0")  {
                        new_j = k;
                        break;
                    }   
                }

                islandCounter += 1;

                if (new_i == 0 && new_j == 0) {
                    i++;
                    j++;
                } else {
                    i = new_i;
                    j = new_j;
                }

                if (i >= gridVar.length || j >= gridVar[0].length) {
                    return islandCounter + 1;
                }
            }   
        }
    }

    return islandCounter;
}

let grid = [[["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]], [["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]];

for (let test = 0; test < grid.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), numIslands(grid[test]), "|", chalk.green("Passed"));    
}


