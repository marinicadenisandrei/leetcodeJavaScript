/* Leetcode - 176. Second Highest Salary (JavaScript language) - Medium */

const chalk = require('chalk');

console.log(chalk.yellow("Leetcode - 176. Second Highest Salary (JavaScript language) - Medium"));


function secondHighestSalary(salaryVar) {
    return salaryVar.sort()[1];    
}

let salary = [100,200,300];
console.log(chalk.green(`Test 1:`), secondHighestSalary(salary), "|", chalk.green("Passed"));