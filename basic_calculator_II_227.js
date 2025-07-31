/* Leetcode - 227. Basic Calculator II (JavaScript language) - Medium */

const { default: chalk } = require("chalk");

console.log(chalk.yellow("Leetcode - 227. Basic Calculator II (JavaScript language) - Medium"));

function calculate(sVar) {
    var flag = true;
    sVar = sVar.replace(/\s+/g, "");

    while (flag) {
        flag = false;

        for (let i = 0; i < sVar.length; i++) {
            var result = 0;
    
            var number1 = "";
            var number2 = "";
    
            var left = 0;
            var right = 0;
    
            if (sVar[i] == '*' || sVar[i] == '/') {
                for (let j = i - 1; j >= 0; j--) {
                    if (!isNaN(sVar[j])) {
                        number1 = number1 + sVar[j];
                        left = j;
                    }
                    else
                    {
                        break;
                    }
                }
    
                for (let j = i + 1; j < sVar.length; j++) {
                    if (!isNaN(sVar[j])) {
                        number2 += sVar[j];
                        right = j + 1;
                    }
                    else
                    {
                        break;
                    }
                }
    
                if (sVar[i] == '*') {
                    result = parseInt(number1) * parseInt(number2);
                }
                else if (sVar[i] == '/') {
                    result = parseInt(number1) / parseInt(number2);
                }

                result = Math.floor(result);
    
                sVar = sVar.substring(0, left) + String(result) + sVar.substring(right);
                flag = true;

                if (!(sVar.includes("*") || sVar.includes("/"))) {
                    flag = false;
                }

                break;
            } 
        }   
    }

    flag = true;

    while (flag) {
        flag = false;

        for (let i = 0; i < sVar.length; i++) {
            var result = 0;
    
            var number1 = "";
            var number2 = "";
    
            var left = 0;
            var right = 0;
    
            if (sVar[i] == '+' || sVar[i] == '-') {
                for (let j = i - 1; j >= 0; j--) {
                    if (!isNaN(sVar[j])) {
                        number1 = number1 + sVar[j];
                        left = j;
                    }
                    else
                    {
                        break;
                    }
                }
    
                for (let j = i + 1; j < sVar.length; j++) {
                    if (!isNaN(sVar[j])) {
                        number2 += sVar[j];
                        right = j + 1;
                    }
                    else
                    {
                        break;
                    }
                }
    
                if (sVar[i] == '+') {
                    result = parseInt(number1) + parseInt(number2);
                }
                else if (sVar[i] == '-') {
                    result = parseInt(number1) - parseInt(number2);
                }

                result = Math.floor(result);
    
                sVar = sVar.substring(0, left) + String(result) + sVar.substring(right);
                flag = true;

                if (!(sVar.includes("+") || sVar.includes("-"))) {
                    flag = false;
                }

                break;
            } 
        }   
    }

    return sVar;
}

var s = ["3+2*2"," 3/2 ", " 3+5 / 2 "];

for (let test = 0; test < s.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), calculate(s[test]), "|", chalk.green("Passed"));
}
