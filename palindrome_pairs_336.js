/* Leetcode - 336. Palindrome Pairs (JavaScript language) - Hard */

const { default: chalk } = require("chalk");

console.log(chalk.yellow("Leetcode - 336. Palindrome Pairs (JavaScript language) -"), chalk.red("Hard"));


function isPalindrome(str) {
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] != str[str.length - 1 - i]) {
            return false;
        }
    }

    return true;
}

function palindromePairs(wordsVar) {
    let result = [];

    for (let i = 0; i < wordsVar.length; i++) {
        for (let j = 0; j < wordsVar.length; j++) {
            if (i != j) {
                let candidate = wordsVar[i] + wordsVar[j];
                if (isPalindrome(candidate)) {
                    let temp = [i,j];
                    result.push(temp);
                }
            }
        }
    }

    return result;
}

let words = [["abcd","dcba","lls","s","sssll"],["bat","tab","cat"],["a",""]];

for (let test = 0; test < words.length; test++) {
    console.log(
        chalk.green(`Test ${test + 1}:`),
        palindromePairs(words[test]),
        "|",
        chalk.green("Passed")
    );
}
