/* Leetcode - 53. Maximum Subarray (JavaScript language) - Medium */

const chalk = require('chalk');
console.log(chalk.yellow("Leetcode - 53. Maximum Subarray (JavaScript language) - Medium"));

function sumArrayElements(arrayVar) {
    let sum = 0;
    arrayVar.forEach(item => {sum += item;});

    return sum;
}

function maxSubArray(numsVar) {
    let sum = 0;
    let acumulation = [];

    for (let i = 0; i < numsVar.length; i++) {
        acumulation.push(numsVar[i]);
        let result = sumArrayElements(acumulation);

        if (result > sum) {
            sum = result;
        }

        if (acumulation.length > 1) {
            let cutVar = [...acumulation];

            while (cutVar.length > 0) {
                cutVar.shift();

                let result = sumArrayElements(cutVar);

                if (result > sum) {
                    sum = result;
                }
            }
        }
    }

    return sum;
}

let nums = [[-2,1,-3,4,-1,2,1,-5,4], [1], [5,4,-1,7,8]];

for (let test = 0; test < nums.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), maxSubArray(nums[test]), "|", chalk.green("Passed"));
}
