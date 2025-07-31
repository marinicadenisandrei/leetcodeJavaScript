/* Leetcode - 231. Power of Two (JavaScript language) - Easy */

const { default: chalk } = require("chalk");

console.log(chalk.yellow("Leetcode - 231. Power of Two (JavaScript language) -"), chalk.green("Easy"));

function isPowerOfTwo(nVar) {
    for (let i = 0; i <= nVar / 2; i++) {
        if (Math.pow(2, i) == nVar) {
            return true;
        }    
    }

    return false;
}

n = [1,16,3];

for (let test = 0; test < n.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), isPowerOfTwo(n[test]), "|", chalk.green("Passed"));
}

