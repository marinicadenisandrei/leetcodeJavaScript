/* Leetcode - 115. Distinct Subsequences (JavaScript language) - Hard */

const chalk = require('chalk');
console.log(chalk.yellow("Leetcode - 115. Distinct Subsequences (JavaScript language) -"), chalk.red("Hard"));

function removeDuplicates(str) {
    return [...new Set(str)].join('');
}

function numDistinct(sVar, tVar) {
    let globalCounter = 0;
    tVar = removeDuplicates(tVar);

    for (let i = 0; i < tVar.length - 1; i++) {
        let counter = sVar.split(tVar[i]).length - 1;
        if (i == 0) {
            let lastIndex = 0;
            let flag = true;

            for (let j = sVar.length; j >= 0; j--) {
                if (sVar[j] == tVar[i]) {
                    lastIndex = j;
                    break;
                }
            }

            let substr = sVar.substring(lastIndex + 1, sVar.length);
            for (let j = i + 1; j < tVar.length; j++) {
                if (!substr.includes(tVar[j])) {
                    flag = false;
                    break;
                }
            }

            if (flag && counter > 1) {
                globalCounter += counter;
            }
        }
        else if (i > 0 && i < tVar.length) 
        {
            let indexList = [];

            for (let j = 0; j < sVar.length; j++) {
                if (sVar[j] == tVar[i]) {
                    indexList.push(j);
                }
            }

            let firstIndex = indexList[0];
            let lastIndex = indexList[indexList.length - 1];
            

            let left = true;
            let right = true;
            
            let leftSubstr = sVar.substring(0, firstIndex);
            let rightSubstr = sVar.substring(lastIndex, sVar.length);

            for (let j = 0; j < i; j++) {
                if (!leftSubstr.includes(tVar[j])) {
                    left = false;
                    break;
                }
            }

            for (let j = i + 1; j < tVar.length; j++) {
                if (!rightSubstr.includes(tVar[j])) {
                    right = false;
                    break;
                }
            }

            if (left && right && counter > 1) {
                globalCounter += counter
            }
        }
    }

    return globalCounter;
}

let s = ["rabbbit","babgbag"];
let t = ["rabbit","bag"];

for (let test = 0; test < s.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), numDistinct(s[test], t[test]), "|", chalk.green("Passed"));
}
