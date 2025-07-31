/* Leetcode - 121. Best Time to Buy and Sell Stock (JavaScript language) -Easy */

const chalk = require('chalk');
console.log(chalk.yellow("Leetcode - 121. Best Time to Buy and Sell Stock (JavaScript language) -"), chalk.green("Easy"));

let pricesTest = [[7,1,5,3,6,4], [7,6,4,3,1]];

for (let test = 0; test < pricesTest.length; test++) {

    let prices = pricesTest[test];

    let result = 0;
    let min = 0;
    let max = 0;
    let index = 0;
    let copyPrices = [];

    while (prices.length > 0) {
        min = Math.min(...prices);
        index = prices.indexOf(min);
        copyPrices = prices;

        prices = prices.slice(index+1);

        if (prices.length == 0) {
            copyPrices.splice(index,1);
            prices = copyPrices;
        }
        else {
            max = Math.max(...prices);
            result = max - min;
            break;
        }
    }

    console.log(chalk.green(`Test ${test + 1}:`), result, "|", chalk.green("Passed"));
}

