/* Leetcode - 152. Maximum Product Subarray (JavaScript language) - Medium */

const chalk = require('chalk');
console.log(chalk.yellow("Leetcode - 152. Maximum Product Subarray (JavaScript language) - Medium"));

function maxProduct(numsVar) {
    let product = 1;
    let max = 0;
    
    for (let i = 0; i < numsVar.length; i++) {
        for (let j = 0; j < i; j++) {
            product *= numsVar[j]; 
            max = ((product > max) ? product : max);
        }

        product = 1;
    }    

    product = 1;

    for (let i = 0; i < numsVar.length; i++) {
        for (let j = i; j < numsVar.length; j++) {
            product *= numsVar[j]; 
            max = ((product > max) ? product : max);
        }

        product = 1;
    } 

    return max;
}

let nums = [[2,3,-2,4],[-2,0,-1]];

for (let test = 0; test < nums.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), maxProduct(nums[test]), "|", chalk.green("Passed"));    
}
