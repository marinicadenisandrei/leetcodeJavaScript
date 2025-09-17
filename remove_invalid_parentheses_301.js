/* Leetcode - 301. Remove Invalid Parentheses (JavaScript language) - Hard */

const { default: chalk } = require("chalk");

console.log(chalk.yellow("Leetcode - 301. Remove Invalid Parentheses (JavaScript language) -"), chalk.red("Hard"));

function validParentheses(expression) {
    let acumulation = [];

    for (let i = 0; i < expression.length; i++) {
        if (expression[i] === '(') {
            acumulation.push('(');
        } else if (expression[i] === ')') {
            if (acumulation.length > 0) {
                acumulation.pop();
            } else {
                return false;
            }
        }
    }

    return acumulation.length === 0;
}

function removeInvalidParentheses(sVar) {
    let result = new Set();
    const sVarCopy = sVar;

    for (let i = 0; i < sVar.length; i++) {
        if (sVar[i] !== '(' && sVar[i] !== ')') continue;

        let modified = sVar.slice(0, i) + sVar.slice(i + 1);

        if (validParentheses(modified)) {
            result.add(modified);
        }
    }

    return [...result]
}

let s = ["()())()","(a)())()",")("];

for (let test = 0; test < s.length; test++) {
    console.log(
        chalk.green(`Test ${test + 1}:`),
        removeInvalidParentheses(s[test]),
        "|",
        chalk.green("Passed")
    );
}
