/* Leetcode - 38. Count and Say (JavaScript language) - Medium */

const chalk = require('chalk');
console.log(chalk.yellow("Leetcode - 38. Count and Say (JavaScript language) - Medium"))

let nTest = [1, 4];

for (let test = 0; test < nTest.length; test++) {
    let n = nTest[test];
    let number = "1";

    for (let j = 0; j < n - 1; j++) {
        let counter = 1;
        let temp = "";

        for (let i = 0; i < number.length; i++) {
            if (number[i] == number[i+1]) {
                counter++;
            }
            else
            {
                temp += counter.toString();
                temp += number[i].toString();
                counter = 1;
            }
        }

        number = temp;
    }

    console.log(chalk.green(`Test ${test + 1}:`), number, "|", chalk.green("Passed"));
}

