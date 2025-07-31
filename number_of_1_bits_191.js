/* Leetcode - 191. Number of 1 Bits (JavaScript language) - Easy */

const { default: chalk } = require("chalk");

console.log(chalk.yellow("Leetcode - 191. Number of 1 Bits (JavaScript language) -"), chalk.green("Easy"));


function hammingWeight(nVar) {
    let result = 0;
    let binary = nVar.toString(2);

    for (let i = 0; i < binary.length; i++) {
        if (binary[i] == '1') {
            result++;
        }
    }

    return result;
}

let n = [11,128,2147483645]

for (let test = 0; test < n.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), hammingWeight(n[test]), "|", chalk.green("Passed"));    
}




