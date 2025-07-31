/* Leetcode - 184. Department Highest Salary (JavaScript language) - Medium */

const { default: chalk } = require("chalk");

function departamentHighestSalary(nameVar, salaryVar, departamentIDVar, departamentNameIDVar, departamentNameVar) {
    sortedSalay = [...salaryVar];
    sortedSalay = sortedSalay.sort();
    sortedSalay = [...new Set(sortedSalay)];    

    for (let i = sortedSalay.length - 1; i >= sortedSalay.length - departamentNameIDVar.length; i--) {
        for (let j = 0; j < salaryVar.length; j++) {
            if (sortedSalay[i] == salaryVar[j]) {
                console.log(departamentName[departamentID[j] - 1], nameVar[j], salaryVar[j]);
            }
        }
    }
}

console.log(chalk.yellow("Leetcode - 184. Department Highest Salary (JavaScript language) - Medium"));

let name = ["Joe","Jim","Henry","Sam","Max"];
let salary = [70000,90000,80000,60000,90000];
let departamentID = [1,1,2,2,1];

let departamentNameID = [1,2];
let departamentName = ["IT", "Sales"];

console.log(chalk.green("Test 1: "));
departamentHighestSalary(name, salary, departamentID, departamentNameID, departamentName);
console.log("|", chalk.green("Passed"));
