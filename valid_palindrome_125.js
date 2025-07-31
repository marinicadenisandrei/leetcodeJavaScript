/* Leetcode - 125. Valid Palindrome (JavaScript Language) - Easy */ 

const chalk = require('chalk');
console.log(chalk.yellow("Leetcode - 125. Valid Palindrome (JavaScript Language) -"), chalk.green("Easy"));

function isPalindrome(sVar) {
    sVar = sVar.toLowerCase();
    sVar = sVar.replace(/[^\w\s]/g, '').replace(/\s+/g, '');
    let reversedStr = sVar.split('').reverse().join('');

    if (sVar == reversedStr) {
        return true;
    }

    return false;
}

let s = ["A man, a plan, a canal: Panama","race a car"," "];
for (let test = 0; test < s.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), isPalindrome(s[test]), "|", chalk.green("Passed"));    
}


