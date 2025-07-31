/* Leetcode - 4. Median of Two Sorted Arrays (JavaScript language) - Hard */

const chalk = require('chalk');

console.log(chalk.yellow("Leetcode - 4. Median of Two Sorted Arrays (JavaScript language) -"), chalk.red("Hard"));

let nums1Test = [[1,3], [1,2]];
let nums2Test = [[2], [3,4]];

for (let test = 0; test < nums1Test.length; test++) {
    let nums1 = nums1Test[test];
    let nums2 = nums2Test[test];

    nums1.push(...nums2);
    nums1 = nums1.sort();

    let result = 0;

    if (nums1.length % 2 == 1) {
        result = nums1[Math.ceil(nums1.length/2)-1];
    }
    elses
    {
        result = (nums1[Math.ceil(nums1.length/2)-1] + nums1[Math.ceil(nums1.length/2)]) / 2;
    }

    console.log(chalk.green(`Test ${test + 1}:`), `${result} |`, chalk.green("Passed"));   
}


