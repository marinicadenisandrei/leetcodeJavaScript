/* Leetcode - 224. Basic Calculator (JavaScript language) - Hard */

const { default: chalk } = require("chalk");

console.log(chalk.yellow("Leetcode - 224. Basic Calculator (JavaScript language) -"), chalk.red("Hard"));

function calculate(sVar) {
    sVar = sVar.replace(/\s+/g, '');
    var flag = true;

    while (flag) {
        flag = false;

        var str_number1 = "";
        var str_number2 = "";

        var indexOperator = 0;
        var index1 = 0;
        var index2 = 0;

        var result = 0;

        for (let i = 0; i < sVar.length; i++) {
            if ((sVar[i] === "+" || sVar[i] === "-") && !isNaN(Number(sVar[i - 1])) && !isNaN(Number(sVar[i + 1]))) {
                indexOperator = i;
                index1 = i;
                index2 = i;

                flag = true;
                break;
            }
        }

        while (!isNaN(Number(sVar[index1 - 1]))) {
            str_number1 = sVar[index1 - 1] + str_number1;
            index1--;
        }
        
        while (!isNaN(Number(sVar[index2 + 1]))) {
            str_number2 += sVar[index2 + 1];
            index2++;
        }

        if (sVar[indexOperator] === '+') {
            result = Number(str_number1) + Number(str_number2);
        }
        else
        {
            result = Number(str_number1) - Number(str_number2);
        }
        
        sVar = sVar.substring(0,index1) + result + sVar.substring(index2 + 1, sVar.length);
        sVar = sVar.replace(/\((\d+)\)/g, '$1');
        
        if (!sVar.includes('+') && !sVar.includes('-') && !sVar.includes('(') && !sVar.includes(')')) {
            break;
        }
    }    

    return Number(sVar);
}

var s = ["1 + 1"," 2-1 + 2 ","(1+(4+5+2)-3)+(6+8)"];

for (let test = 0; test < s.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), calculate(s[test]), "|", chalk.green("Passed"));    
}

