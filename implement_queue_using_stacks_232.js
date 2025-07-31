/* Leetcode - 232. Implement Queue using Stacks (JavaScript language) - Easy */

const { default: chalk } = require("chalk");

console.log(chalk.yellow("Leetcode - 232. Implement Queue using Stacks (JavaScript language) -"), chalk.green("Easy"));

class MyQueue {
  constructor() {
    this.stack = [];
  }

  push(x) {
    this.stack.push(x);
  }

  peek() {
    return this.stack[0];
  }

  pop() {
    var x = this.stack[0];
    this.stack.shift();

    return x;
  }

  empty() {
    return this.stack.length == 0;
  }
}

console.log(chalk.green("Test 1: "));

const myQueue  = new MyQueue();
myQueue.push(1); 
myQueue.push(2); 
console.log(myQueue.peek());
console.log(myQueue.pop());
console.log(myQueue.empty());

console.log("|", chalk.green("Passed"));



 
 