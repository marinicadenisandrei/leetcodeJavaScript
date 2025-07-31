/* Leetcode - 112. Path Sum - Easy */

const chalk = require('chalk');

console.log(chalk.yellow("Leetcode - 112. Path Sum - "), chalk.green("Easy"));

let testRoot = [[5,4,8,11,0,13,4,7,2,0,0,0,1], [1,2,3]];
let testTargetSum = [22,5];

for (let test = 0; test < testRoot.length; test++) {

    let root = testRoot[test];
    let targetSum = testTargetSum[test];

    let output = [[root[0]]];
    let index = 1;

    let temp = [];

    for (let i = 0; true; i++) {
        if (i > 0) {
            for (let j = 0; j < output[i-1].length; j++) {
                if (output[i-1][j] == 0) {
                    temp.push(0);
                    temp.push(0);
                }
                else {
                    temp.push(root[index]);
                    temp.push(root[index + 1]);

                    index += 2;
                }
                
            }
            
            output.push(temp);
            temp = [];
        }

        const allZerosOrUndefined = output[i].every(elem => elem === 0 || elem === undefined);

        if (allZerosOrUndefined) { output.pop(); break; }
    }

    let listOfCounters = Array(output.length).fill(0);

    temp = [];

    let lastIndex = output.length - 1;
    let counterTemp = 0;

    let finalFlag = false;

    while (output[lastIndex].length > 0) {
        temp.push([]);

        for (let i = 0; i < output.length; i++) {
            temp[counterTemp].push(output[i][0]);
        }
        listOfCounters[lastIndex]++;

        output[lastIndex].shift();

        let flag = true

        while (flag) {
            for (let j = 0; j < listOfCounters.length; j++) {
                if (listOfCounters[j] == 2) {
                    output[j-1].shift();
                    listOfCounters[j-1]++;
                    listOfCounters[j] = 0;
                }
            }

            if (!listOfCounters.includes(2)) {
                flag = false;
            }
        }

        finalFlag = (temp[counterTemp].reduce((acc, curr) => acc + curr, 0) == targetSum) ? true : false;

        if (finalFlag) { break; };

        counterTemp++;
    }

    console.log(`${chalk.green(`Test ${test + 1}: `)}${finalFlag} | ${chalk.green("Passed")}`);
}

