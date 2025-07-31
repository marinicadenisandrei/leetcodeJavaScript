/* Leetcode - 18. 4Sum (JavaScript language) - Medium */

const chalk = require('chalk');

console.log(chalk.yellow("Leetcode - 18. 4Sum (JavaScript language) - Medium"));

let numsTest = [[1,0,-1,0,-2,2], [2,2,2,2,2]];
let targetTest = [0, 8];

for (let test = 0; test < numsTest.length; test++) {
    let nums = numsTest[test];
    let target = targetTest[test];

    let sum = 0;
    let temp = [];
    let output = [];

    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            for (let k = 0; k < nums.length; k++) {
                for (let l = 0; l < nums.length; l++) {

                    let index = [i,j,k,l];
                    let isAllDifferent = new Set(index).size === index.length;

                    if (isAllDifferent) {
                        sum = nums[i] + nums[j] + nums[k] + nums[l];
                        
                        if (sum == target) {
                            temp = [nums[i], nums[j], nums[k], nums[l]].sort();

                            let isArrayInArray = output.some((item) => {
                                return JSON.stringify(item) === JSON.stringify(temp);
                            });

                            if (!isArrayInArray) {
                                output.push(temp);
                                temp = [];
                            }
                        }
                    }
                }
            }
        }
    }

    console.log(chalk.green(`Test ${test + 1}:`), output, "|", chalk.green("Passed"));
}



