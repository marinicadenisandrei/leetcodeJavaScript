/* Leetcode - 101. Symmetric Tree (JavaScript language) */ 

const chalk = require('chalk');

console.log(chalk.yellow("Leetcode - 101. Symmetric Tree (JavaScript language)"));

let state = chalk.green("Passed");

let rootTests = [[1,2,2,3,4,4,3],[1,2,2,null,3,null,3]];

for (let test = 0; test < rootTests.length; test++) {

    let root = rootTests[test];

    let power = 0;
    let depth = Math.pow(2,power);

    let firstHalf = [];
    let secondHalf = [];

    let flag = true;

    for (let i = 0; i < 3; i++) {
        depth += Math.pow(2,power);
        
        firstHalf = root.slice(Math.pow(2,power)-1,depth-1).slice(0,root.slice(Math.pow(2,power)-1,depth-1).length/2).sort();
        secondHalf = root.slice(Math.pow(2,power)-1,depth-1).slice(root.slice(Math.pow(2,power)-1,depth-1).length/2,root.slice(Math.pow(2,power)-1,depth-1).length).sort();
        
        if (firstHalf.length > 0 && secondHalf.length > 0) {
            if ((firstHalf.every((val, index) => val === secondHalf[index])) == false) {
                flag = false;
                break;
            }

            if (firstHalf.includes(null) || secondHalf.includes(null)) {
                flag = false;
                break;
            }
            
        }
        power += 1;
    }

    text = chalk.green(`Test ${test+1}: `);

    console.log(`${text}${flag} | ${state}`);
}

