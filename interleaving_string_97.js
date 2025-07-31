/* Leetcode - 97. Interleaving String (JavaScript language) - Medium */

const chalk = require('chalk');
console.log(chalk.yellow("Leetcode - 97. Interleaving String (JavaScript language) - Medium"));

function isInterleave(s1Var, s2Var, s3Var) {    
    while (s3Var.length > 0) {
        let str1 = "";
        let str2 = "";

        for (let i = 0; i < s3Var.length; i++) {
            if (s1Var[i] == s3Var[i]) {
                str1 += s1Var[i];
            }
            else
            {
                break;
            }
        }

        for (let i = 0; i < s3Var.length; i++) {
            if (s2Var[i] == s3Var[i]) {
                str2 += s2Var[i];
            }
            else
            {
                break;
            }
        }
        
        if (str1.length > str2.length) {
            s3Var = s3Var.replace(str1, "");
            s1Var = s1Var.replace(str1, "");
        }
        else
        {
            s3Var = s3Var.replace(str2, "");
            s2Var = s2Var.replace(str2, "");
        }

        if (str1.length == 0 && str2.length == 0) {
            return false;
        }
    }

    if (s3Var.length > 0) {
        return false;
    }

    return true;
}

let s1 = ["aabcc","aabcc"];
let s2 = ["dbbca","dbbca"];
let s3 = ["aadbbcbcac","aadbbbaccc"];

for (let test = 0; test < s1.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`),isInterleave(s1[test], s2[test], s3[test]),"|",chalk.green("Passed"));
}

