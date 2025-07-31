/* Leetcode - 196. Delete Duplicate Emails (JavaScript language) - Easy */

const { default: chalk } = require("chalk");

console.log(chalk.yellow("Leetcode - 196. Delete Duplicate Emails (JavaScript language) -"), chalk.green("Easy"));


function deleteDuplicateEmails(emailVar) {
    return [...new Set(emailVar)]
}

let email = ["john@example.com","bob@example.com","john@example.com"];
console.log(chalk.green("Test 1:"), deleteDuplicateEmails(email), "|", chalk.green("Passed"));
