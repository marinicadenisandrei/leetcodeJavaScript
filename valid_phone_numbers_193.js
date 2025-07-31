/* Leetcode - 193. Valid Phone Numbers (JavaScript language) - Easy */

const { default: chalk } = require("chalk");

console.log(chalk.yellow("Leetcode - 193. Valid Phone Numbers (JavaScript language) - "), chalk.green("Easy"));


function validPhoneNumbers(filesVar) {
    const formatCandidates = [/^\d{3}-\d{3}-\d{4}$/, /^\(\d{3}\) \d{3}-\d{4}$/];

    for (let i = 0; i < filesVar.length; i++) {
        if (formatCandidates[0].test(filesVar[i]) || formatCandidates[1].test(filesVar[i])) {
            console.log(filesVar[i], ((i == filesVar.length - 1) ? "|" : ""));
        }
    }
}

const files = ["987-123-4567", "123 456 7890", "(123) 456-7890"];
console.log(chalk.green("Test 1:"));
validPhoneNumbers(files);
console.log(chalk.green("Passed"));

