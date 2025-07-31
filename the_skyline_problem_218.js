/* Leetcode - 218. The Skyline Problem (JavaScript language) - Hard */

const { default: chalk } = require("chalk");

console.log(chalk.yellow("Leetcode - 218. The Skyline Problem (JavaScript language) -"), chalk.red("Hard"));

function GetSkyline(buildingsVar) {
    var result = [];
    var max_i = 0;
    var max_j = 0;

    for (let i = 0; i < buildingsVar.length; i++) {
        max_i = ((max_i < buildingsVar[i][2]) ? buildingsVar[i][2] : max_i);
        max_j = ((max_j < buildingsVar[i][1]) ? buildingsVar[i][1] : max_j);
    }

    var matrix = Array.from({ length: max_i + 1}, () => Array(max_j + 2).fill(0));

    for (let i = 0; i < buildingsVar.length; i++) {
        for (let j = 0; j < buildingsVar[i][2]; j++) {
            for (let k = buildingsVar[i][0]; k <= buildingsVar[i][1]; k++) {
                matrix[j][k] = 1;
            }
        }
        
    }

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (
                matrix[i][j] === 1 &&
                matrix[i][j - 1] === 0 &&
                matrix[i + 1][j] === 0 &&
                matrix[i + 1][j - 1] === 0
            ) {
                result.push([j, i + 1]);
            } 
            else if (
                matrix[i][j] === 1 &&
                matrix[i][j + 1] === 1 &&
                matrix[i + 1][j] === 1 &&
                matrix[i + 1][j + 1] === 0
            ) {
                result.push([j + 1, i + 1]);
            } 
            else if (
                matrix[i][j] === 1 &&
                matrix[i][j + 1] === 0 &&
                matrix[i + 1][j] === 1 &&
                i - 1 === -1
            ) {
                result.push([j, i]);
            } 
            else if (
                matrix[i][j] === 1 &&
                matrix[i][j + 1] === 1 &&
                matrix[i + 1][j] === 0 &&
                matrix[i + 1][j + 1] === 0 &&
                j - 1 === -1
            ) {
                result.push([j, i + 1]);
            }
        }        
    }

    return result;
}

var buildings = [[[2,9,10],[3,7,15],[5,12,12],[15,20,10],[19,24,8]],[[0,2,3],[2,5,3]]];

for (let test = 0; test < buildings.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), GetSkyline(buildings[test]), "|", chalk.green("Passed"));
}
