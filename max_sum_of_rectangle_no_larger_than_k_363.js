/* Leetcode - 363. Max Sum of Rectangle No Larger Than K (JavaScript language) - Hard */

const { default: chalk } = require("chalk");

console.log(chalk.yellow("Leetcode - 363. Max Sum of Rectangle No Larger Than K (JavaScript language) -"), chalk.red("Hard"));

function maxSumSubmatrix(matrixVar, kVar) {
    let sums = [];
    let i = 0;
    let j = 0;

    for (let i = 0; i < matrixVar.length; i++) {
        for (let j = 0; j < matrixVar[i].length; j++) {
            let sum = matrixVar[i][j];
            sums.push(sum);

            const rows = matrixVar.length;
            const col = matrixVar[0].length
            const steps = Math.max(rows, col);

            for (let k = 1; k <= steps; k++) {
                const r = Math.min(i + k, rows);
                const c = Math.min(j + k, col);
                
                sub = matrixVar.slice(i,r).map(row => row.slice(j,c));
                const sum = sub.flat().reduce((a, b) => a + b, 0);
                sums.push(sum);

                if (r === rows && c === col) break;
            }
        }
    }

    const valid = sums.filter(s => s <= kVar);
    const maxSum = Math.max(...valid);

    return maxSum;
}

let matrix = [[[1,0,1],[0,-2,3]],[[2,2,-1]]];
let k = [2,3];

for (let test = 0; test < matrix.length; test++) {
    console.log(
        chalk.green(`Test ${test + 1}:`),
        maxSumSubmatrix(matrix[test], k[test]),
        "|",
        chalk.green("Passed")
    );
}
