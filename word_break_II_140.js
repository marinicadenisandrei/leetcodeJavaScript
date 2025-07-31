/* Leetcode - 140. Word Break II (JavaScript language) - Hard */

chalk = require('chalk');
console.log(chalk.yellow("Leetcode - 140. Word Break II (JavaScript language) -"),chalk.red("Hard"));

function wordBreak(sVar, wordDictVar) {
    let acumulation = [];
    let temp = "";
    let result = [];

    for (let i = 0; i < sVar.length; i++) {
        temp += sVar[i];
        
        if (wordDictVar.includes(temp)) {
            acumulation.push(temp);
            temp = "";
        }
    }
    
    temp = "";

    for (let i = 0; i < acumulation.length; i++) {
        temp += acumulation[i] + " ";
    }

    let stringWithoutSpaces = temp.split(' ').join('');

    if (stringWithoutSpaces == sVar) {
        result.push(temp);        
    }

    temp = "";

    for (let i = 0; i < acumulation.length - 1; i++) {
        for (let j = 0; j < i; j++) {
            temp += acumulation[j] + " ";
        }

        temp += acumulation[i] + acumulation[i + 1] + " ";
        check = acumulation[i] + acumulation[i + 1];

        for (let j = i + 2; j < acumulation.length; j++) {
            temp += acumulation[j] + " ";
        }

        let stringWithoutSpaces = temp.split(' ').join('');

        if (wordDictVar.includes(check) && stringWithoutSpaces == sVar) {
            result.push(temp);        
        }

        temp = "";
    }

    temp = "";
    acumulation = [];

    for (let i = sVar.length - 1; i >= 0; i--) {
        temp = sVar[i] + temp;
        
        if (wordDictVar.includes(temp)) {
            acumulation.push(temp);
            temp = "";
        }
    }

    temp = "";

    for (let i = acumulation.length - 1; i >= 0; i--) {
        temp += acumulation[i] + " ";
    }

    
    stringWithoutSpaces = temp.split(' ').join('');

    if (stringWithoutSpaces == sVar) {
        result.push(temp);        
    }

    return result
}

let s = ["catsanddog","pineapplepenapple","catsandog"];
let wordDict = [["cat","cats","and","sand","dog"],["apple","pen","applepen","pine","pineapple"],["cats","dog","sand","and","cat"]];

for (let test = 0; test < s.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), wordBreak(s[test], wordDict[test]), "|", chalk.green("Passed"));    
}
