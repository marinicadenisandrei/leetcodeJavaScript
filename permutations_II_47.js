/* Leetcode - 47. Permutations II (JavaScript language) - Medium */

const chalk = require('chalk');
console.log(chalk.yellow("Leetcode - 47. Permutations II (JavaScript language) - Medium"));

function arrayExist(smallArray, bigArray) {
    let flag = true;

    for (let i = 0; i < bigArray.length; i++) {
        flag = true;

        for (let j = 0; j < smallArray.length; j++) {
            if (bigArray[i][j] != smallArray[j]) {
                flag = false;
                break;
            }
        }

        if (flag == true) {
            return true;
        }
    }

    return false;
}

function depthPermute(numsVar) {
    let depth = 1;

    for (let i = 1; i <= numsVar.length; i++) depth *= i;

    return depth;
}

function permuteUnique(numsVar) {
    let output = [];

    let index1 = 0;
    let index2 = 1;

    for (let i = 0; i < depthPermute(numsVar); i++) {
        if (index2 < numsVar.length) {
            let temp = numsVar[index1];
            numsVar[index1] = numsVar[index2];
            numsVar[index2] = temp;
        }
        else
        {
            let temp = numsVar[0];
            numsVar[0] = numsVar[numsVar.length - 1];
            numsVar[numsVar.length - 1] = temp;

            index1 = -1;
            index2 = 0;
        }

        index1++;
        index2++;

        if (!arrayExist(numsVar, output)) {
            output.push([...numsVar]);
        }
    }

    return output;
}

let nums = [[1,1,2],[1,2,3]];

for (let test = 0; test < nums.length; test++) {
    let result = permuteUnique(nums[test]);
    console.log(chalk.green(`Test ${test + 1}:`), result, "|", chalk.green("Passed"));
}