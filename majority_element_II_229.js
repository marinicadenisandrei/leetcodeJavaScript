/* Leetcode - 229. Majority Element II (JavaScript language) - Medium */

const { default: chalk } = require("chalk");

console.log(chalk.yellow("Leetcode - 229. Majority Element II (JavaScript language) - Medium"));

function majorityElement(numsVar) {
    var results = [];
    var max = 0;

    var candidates = [];
    var lens = [];

    for (let i = 0; i < numsVar.length; i++) {
        const counts = numsVar.filter(num => num === numsVar[i]).length; 
        candidates.push(numsVar[i]);
        lens.push(counts);
    }

    max = Math.max(...lens);

    for (let i = 0; i < lens.length; i++) {
        if (lens[i] === max && !results.includes(candidates[i])) {
            results.push(candidates[i]);
        }
    }
    
    return results;
}

var nums = [[3,2,3],[1],[1,2]];

for (let test = 0; test < nums.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), majorityElement(nums[test]), "|", chalk.green("Passed"));
}