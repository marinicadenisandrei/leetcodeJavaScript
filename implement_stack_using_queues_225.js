/* Leetcode - 225. Implement Stack using Queues (JavaScript language) - Easy */

const { default: chalk } = require("chalk");

console.log(chalk.yellow("Leetcode - 225. Implement Stack using Queues (JavaScript language) -"), chalk.green("Easy"));

class MyStack {
    queue = [];
  
    constructor() {
    }
  
    push(x) {
      this.queue.push(x);
    }

    pop() {
        var x = this.queue[this.queue.length - 1];
        this.queue.pop();

        return x;
    }

    top() {
        var x = this.queue[this.queue.length - 1];

        return x;
    }

    empty() {
        if (this.queue.length == 0) {
            return true;
        }

        return false;
    }
  }
  

console.log(chalk.green("Test 1:"));

const myStack  = new MyStack();
myStack.push(1);
myStack.push(2);
console.log(myStack.top());
console.log(myStack.pop());
console.log(myStack.empty());
console.log("|", chalk.green("Passed"));
