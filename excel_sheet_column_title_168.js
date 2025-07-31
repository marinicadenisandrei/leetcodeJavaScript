/* Leetcode - 168. Excel Sheet Column Title (JavaScript language) - Easy */

const chalk = require('chalk');
console.log(chalk.yellow("Leetcode - 168. Excel Sheet Column Title (JavaScript language) -"), chalk.green("Easy"));


function convertToTitle(columnNumberVar) {
    const database = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 
        'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    let results = [];
    let counter = 0;
    let column = "";

    while (columnNumberVar >= 26) {
        columnNumberVar -= 26;
        counter++;

        if (counter == 26) {
            results.push(counter);
            counter = 0;
        }
    }

    if (counter > 0) {
        results.push(counter);
    }

    results.push(columnNumberVar);
    
    for (let i = 0; i < results.length; i++) {
        column += database[results[i]];
    }

    return column;
}

let columnNumber = [1,28,701];

for (let test = 0; test < columnNumber.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), convertToTitle(columnNumber[test]), "|", chalk.green("Passed"));    
}

