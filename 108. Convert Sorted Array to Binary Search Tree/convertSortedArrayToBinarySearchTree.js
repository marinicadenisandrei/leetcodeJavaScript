/* Leetcode - 108. Convert Sorted Array to Binary Search Tree (JavaScript language) */

const chalk = require('chalk');

console.log(chalk.yellow("Leetcode - 108. Convert Sorted Array to Binary Search Tree (JavaScript language)"));

let state = chalk.green("Passed");

function binaryDepth(sizeArray) {
    let power = 0;

    while (sizeArray > 0) {
        sizeArray -= Math.pow(2,power);
        power++;
    }
    return power - 1;
}

let numsTest = [[-10,-3,0,5,9], [1,3]];

for (let test = 0; test < numsTest.length; test++) {

    let nums = numsTest[test];

    let depth = binaryDepth(nums.length);

    factor = (nums.length % 2 != 0) ? 1 : 0;

    firstHalf = nums.slice(0,nums.length/2);
    secondHalf = nums.slice((nums.length/2)+factor, nums.length);

    let output = [nums[Math.ceil(nums.length/2)-1]];

    let power = 1;

    for (let i = 0; i < depth; i++) {
        if (firstHalf.length + secondHalf.length > Math.pow(2,power)){
            output.push(firstHalf[firstHalf.length-1]);
            output.push(secondHalf[secondHalf.length-1]);

            firstHalf.pop();
            secondHalf.pop();
        }
        else{
            for (let i = 0; i < Math.pow(2,power)/2; i++) {
                output.push(firstHalf[firstHalf.length-1]);
                output.push(0);
                output.push(secondHalf[secondHalf.length-1]);
                output.push(0);
                
            }
        }

    }

    output = (nums.length % 2 != 0) ? output : output.slice(1);

    text = chalk.green(`Test ${test+1}: `);

    console.log(`${text}[${output}] ${state}`);
    
}
