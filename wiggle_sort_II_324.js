/* Leetcode - 324. Wiggle Sort II (JavaScript language) - Medium */
const { default: chalk } = require("chalk");

console.log(chalk.yellow("Leetcode - 324. Wiggle Sort II (JavaScript language) - Medium"));

function wiggleSort(numsVar) {
  let flag = true;

  while (flag) {
    flag = false;

    for (let i = 0; i < numsVar.length - 2; i += 2) {
      if (!(numsVar[i] < numsVar[i + 1] && numsVar[i + 1] > numsVar[i + 2])) {
        let temp = [numsVar[i], numsVar[i + 1], numsVar[i + 2]];
        temp.sort((a, b) => a - b);

        numsVar[i]     = temp[0];
        numsVar[i + 1] = temp[2]; 
        numsVar[i + 2] = temp[1];

        flag = true;
      }
    }
  }

  return numsVar
}

let nums = [[1,5,1,1,6,4], [1,3,2,2,3,1]];

for (let test = 0; test < nums.length; test++) {
    console.log(
        chalk.green(`Test ${test + 1}:`),
        wiggleSort(nums[test]),
        "|",
        chalk.green("Passed")
    );
}
