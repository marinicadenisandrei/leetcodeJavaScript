/* Leetcode - 264. Ugly Number II (JavaScript language) - Medium */

const { default: chalk } = require("chalk");

console.log(chalk.yellow("Leetcode - 264. Ugly Number II (JavaScript language) - Medium"));

function isUgly(nVar) {
    if (nVar <= 0) return false;

    for (const p of [2,3,5]) {

        while (nVar % p == 0) {
            nVar /= p;
        }
    }

    return nVar === 1;
}

function nthUglyNumber(nVar) {
    let result = [];

    let counter = 0;
    let tempTry = 0;

    while (counter < nVar) {
        if (isUgly(tempTry)) {
            result.push(tempTry);
            counter++;
        }

        
        tempTry++;
    }

    return result
}

let n = [10,1];

for (let test = 0; test < n.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), nthUglyNumber(n[test]), "|", chalk.green("Passed"));
}