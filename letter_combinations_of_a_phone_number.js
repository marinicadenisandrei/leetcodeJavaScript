/* Leetcode - 17. Letter Combinations of a Phone Number (JavaScript) - Medium */

const chalk = require('chalk');

console.log(chalk.yellow("Leetcode - 17. Letter Combinations of a Phone Number (JavaScript) - Medium"));

const database = {
    "1" : "",
    "2" : "abc",
    "3" : "def",
    "4" : "ghi",
    "5" : "jkl",
    "6" : "mno",
    "7" : "pqrs",
    "8" : "tuv",
    "9" : "wxyz"
}

let digitsTest = ["23", "", "2"];

for (let test = 0; test < digitsTest.length; test++) {
    let digits = digitsTest[test];

    let output = [[]];
    let sizeOutput = 0;

    if (digits.length == 0) {
        sizeOutput = 0;
    }
    else if (digits.length == 1) {
        for (let i = 0; i < database[digits[0]].length; i++) {
            output[0].push(database[digits[0]][i]);   
        }
        
        sizeOutput = 0;
    }
    else {
        for (let i = 0; i < database[digits[0]].length; i++) {
            for (let j = 0; j < database[digits[1]].length; j++) {
                output[0].push(database[digits[0]][i] + database[digits[1]][j]);
            }   
        }
        
        let depth = digits.length - 2;
        let startDigitsIndex = 2;
        
        for (let i = 0; i < depth; i++) {
        
            sizeOutput = output.length;
            output.push([]);
            
            for (let i = 0; i < database[digits[startDigitsIndex]].length; i++) {
                for (let j = 0; j < output[sizeOutput-1].length; j++) {
                    output[sizeOutput].push(database[digits[startDigitsIndex]][i] + output[sizeOutput-1][j]);
                }
            }
        }
    }

    console.log(chalk.green(`Test ${test + 1}:`), output[sizeOutput], "|", chalk.green("Passed"));
}

