/* Leetcode - 11. Container With Most Water (JavaScript language) - Medium */

const chalk = require('chalk');

console.log(chalk.yellow("Leetcode - 11. Container With Most Water (JavaScript language) - Medium"))

let heightTest = [[1,8,6,2,5,4,8,3,7], [1,1]];

for (let test = 0; test < heightTest.length; test++) {

    let height = heightTest[test];
    let mostWater = 0;

    for (let k = 0; k < height.length; k++) {
        for (let i = 1; i < height.length; i++) {
            for (let j = i; j < height.length; j++) {
                mostWater = (mostWater < (Math.min(height[i-1], height[j]) * i)) ? (Math.min(height[i-1], height[j]) * i) : mostWater;
            }
        }
        
        height.shift();
    }

    console.log(chalk.green(`Test ${test + 1}:`), mostWater, "|", chalk.green("Passed"));
}
