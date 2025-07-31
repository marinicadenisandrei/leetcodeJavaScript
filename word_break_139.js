/* Leetcode - 139. Word Break (JavaScript language) - Medium */

const chalk = require('chalk');
console.log(chalk.yellow("Leetcode - 139. Word Break (JavaScript language) - Medium"));

function wordBreak(sVar, wordDictVar) {
    let flag = true;

    while (flag) {
        flag = false;

        for (let i = 0; i < wordDictVar.length; i++) {
            if (sVar.includes(wordDictVar[i])) {
                sVar = sVar.replace(wordDictVar[i], "");
                flag = true;
                break;
            }
        }
    }

    if (sVar.length == 0) {
        return true;
    }

    return false;
}

s = ["leetcode","applepenapple","catsandog"];
wordDict = [["leet","code"],["apple","pen"],["cats","dog","sand","and","cat"]];

for (let test = 0; test < s.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), wordBreak(s[test], wordDict[test]), "|", chalk.green("Passed"));
}
