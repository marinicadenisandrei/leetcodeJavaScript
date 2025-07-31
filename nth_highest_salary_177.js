/* Leetcode - 177. Nth Highest Salary (JavaScript language) - Medium */

const chalk = require('chalk');

console.log(chalk.yellow("Leetcode - 177. Nth Highest Salary (JavaScript language) - Medium"));


function nthHighestSalary(salaryVar, nVar) {
    salaryVar.sort();
    
    return salaryVar[nVar - 1];
}

let salary = [100,200,300];
let n = 2;

console.log(chalk.green("Test 1:"), nthHighestSalary(salary, n), "|", chalk.green("Passed"));
