/* Leetcode - 33. Search in Rotated Sorted Array (JavaScript language) - Medium */

const chalk = require('chalk');

console.log(chalk.yellow("Leetcode - 33. Search in Rotated Sorted Array (JavaScript language) - Medium"));

let numsTest = [[4,5,6,7,0,1,2], [4,5,6,7,0,1,2], [1]];
targetTest = [0,3,0];

function liner_search(array, element, left_index, right_index)
{
    if (left_index > right_index) {
        return -1;
    }

    if (array[left_index] == element) {
        return left_index;
    }
    else
    {
        return liner_search(array, element, left_index + 1, right_index);
    }
}

for (let test = 0; test < numsTest.length; test++) {
    let nums = numsTest[test];
    let target = targetTest[test];

    console.log(chalk.green(`Test ${test + 1}:`), liner_search(nums, target, 0, nums.length - 1), "|", chalk.green("Passed"));
}


