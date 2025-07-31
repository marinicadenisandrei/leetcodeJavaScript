const chalk = require('chalk');

console.log(chalk.yellow("Leetcode - 127. Word Ladder (JavaScript language) - "), chalk.red("Hard"));

function numberOfSameChar(string1, string2) {
    let same = 0;

    for (let i = 0; i < string1.length; i++) {
        same += ((string1[i] == string2[i]) ? 1 : 0);
    }

    return same;
}

function findLadders(beginWordVar, endWordVar, wordListVar) {
    let acumulation = [];
    let flag = true;
    let output = [];
    let minTransformation = wordListVar.length;

    if (!wordListVar.includes(endWordVar)) {
        return 0;
    }

    for (let i = 0; i < wordListVar.length; i++) {
        acumulation.push(numberOfSameChar(wordListVar[i], endWordVar))
    }

    while (flag) {
        flag = false;
        let step = 1;
        let removeInd = [];
        output.push([]);
        output[output.length - 1].push(beginWordVar);

        for (let i = 0; i < acumulation.length; i++) {
            if (acumulation[i] == 1 && step == 1) {
                output[output.length - 1].push(wordListVar[i]);
            }
            else if (acumulation[i] > step && step < endWordVar.length - 1) {
                output[output.length - 1].push(wordListVar[i]);
                removeInd.push(i);
                step++;
                flag = true;
            }
            else if (acumulation[i] == endWordVar.length) {
                break;
            } 
        }

        output[output.length - 1].push(endWordVar);

        for (let i = 0; i < removeInd.length; i++) {
            wordListVar.splice(removeInd[i],1);
            wordListVar.splice(acumulation[i],1);
        }

        if (wordListVar.length < endWordVar.length) {
            break
        }
    }

    for (let i = 0; i < output.length; i++) {
        minTransformation = ((output[i].length < minTransformation) ? output[i].length : minTransformation);
    }

    return minTransformation;
}

let beginWord = ["hit","hit"];
let endWord = ["cog","cog"];
let wordList = [["hot","dot","dog","lot","log","cog"],["hot","dot","dog","lot","log"]];

for (let test = 0; test < beginWord.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), findLadders(beginWord[test], endWord[test], wordList[test]), "|", chalk.green("Passed"));   
}

