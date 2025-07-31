/* Leetcode - 180. Consecutive Numbers (JavaScript langiage) - Medium */

const chalk = require('chalk');
console.log(chalk.yellow("Leetcode - 180. Consecutive Numbers (JavaScript langiage) - Medium"));

function consecutiveNumbers(numVar) {
    let count = 0;
    let maxVar = 0;
    let numberVar = 0;

    for (let i = 0; i < numVar.length - 1; i++) {
        if (numVar[i] == numVar[i + 1]) {
            count++;
        }
        else
        {
            if (maxVar < count) {
                maxVar = count;
                numberVar = numVar[i];
            }
        }
    }

    return numberVar;
}

let num = [1,1,1,2,1,2,2];
console.log(chalk.green("Test 1:"), consecutiveNumbers(num), "|", chalk.green("Passed"));
