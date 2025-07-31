/* Leetcode - 15. 3Sum (JavaScript language) - Medium */

const chalk = require('chalk');

console.log(chalk.yellow("Leetcode - 15. 3Sum (JavaScript language) - Medium"));

let numsTest = [[-1,0,1,2,-1,-4], [0,1,1]];

for (let test = 0; test < numsTest.length; test++) {
    let nums = numsTest[test];
    let output = [];

    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            for (let k = 0; k < nums.length; k++) {
                if ((i != j  && j != k && i != k) && (nums[i] + nums[j] + nums[k] == 0)) {
                    output.push([nums[i], nums[j], nums[k]].sort())
                }
            }
        }
    }
    
    output = output.filter((value, index, self) => {
        return index === self.findIndex((v) => {
          return JSON.stringify(v) === JSON.stringify(value);
        });
      });
    
    console.log(chalk.green(`Test ${test + 1}:`), output, "|", chalk.green("Passed"));
}

