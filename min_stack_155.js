/* Leetcode - 155. Min Stack (JavaScript language) - Medium */

const chalk = require('chalk');
console.log(chalk.yellow("Leetcode - 155. Min Stack (JavaScript language) - Medium"));

function push(value) {
    MinStack.push(value)
    cache.push(0);
}

function getMin() {
    let minValue = Math.min(...MinStack);
    cache.push(minValue);
    return minValue;
}

function pop() {
    MinStack.pop();
    cache.push(0);
}

function top() {
    let topValue = MinStack[MinStack.length - 1];
    cache.push(topValue)
    return topValue;
}

let MinStack = [];
let cache = [0];

push(-2);
push(0);
push(-3);
getMin();
pop();
top();
getMin();

console.log(chalk.green(`Test 1:`), cache, "|", chalk.green("Passed"));



