/* Leetcode - 172. Factorial Trailing Zeroes (JavaScript language) - Medium */

const chalk = require('chalk');
console.log(chalk.yellow("Leetcode - 172. Factorial Trailing Zeroes (JavaScript language) - Medium"));


function trailingZeroes(nVar) {
    let factorialVar = 1;
    let sumVar = 0;

    for (let i = 1; i <= nVar; i++) {
        factorialVar *= i;
    }
    
    factorialVar = String(factorialVar);
    
    for (let i = 0; i < factorialVar.length; i++) {
        if (factorialVar[i] == [0]) {
            sumVar++;
        }
    }
    
    return sumVar;
}

let n = [3,5,0];

for (let test = 0; test < n.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), trailingZeroes(n[test]), "|", chalk.green("Passed"));    
}
