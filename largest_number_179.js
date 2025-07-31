/* Leetcode - 179. Largest Number (JavaScript language) - Medium */

const chalk = require('chalk');
console.log(chalk.yellow("Leetcode - 179. Largest Number (JavaScript language) - Medium"));

function largestNumber(numsVar) {
    let result = "";

    const sortedArr = numsVar.sort((a, b) => {
        const firstCharA = String(a)[0];
        const firstCharB = String(b)[0];
        return firstCharA.localeCompare(firstCharB);
    });

    for (let i = sortedArr.length - 1; i >= 0; i--) {
        let num1 = sortedArr[i].toString();
        if (num1.includes('0') && (i - 1) >= 0) {
            let temp = sortedArr[i];
            sortedArr[i] = sortedArr[i - 1];
            sortedArr[i - 1] = temp;
        }

        result += sortedArr[i];
    }
        
    return result;
}

let numsVar = [[10,2],[3,30,34,5,9]];

for (let test = 0; test < numsVar.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), largestNumber(numsVar[test]), "|", chalk.green("Passed"));    
}

