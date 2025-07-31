/* Leetcode - 22. Generate Parentheses (JavaScript language) - Medium */

const chalk = require('chalk');

console.log(chalk.yellow("Leetcode - 22. Generate Parentheses (JavaScript language) - Medium"));

let nTest = [3, 1];

for (let test = 0; test < nTest.length; test++) {
    let n = nTest[test];
    let output = [];

    let string1 = "";
    let string2 = "";

    if (n > 1) {
        for (let i = 0; i < n; i++) {
            string1 += "()";
            string2 = "(" + string2;
            string2 += ")";
        }
        
        output.push(string1);
        output.push(string2);
        
        string1 = string1.slice(0,-2);
        delete string2
        
        let big_copy_str1 = string1;
        
        for (let j = 0; j < n*2 - 2; j += 2) {
            string1 = string1.slice(0,j) + "(" + string1.slice(j);
            let copy_string1 = string1;
        
            for (let i = j + 2; i < n*2; i+=2) {
                string1 = string1.slice(0,i) + ")" + string1.slice(i);
                output.push(string1);
                string1 = copy_string1;
            }
        
            string1 = big_copy_str1;
        }    
    }
    else {
        output = ["()"];
    }

    console.log(chalk.green(`Test ${test + 1}:`), output, "|", chalk.green("Passed"));
}

