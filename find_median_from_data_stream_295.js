/* Leetcode - 295. Find Median from Data Stream (JavaScript language) - Hard */

const { default: chalk } = require("chalk");

console.log(chalk.yellow("Leetcode - 295. Find Median from Data Stream (JavaScript language) -"), chalk.red("Hard"));

class MedianFinder {
    constructor() {
        this.list = [];
    }

    addNum(x) {
        this.list.push(x);
    }

    findMedian() {
        return this.list.reduce((sum, current) => sum + current, 0) / this.list.length;
    }
}

let medianFinder = new MedianFinder();
console.log(
    chalk.green("Test 1:"),
    medianFinder.addNum(1),
    medianFinder.addNum(2),    
    medianFinder.findMedian(),
    medianFinder.addNum(3), 
    medianFinder.findMedian(),
    "|",
    chalk.green("Passed")
);
 