/* Leetcode - 6. Zigzag Conversion (JavaScript language) - Medium */

const chalk = require('chalk');

console.log(chalk.yellow("Leetcode - 6. Zigzag Conversion (JavaScript language) - Medium"));

let s = "PAYPALISHIRING"; 
let sCopy = s;

let numRowsTest = [3, 4];

for (let test = 0; test < numRowsTest.length; test++) {
    let output = [];
    let numRows = numRowsTest[test];

    let counter = 0;

    while (s.length > 0) {
        output.push([]);
        output.push([]);

        for (let i = 0; i < numRows; i++) {
            output[counter].push(s[i]);
        }

        s = s.slice(numRows)

        output[counter + 1].push("");

        for (let i = 0; i < numRows - 2; i++) {
            output[counter + 1].push(s[i]);
        }

        output[counter + 1].push("");
        output[counter + 1].reverse();

        s = s.slice(numRows - 2);

        counter += 2;
    }

    let lastString = "";

    for (let i = 0; i < output.length; i++) {
        output[i] = output[i].map(element => element || "");
        
    }

    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < output.length; j++) {
            lastString += (output[j][i] != "" || output[j][i] != "undefined") ? output[j][i] : "";
        }
    }

    s = sCopy;
    
    console.log(chalk.green(`Test ${test + 1}:`),lastString, "|", chalk.green("Passed"));
}




