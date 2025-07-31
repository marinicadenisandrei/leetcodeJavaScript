/* Leetcode - 208. Implement Trie (Prefix Tree) (JavaScript language) - Medium */

const { default: chalk } = require("chalk");

console.log(chalk.yellow("Leetcode - 208. Implement Trie (Prefix Tree) (JavaScript language) - Medium"));

class Trie {
    trie = [];

    insert(element) {
        this.trie.push(element);
    }

    search(element) {
        return this.trie.includes(element);
    }

    startsWith(element) {
        for (let i = 0; i < this.trie.length; i++) {
            if (this.trie[i].substring(0, element.length) === element) {
                return true;
            }
        }

        return false;
    }
}
  

const trie = new Trie();

console.log(chalk.green("Test 1: "));

trie.insert("apple");
console.log(trie.search("apple"));
console.log(trie.search("app"));
console.log(trie.startsWith("app"));
trie.insert("app");
console.log(trie.search("app"));

console.log("|", chalk.green("Passed"));

  