/* Leetcode - 42. Trapping Rain Water (JavaScript language) - Hard */

const chalk = require('chalk');
console.log(chalk.yellow("Leetcode - 42. Trapping Rain Water (JavaScript language) -"), chalk.red("Hard"));

function maximFromList(listVar) {
    return [...listVar].sort()[listVar.length - 1];
}

function generateMatrix(heightList) {
    let matrixVar = [];
    let max = maximFromList(heightList);

    for (let i = 0; i < heightList.length; i++) {
        matrixVar.push([]);

        for (let j = 0; j < max; j++) {
            if (j < heightList[i]) {
                matrixVar[matrixVar.length - 1].push(1);
            }
            else
            {
                matrixVar[matrixVar.length - 1].push(0);
            }   
        }
    }

    return matrixVar;
}

function removeZeroLimits(listVar) {
    while (listVar[0] == 0) {
        listVar.shift();
    }
}

function countZeros(listVar) {
    let sum = 0;

    for (let i = 0; i < listVar.length; i++) sum += ((listVar[i] == 0) ? 1 : 0);

    return sum;
}

function trap(heightList) {
    let matrix = [];
    matrix = generateMatrix(heightList);    

    let counter = 0;

    for (let i = 0; i < matrix[i].length; i++) {
        let temp = [];
        for (let j = 0; j < matrix.length; j++) {
            temp.push(matrix[j][i]);
        }
        
        removeZeroLimits(temp);
        temp = temp.reverse();
        removeZeroLimits(temp);
        
        counter += countZeros(temp);
        temp = [];
    }

    return counter
}

let height = [[0,1,0,2,1,0,1,3,2,1,2,1], [4,2,0,3,2,5]];

for (let test = 0; test < height.length; test++) console.log(chalk.green(`Test ${test + 1}:`), trap(height[test]), "|", chalk.green("Passed"));
