/* Leetcode - 178. Rank Scores (JavaScript language) - Medium */

const chalk = require('chalk');
console.log(chalk.yellow("Leetcode - 178. Rank Scores (JavaScript language) - Medium"));

function rankScores(scoreVar) {
    let rank = 1;

    scoreVar.sort();
    
    for (let i = scoreVar.length - 1; i >= 0; i--) {
        console.log(scoreVar[i], rank); 
        
        if (scoreVar[i] != scoreVar[i - 1]) {
            rank++;
        }
    }
}

let score = [3.5,3.65,4,3.85,4,3.65];

console.log(chalk.green("Test 1:"));

rankScores(score);

console.log("|", chalk.green("Passed"));