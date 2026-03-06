/* Leetcode - 328. Odd Even Linked List (JavaScript) - Medium */

const { default: chalk } = require("chalk");

console.log(chalk.yellow("Leetcode - 328. Odd Even Linked List (JavaScript) - Medium"));

function oddEvenList(headVar) {
    let first = [];
    let second = [];

    for (let i = 0; i < headVar.length; i++) {
        if (i % 2 == 0) {
            first.push(headVar[i]);
        }
        else {
            second.push(headVar[i]);
        }
    }

    let result = first.concat(second);
    return result;
}

let head = [[1,2,3,4,5],[2,1,3,5,6,4,7]];

for (let test = 0; test < head.length; test++) {
    console.log(
        chalk.green(`Test ${test + 1}:`),
        oddEvenList(head[test]),
        "|",
        chalk.green("Passed")
    );
}
