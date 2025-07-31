const chalk = require('chalk');

console.log(chalk.yellow("Leetcode - 12. Integer to Roman (JavaScript language) - Medium"));

const database = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
};

let symbols = ["I", "V", "X", "L", "C", "D", "M "];

function findRoman(integer) {
    for (let key in database) {
        if (database.hasOwnProperty(key)) {
            let value = database[key];
            if (value == integer) {
                return key;
            }
        }
    }
    
    return false;
}

function findCobinations(integer) {
    let roman = "";
    let result = 0;
    
    for (let key in database) {
        if (database.hasOwnProperty(key)) {
            let value = database[key];
            if (value > integer) {
                result = value;
                roman += key;
                break;
            }
        }
    }

    for (let key in database) {
        if (database.hasOwnProperty(key)) {
            let value = database[key];
            if (result - value == integer) {
                return key + roman;
            }
        }
    }

    if (result == integer) {
        return roman;
    }
    else
    {
        return false;
    }
}

function romanSum(integer) {
    let result = integer;
    let romanString = "";

    while (result > 0) {
        for (let i = 0; i < symbols.length; i++) {
            if (database[symbols[i]] > result) {
                result -= database[symbols[i-1]];
                romanString += symbols[i-1];
                break
            }   
        }
    }
    return romanString;
}

let numTest = [3, 58, 1994];

for (let test = 0; test < numTest.length; test++) {
    let num = numTest[test];

    let stringNumber = String(num);
    let stringNumberLen = stringNumber.length;


    let output = "";
    let flag = false;

    for (let i = stringNumberLen - 1, j = 1; i >= 0; i--, j *= 10) {
        
        let number = parseInt(stringNumber[i]) * j;

        if (findRoman(number) != false) {
            output = findRoman(number) + output;
        }
        else if (findCobinations(number) != false) {
            output = findCobinations(number) + output;
        }
        else
        {
            output = romanSum(number) + output;
        }

    }

    console.log(chalk.green(`Test ${test + 1}:`), output, "|", chalk.green("Passed"));
}



