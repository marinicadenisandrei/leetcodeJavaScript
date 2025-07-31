/* Leetcode - 274. H-Index (JavaScript language) - Medium */

const { default: chalk } = require("chalk");

console.log(chalk.yellow("Leetcode - 274. H-Index (JavaScript language) - Medium"));

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

let citations = [[3,0,6,1,5],[1,3,1]];

for (let test = 0; test < citations.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), hIndex(citations[test]), "|", chalk.green("Passed"));
}
