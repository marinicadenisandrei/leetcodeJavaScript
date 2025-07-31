/* Leetcode - 207. Course Schedule (JavaScript language) - Medium */

const { default: chalk } = require("chalk");

console.log(chalk.yellow("Leetcode - 207. Course Schedule (JavaScript language) - Medium"));

function canFinish(numCoursesVar, prerequisitesVar) {
    let result = [];

    for (let i = 0; i < prerequisitesVar.length; i++) {

        let counter = 1;
        
        for (let j = 0; j < prerequisitesVar[i].length - 1; j++) {
            if (prerequisitesVar[i][j] - prerequisitesVar[i][j + 1] > 1 || prerequisitesVar[i][j] < prerequisitesVar[i][j + 1]) {
                break;
            }

            counter++;
        }

        result.push(counter);
    }

    return result.every(num => num >= numCoursesVar);
}

let numCourses = [2,2];
let prerequisites = [[[1,0]],[[1,0],[0,1]]];

for (let test = 0; test < numCourses.length; test++) {
    console.log(chalk.green(`Test ${test + 1}`), canFinish(numCourses[test], prerequisites[test]), "|", chalk.green("Passed"));
}
