/* Leetcode - 31. Next Permutation (JavaScript language) - Medium */

const chalk = require('chalk');
console.log(chalk.yellow("Leetcode - 31. Next Permutation (JavaScript language) - Medium"));

function depth(len_permutation_array)
{
    let number = 1;

    for (let i = 1; i <= len_permutation_array; i++) {
        number *= i;
    }

    return number;
}

let numsTest = [[1,2,3], [3,2,1], [1,1,5]];

for (let test = 0; test < numsTest.length; test++) {
    let nums = numsTest[test];

    let copy_nums = [...nums];

    let index_start = 0;
    let index_end = 1;

    let output = [];
    output.push([...nums]);

    let temp = 0;

    for (let i = 0; i < depth(nums.length) - 1; i++) {

        if (index_end < nums.length) {
            temp = nums[index_start];
            nums[index_start] = nums[index_end];
            nums[index_end] = temp;
        }
        else if (index_end == nums.length) {
            temp = nums[0];
            nums[0] = nums[index_end - 1];
            nums[index_end - 1] = temp;

            index_start = -1;
            index_end = 0;
        }

        output.push([...nums]);

        index_start++;
        index_end++;
    }

    output.sort();


    let result = [];
    let index = output.findIndex(item => JSON.stringify(item) === JSON.stringify(copy_nums));

    if (index + 1 == output.length) {
        result = output[0];
    }
    else
    {
        for (let i = 1; i < output.length - index; i++) {
            if (JSON.stringify(output[index]) !== JSON.stringify(output[index + i])) {
                result = output[index + i];    
                break;
            }
        }
    }

    console.log(chalk.green(`Test ${test + 1}:`), result, "|", chalk.green("Passed"));
}




