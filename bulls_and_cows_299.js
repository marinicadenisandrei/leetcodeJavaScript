/* Leetcode - 299. Bulls and Cows (JavaScript language) - Medium */

const { default: chalk } = require("chalk");

console.log(chalk.yellow("Leetcode - 299. Bulls and Cows (JavaScript language) - Medium"));

function getHint(secretVar, guessVar) {
    let a = 0; 
    let b = 0; 
    
    let secretArr = secretVar.split('');
    let guessArr = guessVar.split('');

    for (let i = 0; i < secretArr.length; i++) {
        if (secretArr[i] === guessArr[i]) {
            a++;
            secretArr[i] = guessArr[i] = null;
        }
    }

    for (let i = 0; i < guessArr.length; i++) {
        if (guessArr[i] !== null) {
            let index = secretArr.indexOf(guessArr[i]);
            if (index !== -1) {
                b++;
                secretArr[index] = null; 
            }
        }
    }

    return `${a}A${b}B`;
}

let secret = ["1807","1123"];
let guess = ["7810","0111"];

for (let test = 0; test < secret.length; test++) {
    console.log(
        chalk.green(`Test ${test + 1}:`),
        getHint(secret[test], guess[test]),
        "|",
        chalk.green("Passed")
    );
}
