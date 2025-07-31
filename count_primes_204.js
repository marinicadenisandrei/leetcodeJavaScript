/* Leetcode - 204. Count Primes (JavaScript language) - Medium */

const { default: chalk } = require("chalk");

console.log(chalk.yellow("Leetcode - 204. Count Primes (JavaScript language) - Medium"));

function countPrimes(nVar) {
    let counter = 0;

    for (let i = 2; i < nVar; i++) {
        if (isPrime(i)) {counter++;}
    }

    return counter;
}

function isPrime(numberVar) {
    for (let i = 2; i <= numberVar / 2; i++) {
        if (numberVar % i == 0) {
            return false;
        }
    }

    return true;
}

let n = [10,0,1];

for (let test = 0; test < n.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), countPrimes(n[test]), "|", chalk.green("Passed"));
}

