/* Leetcode - 197. Rising Temperature (JavaScript language) - Easy */

const { default: chalk } = require("chalk");

console.log(chalk.yellow("Leetcode - 197. Rising Temperature (JavaScript language) -"), chalk.green("Easy"));

function risingTemperature(temperatureVar) {
    let result = [];

    for (let i = 0; i < temperatureVar.length; i++) {
        if (temperatureVar[i] < temperatureVar[i + 1]) {
            result.push(i + 2);
        }
    }

    return result;
}

let temperature = [10,25,20,30];
console.log(chalk.green("Test 1:"), risingTemperature(temperature), "|", chalk.green("Passed"));
