/* Leetcode - 347. Top K Frequent Elements (JacaScript language) - Medium */

const { default: chalk } = require("chalk");

console.log(chalk.yellow("Leetcode - 347. Top K Frequent Elements (JacaScript language) - Medium"));

function topKFrequent(numsVar, kVar) {
    let counts = {};
    let result = [];

    for (let k = 0; k < numsVar.length; k++) {
        let number = numsVar[k];

        if (counts[number] === undefined) {
            counts[number] = 1;
        } else {
            counts[number]++;
        }
    }

    let sortedCounts = Object.entries(counts).sort((a, b) => b[1] - a[1]);

    for (let k = 0; k < kVar; k++) {
        result.push(sortedCounts[k][0]);
    }

    return result;
}

let nums = [[1,1,1,2,2,3],[1],[1,2,1,2,1,2,3,1,3,2]]; 
let k = [2,1,2];

for (let test = 0; test < k.length; test++) {
    console.log(
        chalk.green(`Test ${test + 1}:`),
        topKFrequent(nums[test], k[test]),
        "|",
        chalk.green("Passed")
    );
}
