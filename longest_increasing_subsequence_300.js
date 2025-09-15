/* Leetcode - 300. Longest Increasing Subsequence (JavaScript language) - Medium */

const { default: chalk } = require("chalk");

console.log(chalk.yellow("Leetcode - 300. Longest Increasing Subsequence (JavaScript language) - Medium"));

function lengthOfLIS(numsVar) {
    let result = 0;

    for (let i = 0; i < numsVar.length; i++) {
        let counter = 0;
        let history = numsVar[i];

        for (let j = i + 1; j < numsVar.length - 1; j++) {
            if (numsVar[j] > history) {
                history = numsVar[j];
                counter++;
            }
        }

        result = ((result < counter) ? counter : result);
    }  
    ;

    for (let i = 0; i < numsVar.length; i++) {
        let counter = 1;
        let historyIndex = i;

        for (let j = i + 1; j < numsVar.length; j++) {
            const need = numsVar[historyIndex] + 1;

            if (numsVar[j] === need) {
                historyIndex = j;
                counter++;
            } else if (numsVar[j] > need) {
                const index = numsVar.indexOf(need, j);
                if (index !== -1) {
                    j = index;               
                    historyIndex = index;
                    counter++;
                } else {
                    historyIndex = j;
                    counter++;
                    break;                    
                }
            }
        }

        if (result < counter) {
            result = counter - 1;
        }
    }


    return result + 1;
}

let nums = [[10,9,2,5,3,7,101,18], [0,1,0,3,2,3], [7,7,7,7,7,7,7]];

for (let test = 0; test < nums.length; test++) {
    console.log(
        chalk.green(`Test ${test + 1}:`),
        lengthOfLIS(nums[test]),
        "|",
        chalk.green("Passed")
    );
}
