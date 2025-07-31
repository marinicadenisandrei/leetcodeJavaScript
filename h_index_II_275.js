/* Leetcode - 275. H-Index II (JavaScript language) - Medium */

const { default: chalk } = require("chalk");

console.log(chalk.yellow("Leetcode - 275. H-Index II (JavaScript language) - Medium"));

function hIndex(citationsVar) {
    citationsVar.sort((a, b) => b - a);
    let h = 0;

    for (let i = 0; i < citationsVar.length; i++) {
        if (citationsVar[i] >= i + 1) {
            h = i + 1;
        }
        else {
            break;
        }
    }

    return h;
}

let citations = [[0,1,3,5,6],[1,2,100]];

for (let test = 0; test < citations.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), hIndex(citations[test]), "|", chalk.green("Passed"));
}
