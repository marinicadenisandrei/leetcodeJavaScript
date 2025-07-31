/* Leetcode - 182. Duplicate Emails (JavaScript language) - Easy */

const chalk = require('chalk');
console.log(chalk.yellow("Leetcode - 182. Duplicate Emails (JavaScript language) -"), chalk.green("Easy"));

function duplicateEmails(emailVar) {
    let result = [];

    for (let i = 0; i < emailVar.length; i++) {
        for (let j = 0; j < emailVar.length; j++) {
            if (emailVar[i] == emailVar[j] && result.indexOf(emailVar[i]) == -1 && i != j) {
                result.push(emailVar[i]);
                break;
            }
        }
    }

    return result;    
}

let email = ["a@b.com", "c@d.com", "a@b.com"];
console.log(chalk.green("Test 1:"), duplicateEmails(email), "|", chalk.green("Passed"));
