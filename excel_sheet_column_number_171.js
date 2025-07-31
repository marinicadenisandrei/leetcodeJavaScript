/* Leetcode - 171. Excel Sheet Column Number (JavaScript language) - Medium */

const chalk = require('chalk');
console.log(chalk.yellow("Leetcode - 171. Excel Sheet Column Number (JavaScript language) - Medium"));


function titleToNumber(columnTitleVar) {
    const alphabet = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    let valueVar = 0;

    for (let i = 0; i < columnTitleVar.length - 1; i++) {
        for (let j = 0; j < alphabet.length; j++) {
            if (columnTitleVar[i] == alphabet[j]) {    
                valueVar += ((j + 1)* 26);   
                break;   
            }
        }
    }

    for (let i = 0; i < alphabet.length; i++) {
        if (alphabet[i] == columnTitleVar[columnTitleVar.length - 1]) {
            valueVar += (i + 1); 
            break
        }
    }

    return valueVar;
}

let columnTitle = ["A","AB","ZY"];

for (let test = 0; test < columnTitle.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), titleToNumber(columnTitle[test]), "|", chalk.green("Passed"));
        
}
