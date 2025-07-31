/* Leetcode - 44. Wildcard Matching (JavaScript) - Hard */

const chalk = require('chalk');

console.log(chalk.yellow("Leetcode - 44. Wildcard Matching (JavaScript) -"), chalk.red("Red"));

function prepareStrings(s, p) {
    if (p[p.length - 1] == "*") {
        let diff = s.length - p.length;

        for (let i = 0; i < diff; i++) p += "*";
    }

    return p;
}

function isMatch(s, p) {
    let flag = true;

    p = prepareStrings(s, p);

    for (let i = 0; i < s.length; i++) {
        if (s[i] != p[i]) {
            if (p[i] != "?") {
                if (p[i] == "*") {
                    let flagStar = false;

                    for (let j = 0; j <= i; j++) {
                        if (p[i] == p[j]) {
                            flagStar = true;
                            break;
                        }
                    }

                    if (flagStar == false) {
                        return false;
                    }
                }
                else
                {
                    return false;
                }
            }
        }
    }

    return true;
}

let s = ["aa", "aa", "cb"]; 
let p = ["a", "*", "?a"];

for (let test = 0; test < p.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), isMatch(s[test], p[test]), "|", chalk.green("Passed"));
}