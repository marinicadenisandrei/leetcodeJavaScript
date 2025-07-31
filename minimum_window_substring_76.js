/* Leetcode 76. Minimum Window Substring (JavaScript language) - Hard */

const chalk = require('chalk');
console.log(chalk.yellow("Leetcode 76. Minimum Window Substring (JavaScript language) -"), chalk.red("Hard"))

function allInString(sVar, tVar)
{
    let flag = true;

    for (let i = 0; i < tVar.length; i++) {
        flag = false;

        for (let j = 0; j < sVar.length; j++) {
            if (tVar[i] == sVar[j]) {
                flag = true;
                break;
            }
        }

        if (flag == false) {
            return false;
        }
    }

    return true
}

function minWindow(sVar, tVar)
{
    if (sVar.length < tVar.length) {
        return ""
    }

    let results = "";
    let len_results = sVar.length;

    let tempString = "";
    let counter = 0;

    for (let i = 0; i < sVar.length; i++) {
        for (let j = i; j < sVar.length; j++) {
            tempString += sVar[j];
        }
        
        if (allInString(tempString, tVar) && tempString.length <= len_results) {
            results = tempString;
            len_results = tempString.length;
        }

        tempString = "";
        counter = 0;
    }

    return results;
}

let s = ["ADOBECODEBANC", "a", "a"]; 
let t = ["ABC", "a", "aa"];

for (let test = 0; test < s.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), minWindow(s[test], t[test]), "|", chalk.green("Passed"));    
}
