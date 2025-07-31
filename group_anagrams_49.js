/* Leetcode - 49. Group Anagrams (JavaScript language) - Medium */

const chalk = require('chalk');
console.log(chalk.yellow("Leetcode - 49. Group Anagrams (JavaScript language) - Medium"));

function groupAnagrams(strsVar) {
    let ordonate = [];

    for (let i = 0; i < strsVar.length; i++) {
        let sortedStr = strsVar[i].split("").sort().join("")
        ordonate.push(sortedStr);
    }

    let noDuplicates = [];
    for (let i = 0; i < ordonate.length; i++) {
        if (!noDuplicates.includes(ordonate[i])) {
            noDuplicates.push(ordonate[i]);
        }
    }

    let result = [];

    for (let i = 0; i < noDuplicates.length; i++) {
        result.push([]);

        for (let j = 0; j < ordonate.length; j++) {
            if (noDuplicates[i] == ordonate[j]) {
                result[result.length - 1].push(strsVar[j]);
            }
        }
    }

    return result;
}

strs = [["eat","tea","tan","ate","nat","bat"],[""],["a"]];
for (let test = 0; test < strs.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`),groupAnagrams(strs[test]),"|",chalk.green("Passed"));    
}


