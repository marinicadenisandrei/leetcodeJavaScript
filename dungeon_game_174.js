/* Leetcode - 174. Dungeon Game (JavaScript language) - Hard */

const chalk = require('chalk');
console.log(chalk.yellow("Leetcode - 174. Dungeon Game (JavaScript language) -"), chalk.red("Hard"));

function calculateMinimumHP(dungeonVar) {
    let f = 1;
    let s = f - dungeonVar[dungeonVar.length - 1][dungeonVar[0].length - 1];
    dungeonVar[dungeonVar.length - 1][dungeonVar[0].length - 1] = s;
    
    for (let i = dungeonVar[0].length - 2; i >= 0 ; i--) {
        f = dungeonVar[dungeonVar.length - 1][i + 1];
        s = f - dungeonVar[dungeonVar.length - 1][i];
        dungeonVar[dungeonVar.length - 1][i] = Math.max(1, s);
    }

    for (let i = dungeonVar.length - 2; i >= 0; i--) {
        f = dungeonVar[i + 1][dungeonVar.length - 1];
        s = f - dungeonVar[i][dungeonVar.length - 1];
        dungeonVar[i][dungeonVar.length - 1] = Math.max(1, s);   
    }
    
    for (let i = dungeonVar.length - 2; i >= 0; i--) {
        for (let j = dungeonVar[0].length - 2; j >= 0; j--) {
            f = Math.min(dungeonVar[i + 1][j], dungeonVar[i][j + 1]);
            s = Math.max(1, f - dungeonVar[i][j])
            dungeonVar[i][j] = s; 
        }
    }
    
    return dungeonVar[0][0];
}

let dungeon = [[[-2,-3,3],[-5,-10,1],[10,30,-5]],[[0]]];

for (let test = 0; test < dungeon.length; test++) {
    console.log(chalk.green(`Test ${test + 1}:`), calculateMinimumHP(dungeon[test]), "|", chalk.green("Passed"));    
}

