/* Leetcode - 190. Reverse Bits (JavaScript language) - Easy */

const { default: chalk } = require("chalk");

console.log(chalk.yellow("Leetcode - 190. Reverse Bits (JavaScript language) -"), chalk.green("Easy"));


function reverseBits(n) {
    let result = 0;

    for (let i = 0; i < 32; i++) {
        result <<= 1; 
        result |= n & 1; 
        n >>= 1; 
    }

    return result >>> 0; 
}

let n = [0b00000010100101000001111010011100,0b11111111111111111111111111111101];

for (let test = 0; test < n.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), reverseBits(n[test]), "|", chalk.green("Passed"));     
}

