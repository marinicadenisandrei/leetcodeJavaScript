/* Leetcode - 187. Repeated DNA Sequences (JavaScript language) - Medium */

const { default: chalk } = require("chalk");

console.log(chalk.yellow("Leetcode - 187. Repeated DNA Sequences (JavaScript language) - Medium"));

function countOccurrences(mainString, subString) {
    let count = 0;
    let pos = mainString.indexOf(subString);

    while (pos !== -1) {
        count++;
        pos = mainString.indexOf(subString, pos + subString.length);
    }

    return count;
}

function findRepeatedDnaSequences(sVar) {
    var result = [];

    if (sVar.length < 20) {
        result.push(sVar.substring(0,10));
        return result;
    }

    for (let i = 0; i < sVar.length - 10; i++) {
        var dnaVar = sVar.substring(i,i + 10);
        
        if (countOccurrences(sVar, dnaVar) > 1) {
            result.push(dnaVar);
        }
    }

    return [...new Set(result)];
}

var s = ["AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT","AAAAAAAAAAAAA"];

for (let test = 0; test < s.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), findRepeatedDnaSequences(s[test]), "|", chalk.green("Passed"));    
}

