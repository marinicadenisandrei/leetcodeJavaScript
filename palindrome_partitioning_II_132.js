/* Leetcode - 132. Palindrome Partitioning II (JavaScript language) - Hard */

const chalk = require('chalk');
console.log(chalk.yellow("Leetcode - 132. Palindrome Partitioning II (JavaScript language) -"), chalk.red("Hard"));

function isPalindrome(stringVar) {
    return stringVar == stringVar.split('').reverse().join('');
}

function minCut(sVar) {
    let temp = "";
    let cuts = 0;

    for (let i = 0; i < sVar.length; i++) {
        temp += sVar[i];
        
        
        if (isPalindrome(temp + sVar[i + 1])) {
            continue;
        }
        else
        {
            cuts++;
            temp = "";
        }
    }

    return cuts - 1;
}

let s = ["aab","a","ab"];

for (let test = 0; test < s.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), minCut(s[test]), "|", chalk.green("Passed"));    
}
