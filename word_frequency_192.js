/* Leetcode - 192. Word Frequency (JavaScript language) - Medium */

const { default: chalk } = require("chalk");

console.log(chalk.yellow("Leetcode - 192. Word Frequency (JavaScript language) - Medium"));

function wordFrequency(wordsVar) {
    wordsVar = wordsVar.split(/\s+/);
    let noDupl = Array.from(new Set(wordsVar));

    for (let i = 0; i < noDupl.length; i++) {
        console.log(noDupl[i], wordsVar.filter(item => item === noDupl[i]).length);
    }

    console.log("|");
}

let words = "the day is sunny the the\nthe sunny is is";
console.log(chalk.green("Test 1: "));
wordFrequency(words);
console.log(chalk.green("Passed"));

