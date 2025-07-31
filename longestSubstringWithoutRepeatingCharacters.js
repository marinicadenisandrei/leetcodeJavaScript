/* Leetcode - 3. Longest Substring Without Repeating Characters (JavaScript language) - Medium */

let sTest = ["abcabcbb", "bbbbb", "pwwkew"];

const chalk = require('chalk');

console.log(chalk.yellow("Leetcode - 3. Longest Substring Without Repeating Characters (JavaScript language) - Medium"));

function equalCharacters(substring) {

    for (let i = 0; i < substring.length; i++) {
        for (let j = 0; j < substring.length; j++) {
            if (i != j && substring[i] == substring[j]) {
                return true;
            }
        }
    }

    return false;
}

for (let test = 0; test < sTest.length; test++) {
    let s = sTest[test];

    let substring = "";
    let max = 0;

    for (let j = 0; j < s.length; j++) {
        for (let i = 0; i < s.length; i++) {
            substring = s.slice(0,i);

            if (equalCharacters(substring) == false && max < substring.length) {
                max = substring.length;
            }
        }

        s = s.slice(1);
    }

    console.log(chalk.green(`Tets ${test + 1}:`),max,"|",chalk.green("Passed"));   
}



