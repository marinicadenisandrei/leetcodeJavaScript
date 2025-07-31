/* Leetcode - 185. Department Top Three Salaries (JavaScript language) - Hard */

const { default: chalk } = require("chalk");

function departamentTopThreeSalaries(idVar, nameVar, salaryVar, departamentIdVar, depIdVar, depNameVar) {
    let candidates = [];
    let candidatesSize = 0;

    for (let i = 0; i < depIdVar.length; i++) {
        candidates.push([]);
        
        for (let j = 0; j < idVar.length; j++) {
            if (idVar[i] == departamentId[j]) {
                candidates[candidatesSize].push([idVar[j], nameVar[j], salaryVar[j]]);
            }
        }

        candidatesSize++;
    }

    for (let i = 0; i < candidates.length; i++) {
        candidates[i].sort((a, b) => b[2] - a[2]); 
    }

    for (let i = 0; i < candidates.length; i++) {
        let counter = 0;

        for (let j = 0; j < candidates[i].length - 1; j++) {
            if (candidates[i][j][2] != candidates[i][j + 1][2]) {
                counter++;
            }

            console.log(candidates[i][j]);
            
            if (counter == 3) {
                break;
            }
        }

        if (counter < 3) {
            console.log(candidates[i][candidates[i].length - 1]);
        }
    }
    
    console.log("|");
}

let id = [1,2,3,4,5,6,7];
let name = ["Joe", "Henry", "Sam", "Max", "Janet", "Randy", "Will"];
let salary = [85000, 80000, 60000, 90000, 69000, 85000, 70000];
let departamentId = [1,2,2,1,1,1,1];
let depId = [1,2];
let depName = ["IT", "Sales"];

console.log(chalk.yellow("Leetcode - 185. Department Top Three Salaries (JavaScript language) -"), chalk.red("Hard"));
console.log(chalk.green("Test 1:"));
departamentTopThreeSalaries(id, name, salary, departamentId, depId, depName);
console.log(chalk.green("Passed"));