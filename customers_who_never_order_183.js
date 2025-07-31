/* Leetcode - 183. Customers Who Never Order (JavaScript language) - Easy */

const chalk = require('chalk');
console.log(chalk.yellow("Leetcode - 183. Customers Who Never Order (JavaScript language) -"), chalk.green("Easy"));

function customerWhoNeverOrder(nameIDVar, nameVar, customerIDVar) {
    let result = [];

    for (let i = 0; i < nameIDVar.length; i++) {
        if (!customerIDVar.includes(nameIDVar[i])) {
            result.push(nameVar[i]);
        }
    }

    return result;
}

let nameID = [1,2,3,4];
let name = ["Joe", "Henry", "Sam", "Max"];
let customerID = [3,1];

console.log(chalk.green("Test 1:"), customerWhoNeverOrder(nameID, name, customerID), "|", chalk.green("Passed"));
