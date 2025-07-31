/* Leetcode - 89. Gray Code (JavaScript) - Medium */

const chalk = require('chalk');
console.log(chalk.yellow("Leetcode - 89. Gray Code (JavaScript) - Medium"));

function convertBinToDec(binaryValue) {
    let decimal = 0;

    for (let i = 0; i < binaryValue.length; i++) {
        if (binaryValue[i] == '1') {
            decimal += Math.pow(2,i);   
        }
    }

    return decimal;
}

function grayCode(nVar) {
    let starter = "0".repeat(nVar);
    let results = [starter];
    let intResult = [];

    for (let i = starter.length - 1; i >= 0; i--) {
        let starterArray = starter.split('');
        starterArray[i] = "1";
        results.push(starterArray.join(''));
        starter = starterArray.join('');
    }

    for (let i = starter.length - 1; i >= 0; i--) {
        let starterArray = starter.split('');
        starterArray[i] = "0";
        results.push(starterArray.join(''));
        starter = starterArray.join('');
    }

    let noDuplicates = [... new Set(results)];

    for (let i = 0; i < noDuplicates.length; i++) {
        intResult.push(convertBinToDec(noDuplicates[i]));   
    }

    return intResult;
}

let n = [2,1];

for (let test = 0; test < n.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), grayCode(n[test]), "|", chalk.green("Passed"));    
}
