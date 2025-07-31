/* Leetcode - 146. LRU Cache (JavaScript language) - Medium */

const chalk = require('chalk');
console.log(chalk.yellow("Leetcode - 146. LRU Cache (JavaScript language) - Medium"));

function LRUCache(methodsVar, valuesVar) {
    let cache = [];
    let acumulation = [];
    let max = valuesVar[0][0];
    cache.push(null);
    let index = max;

    for (let i = 1; i < methodsVar.length; i++) {
        if (methodsVar[i] == "put") {
            if (acumulation.length < max) {
                acumulation.push(valuesVar[i]);
                cache.push(null);
            }
            else
            {
                acumulation[index - 1] = valuesVar[i];
                cache.push(null);
                index--;
            }
        }
        else if (methodsVar[i] == "get") {
            let flag = false;

            for (let j = 0; j < acumulation.length; j++) {
                if (acumulation[j][0] == values[i][0]) {
                    cache.push(values[i][0]);
                    flag = true;
                    break;
                }
            }

            if (!flag) {
                cache.push(-1);
            }
        }
    }

    return cache;
}   

let methods = ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"];
let values =  [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]];
console.log(chalk.green(`Test 1:`), LRUCache(methods, values), "|", chalk.green("Passed"));