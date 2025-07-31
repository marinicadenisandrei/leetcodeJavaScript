/* Leetcode - 167. Two Sum II - Input Array Is Sorted (JavaScript language) - Medium */

const chalk = require('chalk')
console.log(chalk.yellow("Leetcode - 167. Two Sum II - Input Array Is Sorted (JavaScript language) - Medium"));


function twoSum(numbersVar, targetVar) {
    for (let i = 0; i < numbersVar.length; i++) {
        for (let j = 0; j < numbersVar.length; j++) {
            if (i != j && numbersVar[i] + numbersVar[j] == targetVar) {
                return [i + 1,j + 1];
            }
        }
    }
}

numbers = [[2,7,11,15],[2,3,4],[-1,0]];
target = [9,6,-1];

for (let test = 0; test < target.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), twoSum(numbers[test], target[test]), "|", chalk.green("Passed"));    
}

