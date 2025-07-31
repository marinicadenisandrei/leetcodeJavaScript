/* Leetcode - 150. Evaluate Reverse Polish Notation (JavaScript language) - Medium */

const chalk = require('chalk');
console.log(chalk.yellow("Leetcode - 150. Evaluate Reverse Polish Notation (JavaScript language) - Medium"));

function evalRPN(tokensVar) {

    while (tokensVar.length > 1) {
        for (let i = 0; i < tokensVar.length; i++) {
            if (isNaN(Number(tokensVar[i]))) {
                let result = 0;
    
                if (tokensVar[i] == '+') {
                    result = String(Number(tokensVar[i - 2]) + Number(tokensVar[i - 1]));
                }
                else if (tokensVar[i] == '-') {
                    result = String(Number(tokensVar[i - 2]) - Number(tokensVar[i - 1]));
                }
                else if ((tokensVar[i] == '*')) {
                    result = String(Number(tokensVar[i - 2]) * Number(tokensVar[i - 1]));
                }
                else {
                    result = parseInt(String(Number(tokensVar[i - 2]) / Number(tokensVar[i - 1])));
                }
    
                tokensVar.splice(i + 1, 0, result);
                tokensVar.splice(i - 2, 3);

                break;
            }
        }
    }

    return parseInt(tokensVar[0]);
}

let tokens = [["2","1","+","3","*"],["4","13","5","/","+"],["10","6","9","3","+","-11","*","/","*","17","+","5","+"]];

for (let test = 0; test < tokens.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), evalRPN(tokens[test]), "|", chalk.green("Passed"));    
}
