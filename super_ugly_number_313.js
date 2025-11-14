/* Leetcode - 313. Super Ugly Number (JavaScript language) - Medium */

const { default: chalk } = require("chalk");

console.log(chalk.yellow("Leetcode - 313. Super Ugly Number (JavaScript language) - Medium"));

function nthSuperUglyNumber(nVar, primesVar) {
    let start = 2;
    let counterUgly = 1;

    while (counterUgly < nVar) {
        let check = start;
        let flag = true;
        while (flag) {
            flag = false;

            for (let i = 0; i < primesVar.length; i++) {
                if (check % primesVar[i] == 0) {
                    check /= primesVar[i];
                    flag = true;
                    break;
                }
            }
        }

        if (check == 1) {
            counterUgly++;
        }

        start++;
    }

    return start - 1;
}

let n = [12,1];
let primes = [[2,7,13,19],[2,3,5]];

for (let test = 0; test < n.length; test++) {
    console.log(
        chalk.green(`Test ${test + 1}:`),
        nthSuperUglyNumber(n[test], primes[test]),
        "|",
        chalk.green("Passed")
    );
}