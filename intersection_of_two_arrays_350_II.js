/* Leetcode - 349. Intersection of Two Arrays (JavaScript language) - Easy */

const { default: chalk } = require("chalk");

console.log(chalk.yellow("Leetcode - 350. Intersection of Two Arrays II (JavaScript language) -"), chalk.green("Easy"));

function intersect(nums1Var, nums2Var) {
    let result = [];
    let occurrences = new Map();

    for (let num of nums1Var) {
        occurrences.set(num, (occurrences.get(num) || 0) + 1);
    }

    for (let num of nums2Var) {
        if (occurrences.has(num) && occurrences.get(num) > 0) {
            result.push(num);
            occurrences.set(num, occurrences.get(num) - 1);
        }
    }

    return result;
}

let nums1 = [[1,2,2,1],[4,9,5]];
let nums2 = [[2,2],[9,4,9,8,4]];

for (let test = 0; test < nums1.length; test++) {
    console.log(
        chalk.green(`Test ${test + 1}:`),
        intersect(nums1[test], nums2[test]),
        "|",
        chalk.green("Passed")
    );
}
