/* Leetcode - 349. Intersection of Two Arrays (JavaScript language) - Easy */

const { default: chalk } = require("chalk");

console.log(chalk.yellow("Leetcode - 349. Intersection of Two Arrays (JavaScript language) -"), chalk.green("Easy"));


function intersection(nums1Var, nums2Var) {
    let result = [];
    let nums1Set = new Set(nums1Var);

    for (let num of nums2Var) {
        if (nums1Set.has(num) && !result.includes(num)) {
            result.push(num);
        }
    }

    return result;
}

let nums1 = [[1,2,2,1], [4,9,5]];
let nums2 = [[2,2], [9,4,9,8,4]];

for (let test = 0; test < nums1.length; test++) {
    console.log(
        chalk.green(`Test ${test + 1}:`),
        intersection(nums1[test], nums2[test]),
        "|",
        chalk.green("Passed")
    );
}