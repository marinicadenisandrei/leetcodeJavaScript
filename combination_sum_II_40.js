/* Leetcode - 40. Combination Sum II (JavaScript language) - Medium */

const chalk = require('chalk');

console.log(chalk.yellow("Leetcode - 40. Combination Sum II (JavaScript language) - Medium"));

function populateFirst(smallArray, outputArray)
{
    outputArray.push([]);

    for (let i = 0; i < smallArray.length; i++) {
        outputArray[0].push([smallArray[i]]);
    }
}

function elementOccurenceInArray(element, arrayVar)
{
    let sum = 0;

    for (let i = 0; i < arrayVar.length; i++) {
        if (arrayVar[i] == element) {
            sum++;   
        }
    }

    return sum;
}

function sumOfElementsInArray(arrayVar)
{
    let sum = 0;

    for (let i = 0; i < arrayVar.length; i++) {
        sum += arrayVar[i];
    }

    return sum;
}

let candidatesTest = [[10,1,2,7,6,1,5], [2,5,2,1,2]];
let targetTest = [8,5];

for (let test = 0; test < candidatesTest.length; test++) {
    let candidates = candidatesTest[test];
    let target = targetTest[test];

    let output = [];
    let final = []

    populateFirst(candidates, output);

    let flag = true

    while (flag) {
        flag = false;
        output.push([]);

        for (let i = 0; i < candidates.length; i++) {
            for (let j = 0; j < output[output.length - 2].length; j++) {
                let canditates_sum = elementOccurenceInArray(candidates[i], candidates);
                let output_sum = elementOccurenceInArray(candidates[i], output[output.length - 2][j]);

                if(canditates_sum > output_sum) {
                    let temp = [...output[output.length - 2][j]];
                    let switchFlag = sumOfElementsInArray(temp);

                    let index = final.findIndex(item => JSON.stringify(item) === JSON.stringify(temp.sort()));

                    if (switchFlag == target && index == -1) {
                        final.push([...temp].sort());
                    }
                    
                    if (flag == false && switchFlag <= target) {
                        flag = true;
                    }

                    temp.push(candidates[i]);

                    output[output.length - 1].push([...temp]);

                    temp = [];
                }    
            }
        }

        output.shift();
    }

    console.log(chalk.green(`Test ${test + 1}:`), final, "|", chalk.green("Passed"));
}


