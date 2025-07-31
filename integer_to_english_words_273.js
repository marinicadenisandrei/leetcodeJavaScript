/* Leetcode - 273. Integer to English Words (JavaScript language) - Hard */

const { default: chalk } = require("chalk");

console.log(chalk.yellow("Leetcode - 273. Integer to English Words (JavaScript language) -"), chalk.red("Hard"));

function numberToWords(numVar) {
    const wordsDatabase = [
        ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"],
        ["Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"],
        ["Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"]
    ];

    let stringNum = String(numVar);
    let numberList = [];
    let c = 0;

    let temp = "";

    for (let i = stringNum.length - 1; i >= 0; i--) {
        temp = stringNum[i] + temp;
        c++;

        if (c == 3) {
            numberList.push(parseInt(temp));
            temp = "";
            c = 0;
        }
    }

    if (temp.length > 0) {numberList.push(parseInt(temp));}

    let result = "";
    
    for (let i = 0; i < numberList.length; i++) {
        let resultTemp = "";
        let tempNumber = String(numberList[i]);
        let possibleHard = parseInt(tempNumber.slice(1));
        
        if (tempNumber.length == 3)
        {
            resultTemp += wordsDatabase[0][parseInt(tempNumber[0])] + " hundred ";
            
            if (possibleHard >= 10 && possibleHard < 20) {
                resultTemp += wordsDatabase[1][(possibleHard % 10)] +  " ";
            }
            else {
                resultTemp += wordsDatabase[2][parseInt(tempNumber[1] - 1)] + " ";
                resultTemp += wordsDatabase[0][parseInt(tempNumber[2])] + " ";
            }
        }
        else if (tempNumber.length == 2)
        {
            possibleHard = parseInt(tempNumber);

            if (possibleHard >= 10 && possibleHard < 20) {
                resultTemp += wordsDatabase[1][(possibleHard % 10)] +  " ";
            }
            else {
                resultTemp += wordsDatabase[2][parseInt(tempNumber[0] - 1)] + " ";
                resultTemp += wordsDatabase[0][parseInt(tempNumber[1])] + " ";
            }
        }
        else
        {
            resultTemp += wordsDatabase[0][parseInt(tempNumber[0])] + " ";
        }

        switch (i) {
            case 1:
                resultTemp += "Thousand ";
                break;
            case 2:
                resultTemp += "Million ";
                break
            default:
                break;
        }

        result = resultTemp + result;
    }

    return result;
}

let num = [123,12345,1234567];

for (let test = 0; test < num.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), numberToWords(num[test]), "|", chalk.green("Passed"));
}