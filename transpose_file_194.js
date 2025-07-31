/* Leetcode - 194. Transpose File (JavaScript language) - Medium */

const { default: chalk } = require("chalk");

console.log(chalk.yellow("Leetcode - 194. Transpose File (JavaScript language) - Medium"));

function transposeFile(fileVar) {
    fileVar = fileVar.split("\n");
    let starter = fileVar[0].split(" ");
    let acumulation = [];
    
    for (let i = 0; i < starter.length; i++) {
        acumulation.push(starter[i]);
    }

    for (let i = 1; i < fileVar.length; i++) {
        starter = fileVar[i].split(" ");

        for (let j = 0; j < starter.length; j++) {
            acumulation[j] += " " + starter[j];
        }
    }

    return acumulation;    
}

let file = "name age\nalice 21\nryan 30";
console.log(chalk.green("Test 1: "), transposeFile(file), " | ", chalk.green("Passed"));


