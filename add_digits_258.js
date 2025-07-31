/* Leetcode - 258. Add Digits (JavaScript language) - Easy */

const { default: chalk } = require("chalk");

console.log(chalk.yellow("Leetcode - 258. Add Digits (JavaScript language) -"), chalk.green("Easy"));

function addDigits(num) {
  let s = String(num);

  while (s.length > 1) {
    let sum = 0;
    for (const ch of s) {
      sum += Number(ch);
    }

    s = String(sum);
  }

  return Number(s);
}

let num = [38,0];

for (let test = 0; test < num.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), addDigits(num[test]), "|", chalk.green("Passed"));
}
