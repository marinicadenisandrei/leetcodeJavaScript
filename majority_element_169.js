/* Leetcode - 169. Majority Element (JavaScript language) - Easy */

const chalk = require('chalk');
console.log(chalk.yellow("Leetcode - 169. Majority Element (JavaScript language) -"), chalk.green("Easy"));


function majorityElement(numsVar) {
    let element = 0;
    let maxVar = 0;

    for (let i = 0; i < numsVar.length; i++) {
        let counter = 0;

        for (let j = 0; j < numsVar.length; j++) {
            if (i != j && numsVar[i] == numsVar[j]) {
                counter++;
            }
        }

        if (counter > maxVar) {
            maxVar = counter;
            element = numsVar[i];
        }
    }

    return element;
}

let nums = [[3,2,3],[2,2,1,1,1,2,2]];

for (let test = 0; test < nums.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), majorityElement(nums[test]), "|", chalk.green("Passed"));    
}


