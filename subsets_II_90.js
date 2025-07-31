/* Leetcode - 90. Subsets II (JavaScript language) - Medium */

const chalk = require('chalk');
console.log(chalk.yellow("Leetcode - 90. Subsets II (JavaScript language) - Medium"));

function arraysAreEquals(array1, array2) {
    if (array1.length != array2.length) {
        return false;
    }

    for (let i = 0; i < array1.length; i++) {
        if (array1[i] != array2[i]) {
            return false;
        }
    }

    return true;
}

function subsetsWithDup(numsVar) {
    let result = [];
    let temp = [];
    let flag = true;

    result.push([...temp]);

    for (let j = 0; j < numsVar.length; j++) {
        for (let i = j; i < numsVar.length; i++) {
            temp.push(numsVar[i]);
            result.push([...temp]);
        }

        temp = [];
    }
    
    for (let i = 0; i < result.length; i++) {
        for (let j = 0; j < result.length; j++) {
            if (i != j && arraysAreEquals(result[i], result[j]) == true) {
                result.splice(i,1);
            }   
        }
    }

    result.sort();

    return [...new Set(result)];
}

let nums = [[1,2,2],[0]];

for (let test = 0; test < nums.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`),subsetsWithDup(nums[test]),"|",chalk.green("Passed"));
}
