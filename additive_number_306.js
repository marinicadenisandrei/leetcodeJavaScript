/* Leetcode - 306. Additive Number (JavaScript language) - Medium */

const { default: chalk } = require("chalk");

console.log(chalk.yellow("Leetcode - 306. Additive Number (JavaScript language) - Medium"));

function isAdditiveNumber(expr) {
  const n = expr.length;

  for (let i = 1; i <= n - 2; i++) {
    const num1 = expr.substring(0, i);
    if (num1.length > 1 && num1[0] === "0") break;

    for (let j = i + 1; j <= n - 1; j++) {
      const num2 = expr.substring(i, j);
      if (num2.length > 1 && num2[0] === "0") continue;

      let a = num1, b = num2, k = j; 

      while (k < n) {
        const sumStr = (BigInt(a) + BigInt(b)).toString();
        const next = expr.slice(k, k + sumStr.length);

        if (next !== sumStr) {
          break;
        }

        k += sumStr.length;
        a = b;
        b = sumStr;
      }

      if (k === n) {
        return true;
      }
    }
  }

  return false;
}

let expr = ["112358","199100199"];

for (let test = 0; test < expr.length; test++) {
    console.log(
        chalk.green(`Test ${test + 1}:`),
        isAdditiveNumber(expr[test]),
        "|",
        chalk.green("Passed")
    );
}