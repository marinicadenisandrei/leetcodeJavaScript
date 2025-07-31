/* Leetcode - 100. Same Tree (JavaScript language) */

const chalk = require('chalk');

console.log(chalk.yellow("Leetcode - 100. Same Tree (JavaScript language)"));

state = chalk.green(`Passed`);

let  p = [[1,2,3], [1,2], [1,2,1]];
let q = [[1,2,3], [1,2,1], [1,1,2]];

let flag = true;

for (let test = 0; test < p.length; test++) {
    if (p[test].length == q[test].length) {
        for (let i = 0; i < p[test].length; i++) {
            if (p[test][i] != q[test][i]) {
                flag = false;
                break;
            }
        }
    }
    else {
        flag = false;
    }
    
    text = chalk.green(`Test ${test+1}: `);
    console.log(`${text} ${flag} | ${state}`);

    flag = true;
}


