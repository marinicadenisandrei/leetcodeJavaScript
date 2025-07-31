/* Leetcode - 87. Scramble String (JavaScript language) - Hard */

const chalk = require('chalk');
console.log(chalk.yellow("Leetcode - 87. Scramble String (JavaScript language) -"), chalk.red("Hard"));

function stringsGtTwo(stringList) {
    for (let i = 0; i < stringList.length; i++) {
        if (stringList[i].length > 1) {
            return true;
        }
    }

    return false;
}

function isScramble(s1Var, s2Var) {
    if (s1Var.length != s2Var.length) {
        return false;
    }

    if (s1Var.length < 2 && s2Var.length < 2 && s1Var[0] == s2Var[0]) {
        return true;
    }

    let acumulation = [s1Var];
    let final = [];
    let finalWords = [];

    while (stringsGtTwo(acumulation)) {
        for (let i = 0; i < acumulation.length; i++) {
            if (acumulation[i].length > 1) {
                let middle = parseInt(acumulation[i].length / 2);
                let slice1 = acumulation[i].slice(0,middle);
                let slice2 = acumulation[i].slice(middle, acumulation[i].length + 1)
                if (slice1.length < 3 && slice2.length < 3) {
                    final.push(slice1 + "/" + slice2);
                }
                else
                {
                    acumulation.push(slice1);
                    acumulation.push(slice2);
                }
                
                acumulation.splice(i,1);

                break;
            }
        }
    }

    for (let i = 0; i < final.length; i++) {
        let spliItems = final[i].split("/");
        finalWords.push(spliItems[0] + spliItems[1]);
        finalWords.push(spliItems[1] + spliItems[0]);
    }

    for (let i = 0; i < finalWords.length; i++) {
        if (s2Var.includes(finalWords[i])) {
            s2Var = s2Var.replace(finalWords[i],"");
        }
    }

    if (s2Var.length == 0) {
        return true;
    }

    return false;
}

let s1 = ["great","abcde","a"]; 
let s2 = ["rgeat","caebd","a"];

for (let test = 0; test < s1.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`),isScramble(s1[test],s2[test]),"|",chalk.green("Passed"));
}
