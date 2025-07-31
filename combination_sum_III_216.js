/* Leetcode - 216. Combination Sum III (JavaScript language) - Medium */

const { default: chalk } = require("chalk");

console.log(chalk.yellow("Leetcode - 216. Combination Sum III (JavaScript language) - Medium"));

function combinationSum3(k, n) {
    let result = [];

    function backtrack(start, path, total) {
        if (path.length === k && total === n) {
            result.push([...path]); 
            return;
        }
   
        if (path.length > k || total > n) {
            return;
        }

        for (let i = start; i <= 9; i++) {
            path.push(i);
            backtrack(i + 1, path, total + i);
            path.pop(); 
        }
    }

    backtrack(1, [], 0); 
    return result;
}

var k = [3,3,4]; 
var n = [7,9,1];

for (let test = 0; test < k.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), combinationSum3(k[test], n[test]), "|", chalk.green("Passed"));
} 
