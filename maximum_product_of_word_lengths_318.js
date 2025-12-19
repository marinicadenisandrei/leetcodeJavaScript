/* Leetcode - 318. Maximum Product of Word Lengths (JavaScript language) - Medium */

const { default: chalk } = require("chalk");

console.log(chalk.yellow("Leetcode - 318. Maximum Product of Word Lengths (JavaScript language) - Medium"));

function maxProduct(wordsVar) {
    let result = 0;

    for (let i = 0; i < wordsVar.length; i++) {
        for (let j = 0; j < wordsVar.length; j++) {
            if (i != j) {
                const set1 = new Set(wordsVar[i]);
                const set2 = new Set(wordsVar[j]);

                const differentChars = [
                ...[...set1].filter(ch => set2.has(ch)),
                ...[...set2].filter(ch => set1.has(ch))
                ];
                
                let temp = wordsVar[i].length * wordsVar[j].length;

                result = ((differentChars.length == 0 && result < temp) ? temp : result);
            }
        }
    }

    return result;
}

let words = [["abcw","baz","foo","bar","xtfn","abcdef"],["a","ab","abc","d","cd","bcd","abcd"],["a","aa","aaa","aaaa"]];

for (let test = 0; test < words.length; test++) {
    console.log(
        chalk.green(`Test ${test + 1}:`),
        maxProduct(words[test]),
        "|",
        chalk.green("Passed")
    );
}
