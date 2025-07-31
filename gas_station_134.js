/* Leetcode - 134. Gas Station (JavaScript language) - Medium */

const chalk = require('chalk');
console.log(chalk.yellow("Leetcode - 134. Gas Station (JavaScript language) - Medium"));

function canCompleteCircuit(gasVar, costVar) {
    for (let j = 0; j < gasVar.length; j++) {
        let index = j;
        let newGas = [];
        let newCost = [];

        for (let i = index; i < gasVar.length; i++) {
            newGas.push(gasVar[i]);
            newCost.push(costVar[i]);
        }

        for (let i = 0; i <= index; i++) {
            newGas.push(gasVar[i]);
            newCost.push(costVar[i]);
        }
        
        if (newGas[0] - newCost[0] < 0) {
            continue;
        }

        let startGas = (newGas[0] - newCost[0]) + newGas[1];

        let flag = true;

        for (let i = 1; i < newGas.length - 1; i++) {
            if (startGas - newCost[i] < 0)
            {
                flag = false;
            }

            startGas = (startGas - newCost[i]) + newGas[i + 1];
        }

        if (flag) {
            return index;
        }
    }

    return -1;
}

let gas = [[1,2,3,4,5],[2,3,4]]; 
let cost = [[3,4,5,1,2],[3,4,3]];

for (let test = 0; test < gas.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), canCompleteCircuit(gas[test], cost[test]), "|", chalk.green("Passed"));    
}
