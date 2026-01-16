/* Leetcode - 319. Bulb Switcher (JavaScript language) - Medium */
const { default: chalk } = require("chalk");

console.log(chalk.yellow("Leetcode - 319. Bulb Switcher (JavaScript language) - Medium"));

function bulbSwitch(n) {
    let bulbs = Array(n).fill(0); 

    for (let i = 1; i <= n; i++) {
        for (let j = i - 1; j < n; j += i) { 
            bulbs[j] = bulbs[j] === 0 ? 1 : 0;
        }
    }

    return bulbs.filter(i => i === 1).length;
}


let n = [3,0,1];

for (let test = 0; test < n.length; test++) {
    console.log(
        chalk.green(`Test ${test + 1}:`),
        bulbSwitch(n[test]),
        "|",
        chalk.green("Passed")
    );
}
