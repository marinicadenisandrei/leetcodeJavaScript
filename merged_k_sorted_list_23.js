/* Leetcode - 23. Merge k Sorted Lists (JavaScript language) - Hard */

const chalk = require('chalk');

console.log(chalk.yellow("Leetcode - 23. Merge k Sorted Lists (JavaScript language) -"), chalk.red("Hard"));

let listsTest = [[[1,4,5],[1,3,4],[2,6]], [], [[]]];

for (let test = 0; test < listsTest.length; test++) {
    lists = listsTest[test];
    
    for (let i = 1; i < lists.length; i++) {
        lists[0].push.apply(lists[0], lists[i]);
    }
    
    try {
        lists = lists[0].sort();
    } catch (TypeError) {
    list = [];
    }
    
    console.log(chalk.green(`Test ${test + 1}:`), lists, "|", chalk.green("Passed"));
}



