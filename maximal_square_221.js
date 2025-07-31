/* Leetcode - 221. Maximal Square (JavaScript language) - Medium */

const { default: chalk } = require("chalk");

console.log(chalk.yellow("Leetcode - 221. Maximal Square (JavaScript language) - Medium"));

function MaximalSquare(matrixVar) {
    let global_result = 0;

    for (let i = 0; i < matrixVar.length; i++) {
        for (let j = 0; j < matrixVar[i].length; j++) {
            if (matrixVar[i][j] === "1") {
                var i_stop = 0;
                var j_stop = 0;
                
                for (let k = i; k < matrixVar.length; k++) {
                    if (matrixVar[k][j] !== "1" || k == matrixVar.length - 1) {
                        i_stop = k;
                        break;
                    }
                }

                for (let k = j; k < matrixVar[i].length; k++) {
                    if (matrixVar[i][k] !== "1" || k == matrixVar[i].length - 1) {
                        j_stop = k;
                        break;
                    }
                }
                
                var i_result = i_stop - i;
                var j_result = j_stop - j;

                var result = ((i_result < j_result) ? i_result : j_result);
                result = Math.pow(result, result);
                
                global_result = ((result > global_result) ? result : global_result);
            }
        }        
    }

    return global_result;
}

var matrix = [[["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]],[["0","1"],["1","0"]],[["0"]]];

for (let test = 0; test < matrix.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), MaximalSquare(matrix[test]), "|", chalk.green("Passed"));
}
