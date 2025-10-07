/* Leetcode - 309. Best Time to Buy and Sell Stock with Cooldown (JavaScript language) - Medium */

const { default: chalk } = require("chalk");

console.log(chalk.yellow("Leetcode - 309. Best Time to Buy and Sell Stock with Cooldown (JavaScript language) - Medium"));

function maxProfit(pricesVar) {
    let index = 0;
    let profit = 0;

    for (let i = 0; i < pricesVar.length - 1; i++) {
        if (pricesVar[i] > pricesVar[i + 1]) {
            index = i + 1;
            profit += (pricesVar[i] - pricesVar[index]);
        }
    }

    return profit;
}

let prices = [[1,2,3,0,2],[1]];

for (let test = 0; test < prices.length; test++) {
    console.log(
        chalk.green(`Test ${test + 1}:`),
        maxProfit(prices[test]),
        "|",
        chalk.green("Passed")
    );
}
