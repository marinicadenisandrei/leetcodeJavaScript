/* Leetcode - 129. Sum Root to Leaf Numbers (JavaScript language) - Medium */

const chalk = require('chalk');
console.log(chalk.yellow("Leetcode - 129. Sum Root to Leaf Numbers (JavaScript language) - Medium"));

function sumNumbers(rootVar) {
    let acumulation = [];
    let depth = 2;
    let index = 0;
    let counter = 1;
    let c = 0;
    let result = 0;

    while (depth < rootVar.length) {
        counter++;
        depth *= 2;
    }

    let step = depth / 2;

    for (let i = 0; i < counter; i++) {
        let temp = [];
        for (let j = 0; j < (depth / 2); j++) {
            if (c == step) {
                index++;
                c = 0;
            }
            
            temp.push(rootVar[index]);
            c++;
        }   

        step /= 2;
        c = 0;
        index++;
        acumulation.push(temp);
    }
    
    let flag = false;

    for (let i = 0; i < acumulation[0].length; i++) {
        let number = "";

        for (let j = 0; j < acumulation.length; j++) {
            if (acumulation[j][i] != undefined) {
                number += String(acumulation[j][i]);
            }
            else
            {
                flag = true;
                break;
            }
        }

        result += parseInt(number);

        if (flag) {
            break;
        }
    }

    return result;
}

let root = [[1,2,3],[4,9,0,5,1]];

for (let test = 0; test < root.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), sumNumbers(root[test]), "|", chalk.green("Passed"));    
}
