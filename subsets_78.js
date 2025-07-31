/* Leetcode - 78. Subsets (JavaScript language) - Medium */

const chalk = require('chalk');
console.log(chalk.yellow("Leetcode - 78. Subsets (JavaScript language) - Medium"));

function subsets(numsVar) {
    let output = [[]];

    for (let i = 0; i < numsVar.length; i++) {
        output.push([numsVar[i]]);
    }

    if (numsVar.length == 1) {
        return output;
    }

    for (let i = 0; i < numsVar.length; i++) {
        let temp = [];

        for (let j = i + 1; j < numsVar.length; j++) {
            temp.push(numsVar[i]);
            temp.push(numsVar[j]);
            
            output.push([...temp]);
            temp = [];
        }
    }

    output.push(numsVar);
    
    return output;
}

let nums = [[1,2,3], [0]];

for (let test = 0; test < nums.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), subsets(nums[test]), "|", chalk.green("Passed\n"));    
}
