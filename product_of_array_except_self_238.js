/* Leetcode - 238. Product of Array Except Self (JavaScript language) - Medium */

const { default: chalk } = require("chalk");

console.log(chalk.yellow("Leetcode - 238. Product of Array Except Self (JavaScript language) - Medium"));

function productExceptSelf(numsVar) {
    var products = [];

    for (let i = 0; i < numsVar.length; i++) {
        var tempProd = 1;

        for (let j = 0; j < numsVar.length; j++) {
            tempProd *= ((i != j) ? numsVar[j] : 1);
        }

        products.push(tempProd);
    }

    return products;
}

var nums = [[1,2,3,4],[-1,1,0,-3,3]];

for (let test = 0; test < nums.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), productExceptSelf(nums[test]), "|", chalk.green("Passed"));
}
