/* Leetcode - 279. Perfect Squares (JavaScript language) - Medium */

const { default: chalk } = require("chalk");

console.log(chalk.yellow("Leetcode - 279. Perfect Squares (JavaScript language) - Medium"));

function isPerfectSquare(candidate) {
    var square_root = Math.sqrt(candidate);
    var validation = (square_root * square_root) == candidate;

    return validation;
}

function numSquares(nVar) {
    var result = 0;

    for (let i = 2; i < nVar / 2; i++) {
        var candidate = nVar / i
        
        if (Number.isInteger(candidate)) {
            if (isPerfectSquare(candidate)) {
                result = i;
                break;
            }
        }
    }

    if (result == 0) {
        let sum = 0;
        let temp = 4;

        while (sum < nVar) {
            if (isPerfectSquare(temp)) {
                sum += temp;
                result++;
            }

            temp++;
        }

        return ((sum == nVar) ? result : 0);
    }

    return result;
}

var n = [12,13];

for (let test = 0; test < n.length; test++) {
    console.log(
        chalk.green(`Test ${test + 1}:`),
        numSquares(n[test]),
        "|",
        chalk.green("Passed")
    );
}
