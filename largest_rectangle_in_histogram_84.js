/* Leetcode - 84. Largest Rectangle in Histogram (JavaScript language) - Hard */

const chalk = require('chalk');
console.log(chalk.yellow("Leetcode - 84. Largest Rectangle in Histogram (JavaScript language) -"), chalk.red("Hard"));

function largestRectangleArea(heightshVar) {
    let maxNumber = Math.max(...heightshVar);
    let maxFind = 0;

    for (let i = 1; i < maxNumber; i++) {
        let counter = 0;

        for (let j = 0; j < heightshVar.length; j++) {
            if (i <= heightshVar[j]) {
                counter++;
            }
            else
            {
                if (i * counter > maxFind) {
                    maxFind = i * counter;
                }
                
                counter = 0;
            }
        }
        
        if (i * counter > maxFind) {
            maxFind = i * counter;
        }
    }

    return maxFind;
}

let heights = [[2,1,5,6,2,3],[2,4]];

for (let test = 0; test < heights.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), largestRectangleArea(heights[test]), "|", chalk.green("Passed"));    
}
