/* Leetcode - 241. Different Ways to Add Parentheses (JavaScript language) - Medium */

const { default: chalk } = require("chalk");

console.log(chalk.yellow("Leetcode - 241. Different Ways to Add Parentheses (JavaScript language) - Medium"));

function diffWaysToCompute(expressionVar) {
    const original = expressionVar;
    expressionVar = "(" + expressionVar + ")";

    var result = [];

    for (let i = 0; i < expressionVar.length; i++) {
        var splitVar = expressionVar.split('');
        [splitVar[i],splitVar[i + 1]] = [splitVar[i + 1],splitVar[i]]
        expressionVar = splitVar.join('');

        try {
            result.push(eval(expressionVar));
        } catch (e) {
        }
    }
    
    expressionVar = original;
    expressionVar = "(" + expressionVar + ")";

    for (let i = expressionVar.length - 1; i >= 0; i--) {
        var splitVar = expressionVar.split('');
        [splitVar[i],splitVar[i - 1]] = [splitVar[i - 1],splitVar[i]]
        expressionVar = splitVar.join('');

        try {
            result.push(eval(expressionVar));
        } catch (e) {
        }
    }
    
    expressionVar = original;
    expressionVar = "(" + expressionVar + ")";

    for (let i = 0; i < expressionVar.length / 2; i++) {
        var splitVar = expressionVar.split('');
        [splitVar[i],splitVar[i + 1]] = [splitVar[i + 1],splitVar[i]];
        expressionVar = splitVar.join('');
        
        try {
            result.push(eval(expressionVar));
        } catch (e) {
            
        }

        splitVar = expressionVar.split('');
        [splitVar[splitVar.length - i - 1],splitVar[splitVar.length - i - 2]] = [splitVar[splitVar.length - i - 2],splitVar[splitVar.length - i - 1]];
        expressionVar = splitVar.join('');

        try {
            result.push(eval(expressionVar));
        } catch (e) {
            
        }
    }

    return [...new Set(result)];
}

var expression = ["2-1-1","2*3-4*5"];

for (let test = 0; test < expression.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), diffWaysToCompute(expression[test]), "|", chalk.green("Passed"));
}
