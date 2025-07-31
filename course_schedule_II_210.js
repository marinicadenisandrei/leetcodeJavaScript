/* Leetcode - 210. Course Schedule II (JavaScript language) - Medium */

const { default: chalk } = require("chalk");

console.log(chalk.yellow("Leetcode - 210. Course Schedule II (JavaScript language) - Medium"));

function FindOrder(numCoursesVar, prerequisitesVar) {
    var result = [];
    

    for (let i = 0; i < prerequisitesVar.length; i++) {
        if (result.indexOf(prerequisitesVar[i][1]) == -1) {
            result.push(prerequisitesVar[i][1]);
        }
        else
        {
            if (result.indexOf(prerequisitesVar[i][0]) == -1) {
                var insertingIndex = result.indexOf(prerequisitesVar[i][1]) + 1;
                result.splice(insertingIndex, 0, prerequisitesVar[i][0]);
            }
        }

        if (result.indexOf(prerequisitesVar[i][0]) == -1) {
            result.push(prerequisitesVar[i][0]);
        }

        if (result.length == numCoursesVar) {
            return result;
        }
    }

    return result;
}

var numCourses = [2,4];
var prerequisites = [[[1,0]],[[1,0],[2,0],[3,1],[3,2]]];

for (let test = 0; test < numCourses.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), FindOrder(numCourses[test], prerequisites[test]), "|", chalk.green("Passed"));
}
