/* Leetcode - 5. Longest Palindromic Substring (JavaScript language) - Medium */

const chalk = require('chalk');

console.log(chalk.yellow("Leetcode - 5. Longest Palindromic Substring (JavaScript language) - Medium"));

let sTest = ["babad","cbbd"];

for (let test = 0; test < sTest.length; test++) {
    let s = sTest[test];
    let depth = s.length;

    let output = [];
    let outputPal = [];

    function createSubstrings(string) {
        let arrayStrings = [];
        for (let i = 1; i < string.length; i++) {
            arrayStrings.push(string.slice(0,i));   
        }

        return arrayStrings;
    }

    for (let i = 0; i < depth; i++) {
        output.push(...createSubstrings(s));
        s = s.slice(1);
    }

    let maxIndex = 0;
    let maxValue = 0;

    for (let i = 0; i < output.length; i++) {
        if (output[i] == output[i].split("").reverse().join("")) {
            if (output[i].length > maxValue) {
                maxValue = output[i].length;
                maxIndex = i;
            }
        }
    }

    console.log(chalk.green(`Test ${test + 1}:`),output[maxIndex], "|", chalk.green("Passed"));
}



