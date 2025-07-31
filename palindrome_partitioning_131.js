/* Leetcode - 131. Palindrome Partitioning (JavaScript language) - Medium */

const chalk = require('chalk');
console.log(chalk.yellow("Leetcode - 131. Palindrome Partitioning (JavaScript language) - Medium"));

function isPalindrome(stringVar) {
    const reversedStr = stringVar.split('').reverse().join('');
    if (stringVar == reversedStr) {
        return true
    }

    return false;
}

function partition(sVar) {
    let result = [];
    let initial = sVar.split('');

    result.push(initial)
    let start = 2;

    while (start < sVar.length) {
        initial = [];
        let temp = sVar.substring(0, start);
        if (isPalindrome(temp)) {
            initial.push(temp);
        }

        for (let i = start; i < sVar.length; i++) {
            if (isPalindrome(sVar[i])) {
                initial.push(sVar[i]);
            }
        }
        
        result.push(initial)
        start++;
    }

    return result;
}


let s = ["aab","a"];

for (let test = 0; test < s.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), partition(s[test]), "|", chalk.green("Passed"));
}
