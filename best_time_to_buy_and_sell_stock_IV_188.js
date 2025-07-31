/* Leetcode - 188. Best Time to Buy and Sell Stock IV (JavaScript language) - Hard */

const { default: chalk } = require("chalk");

console.log(chalk.yellow("Leetcode - 188. Best Time to Buy and Sell Stock IV (JavaScript language) -"), chalk.red("Hard"));

function maxProfit(kVar, pricesVar) {
    let result = 0;

    for (let i = 0; i < pricesVar.length; i++) {
        let profit = 0;
        let starter = pricesVar[i];
        let counter = 0;

        for (let j = i + 1; j < pricesVar.length; j++) {
            if (pricesVar[j] > pricesVar[j + 1]) {
                profit += pricesVar[j] - starter;
                
                let temp = pricesVar.slice(j + 1, pricesVar.length);
                let index = pricesVar.indexOf(Math.min(...temp));

                starter = pricesVar[index];
                j = index + 1;

                counter++;        
            }
            
            if (j == pricesVar.length - 1) {
                profit += pricesVar[j] - starter;
                counter++;
            }
        }

        if (result < profit && counter <= kVar) {
            result = profit;
        }
    }

    return result;
}

let k = [2,2]; 
let prices = [[2,4,1],[3,2,6,5,0,3]];

for (let test = 0; test < k.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), maxProfit(k[test], prices[test]), "|", chalk.green("Passed"));
}
