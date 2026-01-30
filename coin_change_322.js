/* Leetcode - 322. Coin Change (JavaScript language) - Medium */

const { default: chalk } = require("chalk");

console.log(chalk.yellow("Leetcode - 322. Coin Change (JavaScript language) - Medium"));

function coinChange(coinsVar, amountVar) {
    let result = 0;
    let temp = 0;
    let index = coinsVar.length - 1;

    while (index > -1) {
        if (amountVar - temp >= coinsVar[index]) {
            temp += coinsVar[index];
            result++
        }
        else {
            index--;
        }
    }

    return ((temp == amountVar) ? result : -1);
}

let coins = [[1,2,5],[2],[1]];
let amount = [11,3,0];

for (let test = 0; test < amount.length; test++) {
    console.log(
        chalk.green(`Test ${test + 1}`),
        coinChange(coins[test], amount[test]),
        "|",
        chalk.green("Passed")
    );
}
