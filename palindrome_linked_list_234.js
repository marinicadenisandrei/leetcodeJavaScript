/* Leetcode - 234. Palindrome Linked List (JavaScript language) - Easy */

const { default: chalk } = require("chalk");

console.log(chalk.yellow("Leetcode - 234. Palindrome Linked List (JavaScript language) -"), chalk.green("Easy"));

function isPalindrome(headVar) {
    for (let i = 0; i < headVar.length / 2; i++) {
        if (headVar[i] != headVar[headVar.length - 1 -i]) {
            return false;
        }
    }

    return true;
}

var head = [[1,2,2,1],[1,2]];

for (let test = 0; test < head.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), isPalindrome(head[test]), "|", chalk.green("Passed"));
}
