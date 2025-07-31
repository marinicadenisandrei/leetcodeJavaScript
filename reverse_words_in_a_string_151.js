/* Leetcode - 151. Reverse Words in a String (JavaScript language) - Medium */

const chalk = require('chalk');
console.log(chalk.yellow("Leetcode - 151. Reverse Words in a String (JavaScript language) - Medium"));

function reverseWords(sVar) {
    let splitS = sVar.split(" ");
    splitS = splitS.filter(element => element !== '');
    splitS.reverse();
    let newS = splitS.join(' ');
    
    return newS
}

let s = ["the sky is blue","  hello world  ","a good   example"];

for (let test = 0; test < s.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), reverseWords(s[test]), "|", chalk.green("Passed"));    
}

