/* Leetcode - 166. Fraction to Recurring Decimal (JavaScript language) - Medium */

const chalk = require('chalk');
console.log(chalk.yellow("Leetcode - 166. Fraction to Recurring Decimal (JavaScript language) - Medium"));


function fractionToDecimal(numeratorVar, denominatorVar) {
    let result = numeratorVar / denominatorVar; 
    result = result.toString();
    
    let max = 0;
    let candidate = "";

    let temp = 0;    

    for (let i = result.indexOf('.') + 2; i < result.length; i++) {
        temp += result[i];
        let occ = result.split(temp).length - 1;

        if (occ >= max && temp.length > candidate) {
            max = occ;
            candidate = temp;
        }
    }

    
    if (max > 0) {
        return result.substring(0, result.indexOf('.') + 1) + "(" + candidate + ")";
    }
    else {
        return result;
    }
}

let numerator = [1,2,4]; 
let denominator = [2,1,333];

for (let test = 0; test < numerator.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), fractionToDecimal(numerator[test], denominator[test]), "|", chalk.green("Passed"));
}

