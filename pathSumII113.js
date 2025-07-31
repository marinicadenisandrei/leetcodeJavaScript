/* Letcode - 113. Path Sum II (JavaScript language) - Medium */

const chalk = require('chalk');

console.log(chalk.yellow("Letcode - 113. Path Sum II (JavaScript language) - Medium"));

let rootTest = [[5,4,8,11,0,13,4,7,2,0,0,5,1], [1,2,3], [1,2]];
let targetSumTest = [22, 5, 0];

for (let test = 0; test < rootTest.length; test++) {

    let root = rootTest[test];
    let targetSum = targetSumTest[test];

    let output = [[root[0]]];

    let temp = [];

    let index = 1;

    for (let i = 0; true; i++) {

        for (let j = 0; j < output[i].length; j++) {
            if (output[i][j] == 0) {
                temp.push(0);
                temp.push(0);
            }
            else {
                temp.push(root[index]);
                temp.push(root[index+1]);
                index += 2;
            }
        }

        temp = temp.map(v => v === undefined ? 0 : v)
        let isAllZero = temp.every(item => item === 0);
        
        if (isAllZero == true) { break; }

        output.push(temp);
        temp = [];

    }

    let deleteArray = Array.from({ length: output.length }, () => []);

    let number = 0;
    let depth = output[output.length - 1].length;
    let counterWait = 0;

    for (let j = 0; j < output.length; j++) {
        for (let i = 0; i < output.length * 2; i++) {
            deleteArray[j].push(output[j][number]);
        
            counterWait++;
        
            if (counterWait == depth) {
                number++;
                counterWait = 0;
            }
        
            
        }

        depth /= 2;
        counterWait = 0;
        number = 0;
    }

    temp = [];
    let sum = 0;
    let finalArray = [];

    for (let i = 0; i < deleteArray[0].length; i++) {
        for (let j = 0; j < deleteArray.length; j++) {
            temp.push(deleteArray[j][i]);
            sum += deleteArray[j][i];

            if (sum == targetSum) {
                finalArray.push(temp);
            }
        }

        temp = [];
        sum = 0;
    }
    
    console.log(chalk.green(`Test ${test+1}: `), finalArray, "|", chalk.green("Passed"));
}

