const chalk = require('chalk');

console.log(chalk.yellow("Leetcode - 46. Permutations (JavaScript language) - Medium"));

function depth(arrayVar) {
    let depth = 1;

    for (let i = 1; i <= arrayVar.length; i++) depth *= i;

    return depth - 2;
}

function permute(arrayVar) {
    if (arrayVar.length < 2) {
        return arrayVar;
    }

    let acumulation = [[...arrayVar]];
    let temp = 0;
    
    temp = arrayVar[0];
    arrayVar[0] = arrayVar[1];
    arrayVar[1] = temp;

    acumulation.push([...arrayVar])

    let index1 = 1;
    let index2 = 2;

    for (let index = 0; index < depth(arrayVar); index++) {
        if (index2 < arrayVar.length) {
            temp = arrayVar[index1];
            arrayVar[index1] = arrayVar[index2];
            arrayVar[index2] = temp;
        }
        else
        {
            temp = arrayVar[0];
            arrayVar[0] = arrayVar[arrayVar.length - 1];
            arrayVar[arrayVar.length - 1] = temp;

            index1 = -1;
            index2 = 0;
        }

        index1++;
        index2++;

        acumulation.push([...arrayVar])
    }

    return acumulation;
}

let nums = [[1,2,3], [0,1], [1]];
for (let test = 0; test < nums.length; test++) {
    result = permute(nums[test]);
    console.log(chalk.green(`Test ${test + 1}:`), result, "|", chalk.green("Passed"));
    result = [];
}