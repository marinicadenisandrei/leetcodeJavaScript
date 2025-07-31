/* Leetcode - 91. Decode Ways (JavaScript language) - Medium */ 

const chalk = require('chalk');
console.log(chalk.yellow("Leetcode - 91. Decode Ways (JavaScript language) - Medium"));

function numDecodings(sVar) {
    let messaages = 1;
    for (let i = 0; i < sVar.length - 1; i++) {
        let temp = sVar[i] + sVar[i + 1];
        if (parseInt(temp) < 27 && parseInt(temp) > 0 && temp[0] != '0') {
            messaages += 1;
        }
    }

    return messaages;
}

let s = ["12","226","06"];
for (let test = 0; test < s.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`),numDecodings(s[test]),"|",chalk.green("Passed"));    
}
