/* Leetcode - 135. Candy (JavaScript language) - Hard */

const chalk = require('chalk');
console.log(chalk.yellow("Leetcode - 135. Candy (JavaScript language) -"), chalk.red("Hard"));

function candy(ratingsVar) {
    let result = [];

    for (let i = 0; i < ratingsVar.length; i++) {
        result.push(1);
    }

    for (let i = 0; i < ratingsVar.length; i++) {
        if (i == 0 && ratingsVar[i] > ratingsVar[i + 1]) {
            result[i]++;
        }
        else if (ratingsVar[i] > ratingsVar[i - 1] || ratingsVar[i] > ratingsVar[i + 1])
        {
            result[i]++;
        }
        else if (i == ratingsVar.length - 1 && ratingsVar[i] > ratingsVar[i - 1])
        {
            result[i]++;
        }
    }

    const sum = result.reduce((acumulator, currentValue) => {
        return acumulator + currentValue;
    }, 0);
    
    return sum;
}

let ratings = [[1,0,2],[1,2,2]];

for (let test = 0; test < ratings.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), candy(ratings[test]), "|", chalk.green("Passed"));    
}
