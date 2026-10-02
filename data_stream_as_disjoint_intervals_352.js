/* Leetcode - 352. Data Stream as Disjoint Intervals (JavaScript language) - Hard */

const { default: chalk } = require("chalk");

console.log(chalk.yellow("Leetcode - 352. Data Stream as Disjoint Intervals (JavaScript language) -"), chalk.red("Hard"));

class SummaryRanges {
  constructor() {
    this.nums = new Set();
  }

  addNum(value) {
    this.nums.add(value);
  }

  getIntervals() {
    const arr = [...this.nums].sort((a, b) => a - b);

    if (arr.length === 0) return [];

    const result = [];

    let start = arr[0];
    let end = arr[0];

    for (let i = 1; i < arr.length; i++) {
      if (arr[i] === end + 1) {
        end = arr[i];
      } else {
        result.push([start, end]);

        start = arr[i];
        end = arr[i];
      }
    }

    result.push([start, end]);
    return result;
  }
}

console.log(chalk.green("Test 1: "));

const summaryRanges = new SummaryRanges();

summaryRanges.addNum(1);
console.log(summaryRanges.getIntervals());

summaryRanges.addNum(3);
console.log(summaryRanges.getIntervals());

summaryRanges.addNum(7);
console.log(summaryRanges.getIntervals());

summaryRanges.addNum(2);
console.log(summaryRanges.getIntervals());

summaryRanges.addNum(6);
console.log(summaryRanges.getIntervals());

console.log("|", chalk.green("Passed"));


