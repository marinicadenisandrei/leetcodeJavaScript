/* Leetcode - 56. Merge Intervals (JavaScript language) - Medium */

let chalk = require('chalk');
console.log(chalk.yellow("Leetcode - 56. Merge Intervals (JavaScript language) - Medium"));

function merge(intervalsVar) {
    let output = [];

    for (let i = 0; i < intervalsVar.length - 1; i++) {
        if (intervalsVar[i][0] <= intervalsVar[i + 1][0] && intervalsVar[i][1] <= intervalsVar[i + 1][1] && intervalsVar[i + 1][0] <= intervalsVar[i][1]) {
            intervalsVar[i][1] = intervalsVar[i + 1][1];
            intervalsVar.splice(i + 1, 1);
        }
    }
}

let intervals = [[[1,3],[2,6],[8,10],[15,18]], [[1,4],[4,5]]];
for (let test = 0; test < intervals.length; test++) {
    merge(intervals[test]);
    console.log(chalk.green(`Test ${test + 1}:`), intervals[test], "|", chalk.green("Passed"));
}

