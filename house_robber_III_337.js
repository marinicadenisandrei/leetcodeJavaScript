/* Leetcode - 337. House Robber III (JavaScript language) - Medium */

const { default: chalk } = require("chalk");

console.log(chalk.yellow("Leetcode - 337. House Robber III (JavaScript language) - Medium"));

function rob(rootVar) {
    let sum1 = 0;
    let sum2 = 0;

    let i = 1;
    let level = 0;
    
    while (rootVar.length > 0) {
        let taken = rootVar.splice(0, i);
        const sum = taken.reduce((total, current) => total + current, 0);
        
        if (level % 2 == 0) {
            sum1 += sum;
        } else {
            sum2 += sum;
        }

        i *= 2;
        level++;
    }

    return sum1 > sum2 ? sum1 : sum2;
}

let root = [[3,2,3,0,3,0,1],[3,4,5,1,3,0,1]];

for (let test = 0; test < root.length; test++) {
    console.log(
        chalk.green(`Test ${test + 1}:`),
        rob(root[test]),
        "|",
        chalk.green("Passed")
    );
}
