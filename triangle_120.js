/* Leetcode - 120. Triangle (JavaScript language) - Medium */

const chalk = require('chalk');
console.log(chalk.yellow("Leetcode - 120. Triangle (JavaScript language) - Medium"));

function minimumTotal(triangleVar) {
    if (triangleVar.length == 1) {
        return triangleVar[0][0];
    }

    for (let i = 0; i < triangleVar.length - 1; i++) {
        let temp = [];
        let sum = 0;

        for (let j = 0; j < triangleVar[i].length; j++) {
            sum += triangleVar[i][j] + triangleVar[i+1][j];
            temp.push(sum);
            sum = 0;
            sum += triangleVar[i][j] + triangleVar[i+1][j+1];
            temp.push(sum);
            sum = 0;
        }

        triangleVar[i+1] = [...temp];

        if (temp.length == 0) {
            break;
        }

        temp = [];
    }

    let min = triangleVar[triangleVar.length - 1][0];

    for (let i = 1; i < triangleVar[triangleVar.length - 1].length; i++) {
        if (triangleVar[triangleVar.length - 1][i] < min) {
            min = triangleVar[triangleVar.length - 1][i];
        }
    }

    return min;
}

let triangle = [[[2],[3,4],[6,5,7],[4,1,8,3]],[[-10]]];

for (let test = 0; test < triangle.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), minimumTotal(triangle[test]), "|", chalk.green("Passed"));    
}

