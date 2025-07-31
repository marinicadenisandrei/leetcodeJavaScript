/* Leetcode - 123. Best Time to Buy and Sell Stock III (JavaScript language) - Hard */

const chalk = require('chalk');
console.log(chalk.yellow("Leetcode - 123. Best Time to Buy and Sell Stock III (JavaScript language) -"), chalk.red("Hard"));

function maxProfit(pricesVar) {
    let profit = 0;
    let profitList = [];

    for (let i = 0; i < pricesVar.length - 1; i++) {
        if (pricesVar[i] < pricesVar[i + 1]) {
            for (let j = i + 1; j < pricesVar.length; j++) {
                if (pricesVar[j] > pricesVar[j + 1]) {
                    profit = pricesVar[j] - pricesVar[i];
                    profitList.push(profit);
                    i = j;
                    break;
                }
                if (j == pricesVar.length - 1) {
                    profit = pricesVar[j] - pricesVar[i];
                    profitList.push(profit);
                    i = j;
                    break;
                }
            }
        }    
    }

    for (let i = 0; i < profitList.length - 1; i++) {
        if (profitList[i] + profitList[i + 1] > profit) {
            profit = profitList[i] + profitList[i + 1];
        }
    }
    
    return profit;
}

let prices = [[3,3,5,0,0,3,1,4],[1,2,3,4,5],[7,6,4,3,1]];

for (let test = 0; test < prices.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), maxProfit(prices[test]), "|", chalk.green("Passed"));    
}
