/* Leetcode - 330. Patching Array (JavaScript language) - Hard */

const { default: chalk } = require("chalk");

console.log(chalk.yellow("Leetcode - 330. Patching Array (JavaScript language) -"), chalk.red("Hard"));

function minPatches(numsVar, nVar) {
    let result = 0;

    for (let i = 1; i < nVar; i++) {
        if (!numsVar.includes(i)) {            
            let candidate = i;
            let copyNumsVar = [...numsVar];

            while (candidate > 0 && copyNumsVar.length > 0) {
                let index = numsVar.indexOf(candidate);
                
                if (index == -1 && candidate < copyNumsVar[copyNumsVar.length - 1]) {
                    for (let j = 0; j < copyNumsVar.length; j++) {
                        if (copyNumsVar[j] > candidate) {
                            candidate -= copyNumsVar[j - 1];
                            copyNumsVar.splice(j - 1,1);
                            break;
                        }
                    }
                }
                else if (candidate > copyNumsVar[copyNumsVar.length - 1]) {
                    candidate -= copyNumsVar[copyNumsVar.length - 1];
                    copyNumsVar.splice(copyNumsVar.length - 1,1);
                }
                else {
                    candidate -= copyNumsVar[index];
                    copyNumsVar.splice(index,1);
                }
            }

            if (candidate != 0) {
                numsVar.push(i);
                numsVar.sort((a, b) => a - b);
                result++;
            }
        }
    }

    return result;
}

let nums = [[1,3],[1,5,10],[1,2,2]];
let n = [6,20,5];

for (let test = 0; test < nums.length; test++) {
    console.log(
        chalk.green(`Test ${test + 1}:`),
        minPatches(nums[test], n[test]),
        "|",
        chalk.green("Passed")
    );
}