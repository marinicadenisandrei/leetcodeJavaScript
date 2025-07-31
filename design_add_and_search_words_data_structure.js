/* Leetcode - 211. Design Add and Search Words Data Structure (JavaScript language) - Medium */

const { default: chalk } = require("chalk");

console.log(chalk.yellow("Leetcode - 211. Design Add and Search Words Data Structure (JavaScript language) - Medium"));

class WordDictionary {
    constructor() {
        this.dictVar = [];
    }

    addWord(word) {
        this.dictVar.push(word);
    }

    search(word) {
        for (let i = 0; i < this.dictVar.length; i++) {
            let flag = true;

            if (this.dictVar[i].length == word.length) {
                for (let j = 0; j < word.length; j++) {
                    if (word[j] == '.') {
                        continue;
                    }

                    if (word[j] != this.dictVar[i][j]) {
                        flag = false;
                        break;
                    }
                }
            }

            if (flag) {
                return true;
            }
        }

        return false;
    }
}

const wordDictionary = new WordDictionary();
wordDictionary.addWord("bad");
wordDictionary.addWord("dad");
wordDictionary.addWord("mad");

console.log(chalk.green("Test 1:"), wordDictionary.search("pad"), wordDictionary.search("bad"), wordDictionary.search(".ad"),wordDictionary.search("b.."), "|", chalk.green("Passed"));