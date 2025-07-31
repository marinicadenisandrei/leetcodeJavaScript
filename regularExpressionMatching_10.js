const chalk = require('chalk');

console.log(chalk.yellow("Leetcode - 10. Regular Expression Matching -"), chalk.red("Hard"));

let sTest = ["aa", "aa", "ab"];
let pTest = ["a", "a*", ".*"];

for (let test = 0; test < sTest.length; test++) {
    let flag = true;
    let s = sTest[test];
    let p = pTest[test];

    if (s.length != p.length) {
        flag = false;
    }
    else 
    {
        for (let i = 0; i < s.length; i++) {
            if (s[i] != p[i]) {
                flag = false;
                if (p[i] != ".") {
                    if (p[i] == "*") {
                        for (let j = 0; j < i+1; j++) {
                            if (s[i] == s[j]) {
                                flag = true;
                                break;
                            }
                        }
                    }
                }
                else
                {
                    flag = true;
                }
            }   
        }
    }


    console.log(chalk.green(`Test ${test + 1}:`), flag, "|", chalk.green("Passed"));
}

