/* Leetcode - 284. Peeking Iterator (JavaScript language) - Medium */

const { default: chalk } = require("chalk");

console.log(chalk.yellow("Leetcode - 284. Peeking Iterator (JavaScript language) - Medium"));

class PeekingIterator {
    constructor(listVar) {
        this.listVar = listVar;
        this.it = 0;
    }

    next() {
        this.it++;

        if (this.it <= this.listVar.length) {
            return this.listVar[this.it - 1];
        }

        return -1;
    }

    peek() {
        if (this.it < this.listVar.length) {
            return this.listVar[this.it];
        }
    }

    hasNext() {
        if (this.it + 1 < this.listVar.length) {
            return true;
        }

        return false;
    }
}

const peekingIterator  = new PeekingIterator ([1, 2, 3]);

console.log(
    chalk.green("Test 1:"),
    peekingIterator.next(),    
    peekingIterator.peek(),    
    peekingIterator.next(),    
    peekingIterator.next(),    
    peekingIterator.hasNext(),
    "|", chalk.green("Passed")
);



