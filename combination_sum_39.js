/* Leetcode - 39. Combination Sum (JavaScript language) - Medium */

const chalk = require('chalk');

console.log(chalk.yellow("Leetcode - 39. Combination Sum (JavaScript language) - Medium"));

function sumOfArrayElements(arrayVar)
{
    let sum = 0;
    for (let i = 0; i < arrayVar.length; i++) {
        sum += arrayVar[i];
    }

    return sum;
}

let candidatesTest = [[2,3,6,7], [2,3,5], [2]]; 
let targetTest = [7, 8, 1];

for (let test = 0; test < candidatesTest.length; test++) {
    let candidates = candidatesTest[test];
    let target = targetTest[test];

    let output = [candidates];
    let final = [];

    for (let i = 0; i < candidates.length; i++) {
        if (candidates[i] == target) {
            final.push(candidates[i]);
        }
    }

    output.push([]);

    for (let i = 0; i < candidates.length; i++) {
        for (let j = 0; j < output[output.length - 2].length; j++) {
            output[output.length - 1].push([candidates[i], output[output.length - 2][j]])
        }
    }

    for (let i = 0; i < output[output.length - 1].length; i++) {
        if (sumOfArrayElements(output[output.length - 1][i]) == target) {
            let index = final.findIndex(item => JSON.stringify(item) === JSON.stringify(output[output.length - 1][i].sort()));

            if (index == -1) {
                final.push([...output[output.length - 1][i]].sort());
            }
        }
    }

    output.shift();

    let flag = true;

    while (flag) {

        flag = false;
        output.push([]);

        for (let i = 0; i < candidates.length; i++) {
            for (let j = 0; j < output[output.length - 2].length; j++) {
                let temp = [...output[output.length - 2][j]];
                temp.push(candidates[i]);

                output[output.length - 1].push(temp);
                
                if (flag == false && sumOfArrayElements(temp) <= target) {
                    flag = true;
                }

                if (sumOfArrayElements(temp) == target) {

                    let index = final.findIndex(item => JSON.stringify(item) === JSON.stringify(temp.sort()));

                    if (index == -1) {
                        final.push([...temp].sort());
                    }
                    
                }
            
                temp = [];
            }
        }
        output.shift();
    }

    console.log(chalk.green(`Test ${test + 1}:`), final, "|", chalk.green("Passed"));
}











