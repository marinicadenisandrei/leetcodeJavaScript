/* Leetcode - 283. Move Zeroes (JavaScript language) - Easy */

const { default: chalk } = require("chalk");

console.log(chalk.yellow("Leetcode - 283. Move Zeroes (JavaScript language) -"), chalk.green("Easy"));


function moveZeroes(numsVar) {
    let insertPos = 0;

    for (let i = 0; i < numsVar.length; i++) {
        if (numsVar[i] !== 0) {
            numsVar[insertPos] = numsVar[i];
            insertPos++;
        }
    }

    while (insertPos < numsVar.length) {
        numsVar[insertPos] = 0;
        insertPos++;
    }

    return numsVar;
}

let nums = [[0,1,0,3,12],[0]];

for (let test = 0; test < nums.length; test++) {
    console.log(
        chalk.green(`Test ${test + 1}:`),
        moveZeroes(nums[test]),
        "|",
        chalk.green("Passed")
    );
}
