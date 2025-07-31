/* Leetcode - 57. Insert Interval (JavaScript language) - Medium */

const chalk = require('chalk');
console.log(chalk.yellow("Leetcode - 57. Insert Interval (JavaScript language) - Medium"));

function insert(intervalsVar, newIntervalVar) {
    for (let i = 0; i < intervalsVar.length; i++) {
        if (intervalsVar[i][0] <= newIntervalVar[0] && intervalsVar[i][1] <= newIntervalVar[1] && intervalsVar[i][1] > newIntervalVar[0]) {
            intervalsVar[i][1] = newIntervalVar[1];
        }
        else if (newIntervalVar[0] <= intervalsVar[i][0] && intervalsVar[i][1] <= newIntervalVar[1] && intervalsVar[i][1] <= newIntervalVar[1]) {
            intervalsVar[i] = newIntervalVar;
        }
        else if (newIntervalVar[0] <= intervalsVar[i][0] && intervalsVar[i][1] >= newIntervalVar[1] && intervalsVar[i][1] <= newIntervalVar[1]) {
            intervalsVar[i][0] = newIntervalVar[0];
        }
    }

    for (let i = 0; i < intervalsVar.length - 1; i++) {
        if (intervalsVar[i][0] <= intervalsVar[i+1][0] && intervalsVar[i][1] <= intervalsVar[i+1][1] && intervalsVar[i+1][0] <= intervalsVar[i][1]) {
            intervalsVar[i][1] = intervalsVar[i+1][1];
            intervalsVar.splice(i+1,1);
            i--;
        }
    }
}


let intervals = [[[1,3],[6,9]],[[1,2],[3,5],[6,7],[8,10],[12,16]]]; 
let newInterval = [[2,5],[4,8]];

for (let test = 0; test < intervals.length; test++) {
    insert(intervals[test], newInterval[test]);
    console.log(chalk.green(`Test ${test + 1}:`), intervals[test], "|", chalk.green("Passed"));    
}
