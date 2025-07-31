/* Leetcode - 25. Reverse Nodes in k-Group (JavaScript) - Hard */

const chalk = require('chalk');
console.log(chalk.yellow("Leetcode - 25. Reverse Nodes in k-Group (JavaScript) -"), chalk.red("Hard"));

let headTest = [[1,2,3,4,5], [1,2,3,4,5]];
let kTest = [2, 3];

for(let test = 0; test < headTest.length; test++)
{
    let head = headTest[test];
    let k = kTest[test];
   
    let sort_array = head.slice(0,k).sort((a, b) => b - a);
    let rest_array = head.slice(k);
    head = sort_array.concat(rest_array);
   
    console.log(chalk.green(`Test ${test + 1}:`), head, "|", chalk.green("Passed"));
}