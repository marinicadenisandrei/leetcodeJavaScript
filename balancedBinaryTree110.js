/* Leetcode - 110. Balanced Binary Tree (JavaScript language) */

const chalk = require('chalk');

console.log(chalk.yellow("Leetcode - 110. Balanced Binary Tree (JavaScript language)"))

let state = chalk.green("Passed")

let rootTests = [[3,9,20,0,0,15,7], [1,2,2,3,3,0,0,4,4]];

function binaryDepth(sizeArray) {
    let powerBinary = 0

    while (sizeArray > 0) {
        sizeArray -= Math.pow(2,powerBinary);
        powerBinary++;
    }

    return powerBinary;
}

for (let test = 0; test < rootTests.length; test++) {

    let root = rootTests[test];

    let power = 0;
    let depth = 0;
    let start = 0;

    let temp = [];

    let output = [];
    let counterZero = 0;

    let binaryDepthVariable = binaryDepth(root.length);

    for (let i = 0; i < 4; i++) {

        output.push([]);

        depth += Math.pow(2,power);

        temp = root.slice(start,depth);

        if (i == 0) {
            output[i] = temp;
        }
        else
        {
            for (let j = 0; j < output[i-1].length; j++) {
                if (output[i-1][j] != 0) {
                    output[i].push(temp[0]);
                    output[i].push(temp[1]);
                    temp.splice(0,2);
                }
                else
                {
                    output[i].push(0);
                    output[i].push(0);
                    counterZero += 2;
                }
            }
        }

        depth -= counterZero;
        counterZero = 0;

        history = temp;

        if (i == binaryDepthVariable - 1) {
            let hasAllElems = root.every(elem => output.flat().includes(elem));
            binaryDepthVariable += (hasAllElems == false ? 1 : 0);
        }

        start = depth;

        power++;
    }

    let left = [];
    let right = [];

    let isAllZeorLeft;
    let isAllZeorRight

    let counterFinal = 0;

    for (let i = 0; i < output.length; i++) {
        for (let j = 0; j < output[i].length; j++) {
            output[i][j] = (output[i][j] == undefined) ? 0 : output[i][j]
        }
    }

    for (let i = 1; i < output.length; i++) {
        left = output[i].splice(0,output[i].length/2);
        right = output[i].splice(output[i].length/2, output[i].length);
        
        isAllZeorLeft = left. every(item => item === 0);
        isAllZeorRight = right. every(item => item === 0);

        if (isAllZeorLeft != isAllZeorRight) {
            counterFinal++;
        }
    }

    let finalStatusFlag = (counterFinal > 1) ? false : true;

    text = chalk.green(`Test ${test+1}: `)

    console.log(`${text}${finalStatusFlag} | ${state}`);
}





