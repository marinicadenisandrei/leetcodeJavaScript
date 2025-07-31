/* Leetcode - 202. Happy Number (JavaScript language) - Easy */

const { default: chalk } = require("chalk");

console.log(chalk.yellow("Leetcode - 202. Happy Number (JavaScript language) -"), chalk.green("Easy"));

function isHappy(nVar) {
    let acumulation = [];
    let count = acumulation.filter(num => num === nVar).length;

    while (count < 2) {
        let newNumber = 0;
        let stringNumber = String(nVar);

        for (let i = 0; i < stringNumber.length; i++) {
            newNumber += Math.pow(parseInt(stringNumber[i]),2);
        }

        acumulation.push(newNumber);
        nVar = newNumber;
        count = acumulation.filter(num => num === nVar).length;

        if (nVar == 1) {
            return true;
        }
    }

    return false;
}

let n = [19,2];

for (let test = 0; test < n.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), isHappy(n[test]), "|", chalk.green("Passed"));
}
