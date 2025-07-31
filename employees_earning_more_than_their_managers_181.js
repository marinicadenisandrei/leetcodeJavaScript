/* Leetcode - 181. Employees Earning More Than Their Managers (JavaScript language) - Easy */

const chalk = require('chalk');
console.log(chalk.yellow("Leetcode - 181. Employees Earning More Than Their Managers (JavaScript language) -"), chalk.green("Easy"));

function find_employees(nameVar, salaryVar, managerIDvar) {
    let result = [];
    
    for (let i = 0; i < nameVar.length; i++) {
        if (managerIDvar != null && salaryVar[i] > salaryVar[managerIDvar[i] - 1]) {
            result.push(nameVar[i]);
        }
    }
    
    return result;
}

let name = ["Joe","Henry","Sam","Max"];
let salary = [70000,80000,60000,90000];
let managerID = [3,4,null,null];

console.log(chalk.green("Test 1:"), find_employees(name, salary, managerID), "|", chalk.green("Passed"));

