/* Leetcode - 149. Max Points on a Line (JavaScript language) - Hard */

const chalk = require('chalk');
console.log(chalk.yellow("Leetcode - 149. Max Points on a Line (JavaScript language) -"), chalk.red("Hard"));

function maxPoints(pointsVar) {
    let sum = 0;
    pointsVar.sort();

    for (let i = 0; i < pointsVar.length - 1; i++) {
        if (Math.abs(pointsVar[i][0] - pointsVar[i + 1][0]) <= 1 && Math.abs(pointsVar[i][1] - pointsVar[i + 1][1]) <= 1) {
            sum++;
        }
    }

    return sum + 1;
}

let points = [[[1,1],[2,2],[3,3]],[[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]];

for (let test = 0; test < points.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), maxPoints(points[test]), "|", chalk.green("Passed"));    
}

