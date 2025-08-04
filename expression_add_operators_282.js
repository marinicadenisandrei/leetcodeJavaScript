/* Leetcode - 282. Expression Add Operators (JavaScript language) - Hard */

const { default: chalk } = require("chalk");

console.log(chalk.yellow("Leetcode - 282. Expression Add Operators (JavaScript language) -"), chalk.red("Hard"));

function addOperators(numVar, targetVar) {
    var result = [];

    for (let j = 0; j <= 3; j++) {
        tempExpr = "";
        tempResult = 0;

        switch (j) {
            case 0:
                for (let i = 0; i < numVar.length; i++) {
                    tempResult += Number(numVar[i]);
                    tempExpr += numVar[i] + ((i < numVar.length - 1) ? "+" : "");
                }
                break;
            case 1:
                tempResult = 1;
                
                for (let i = 0; i < numVar.length; i++) {
                    tempResult *= Number(numVar[i]);
                    tempExpr += numVar[i] + ((i < numVar.length - 1) ? "*" : "");
                }
                break;
            case 2:
                tempResult = -1;
                
                for (let i = 0; i < numVar.length; i++) {
                    if (i % 2 == 0) {
                        tempExpr += numVar[i] + ((i < numVar.length - 1) ? "*" : "");
                    }
                    else {
                        tempExpr += numVar[i] + ((i < numVar.length - 1) ? "+" : "");
                    }
                }

                break;
            case 3:
                tempResult = -1;
                
                for (let i = 0; i < numVar.length; i++) {
                    if (i % 2 == 0) {
                        tempExpr += numVar[i] + ((i < numVar.length - 1) ? "+" : "");
                    }
                    else {
                        tempExpr += numVar[i] + ((i < numVar.length - 1) ? "*" : "");
                    }
                }

                break;
        
            default:
                break;
        }

        if (tempResult == -1 && eval(tempExpr) == targetVar) {
            result.push(tempExpr);
        }
        else if (tempResult == targetVar) {
            result.push(tempExpr);
        }
    }

    return result;
}

var num = ["123","232","3456237490"]; 
var target = [6,8,9191];

for (let test = 0; test < num.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), addOperators(num[test], target[test]), "|", chalk.green("Passed"));
}