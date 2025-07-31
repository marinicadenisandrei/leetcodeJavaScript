/* Leetcode - 122. Best Time to Buy and Sell Stock II (JavaScript language) - Medium */

const chalk = require('chalk');
console.log(chalk.yellow("Leetcode - 122. Best Time to Buy and Sell Stock II (JavaScript language) - Medium"));

function isDescending(arrayVar) {
    for (let i = 0; i < arrayVar.length - 1; i++) {
        if (arrayVar[i] < arrayVar[i + 1]) {
            return false;
        }
    }

    return true;
}

function maxProfit(pricesVar) {
    if (isDescending(pricesVar)) {
        return 0;
    }

    let profit = 0;
    let start = 0;
    
    for (let i = 0; i < pricesVar.length - 1; i++) {
        if (pricesVar[i] < pricesVar[i + 1]) {
            start = pricesVar[i];

            for (let j = i + 1; j < pricesVar.length - 1; j++) {
                if (pricesVar[j] > pricesVar[j + 1]) {
                    profit += pricesVar[j] - start;
                    i = j;
                    break;
                }
            }
        }
    }

    if (profit == 0) {
        return pricesVar[pricesVar.length - 1] - pricesVar[0];
    }

    return profit;
}

let prices = [[7,1,5,3,6,4],[1,2,3,4,5],[7,6,4,3,1]];
for (let test = 0; test < prices.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), maxProfit(prices[test]), "|", chalk.green("Passed"));    
}
